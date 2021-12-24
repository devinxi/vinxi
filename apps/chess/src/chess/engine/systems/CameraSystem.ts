import { Material, MathUtils, Matrix4, Quaternion, SkinnedMesh, Vector3 } from 'three'
import { lerp } from 'three/src/math/MathUtils'
import { Entity, getComponent, removeComponent, World, System, defineQuery, createEntity, addComponent, hasComponent, defineComponent, events, EVENT } from '../ecs'
import { useEngine } from '../react/engine'
import { Object3DComponent } from '../scene'
import { TransformComponent, DesiredTransformComponent } from './TransformSystem'

// import { RaycastQuery } from 'three-physx'
/** Camera Modes. */
export enum CameraMode {
  FirstPerson,
  ShoulderCam,
  ThirdPerson,
  TopDown,
  Strategic,
  Dynamic
}


export type FollowCameraComponentType = {
  /** * **Default** value is ```'thirdPerson'```. */
  mode: CameraMode
  /** Distance to the target  */
  distance: number
  /** Desired zoom level  */
  zoomLevel: number
  /** Used internally */
  zoomVelocity: { value: number }
  /** Minimum distance to target */
  minDistance: number
  /** Maximum distance to target */
  maxDistance: number
  /** Rotation around Y axis */
  theta: number
  /** Rotation around Z axis */
  phi: number
  /** Whether looking over left or right shoulder */
  shoulderSide: boolean
  /** Whether the camera auto-rotates toward the target **Default** value is true. */
  locked: boolean
  /** Camera physics raycast data */
  // raycastQuery: RaycastQuery
  /** Camera physics raycast has hit */
  rayHasHit: boolean
  // collisionMask: CollisionGroups
}

export const FollowCameraDefaultValues: FollowCameraComponentType = {
  mode: CameraMode.ThirdPerson,
  zoomLevel: 3,
  zoomVelocity: { value: 0 },
  distance: 3,
  minDistance: 2,
  maxDistance: 7,
  theta: Math.PI,
  phi: 0,
  shoulderSide: true,
  locked: true,
  // raycastQuery: null,
  rayHasHit: false,
  // collisionMask: CollisionGroups.Default
}

export const FollowCameraComponent = defineComponent<FollowCameraComponentType>()


export type TargetCameraRotationComponentType = {
  /** Rotation around Y axis */
  theta: number
  /** Rotation around Z axis */
  phi: number
  /** Time to reach the target */
  time: number
  phiVelocity: { value: number }
  thetaVelocity: { value: number }
}

export const TargetCameraRotationComponent = defineComponent<TargetCameraRotationComponentType>()

export const CameraComponent = defineComponent();


const direction = new Vector3()
const quaternion = new Quaternion()
const upVector = new Vector3(0, 1, 0)
const empty = new Vector3()
const PI_2Deg = Math.PI / 180
const mx = new Matrix4()
const tempVec = new Vector3()
const tempVec1 = new Vector3()

/**
 * Calculates and returns view vector for give angle. View vector will be at the given angle after the calculation
 * @param viewVector Current view vector
 * @param angle angle to which view vector will be rotated
 * @param isDegree Whether the angle is in degree or radian
 * @returns View vector having given angle in the world space
 */
export const rotateViewVectorXZ = (viewVector: Vector3, angle: number, isDegree?: boolean): Vector3 => {
  if (isDegree) {
    angle = (angle * Math.PI) / 180 // Convert to Radian
  }

  const oldAngle = Math.atan2(viewVector.x, viewVector.z)

  // theta - newTheta ==> To rotate Left on mouse drage Right -> Left
  // newTheta - theta ==> To rotate Right on mouse drage Right -> Left
  const dif = oldAngle - angle

  if (Math.abs(dif) % Math.PI > 0.0001) {
    viewVector.setX(Math.sin(oldAngle - dif))
    viewVector.setZ(Math.cos(oldAngle - dif))
  }

  return viewVector
}

const getPositionRate = () => (window?.innerWidth <= 768 ? 6 : 3)
const getRotationRate = () => (window?.innerWidth <= 768 ? 5 : 3.5)

const setAvatarOpacity = (entity: Entity, opacity: number, world: World): void => {
  const object3DComponent = getComponent(entity, Object3DComponent, world)
  if (object3DComponent) {
    object3DComponent.value.traverse((obj) => {
      const mat = (obj as SkinnedMesh).material as Material
      if (!mat) return
      mat.opacity = opacity
      mat.transparent = opacity != 1
    })
  }
}

const updateAvatarOpacity = (entity: Entity, world: World) => {
  if (!entity) return

  const followCamera = getComponent(entity, FollowCameraComponent, world)!
  const distanceRatio = Math.min(followCamera.distance / followCamera.minDistance, 1)

  setAvatarOpacity(entity, distanceRatio, world)
}

/**
 * Gradually changes a value towards a desired goal over time.
 * @param current The current position.
 * @param target The position we are trying to reach.
 * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
 * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
 * @param deltaTime The time since the last call to this function.
 * @param maxSpeed Optionally allows you to clamp the maximum speed.
 * @returns Smoothed interpolation between current and target.
 */
export const smoothDamp = (
  current: number,
  target: number,
  currentVelocity: { value: number },
  smoothTime: number,
  deltaTime: number,
  maxSpeed: number = Infinity
) => {
  // Based on Game Programming Gems 4 Chapter 1.10
  smoothTime = Math.max(0.0001, smoothTime)
  let omega = 2 / smoothTime

  let x = omega * deltaTime
  let exp = 1 / (1 + x + 0.48 * x * x + 0.235 * x * x * x)
  let change = current - target
  let originalTo = target

  // Clamp maximum speed
  let maxChange = maxSpeed * smoothTime
  change = Math.min(Math.max(change, -maxChange), maxChange)
  target = current - change

  let temp = (currentVelocity.value + omega * change) * deltaTime
  currentVelocity.value = (currentVelocity.value - omega * temp) * exp
  let output = target + (change + temp) * exp

  // Prevent overshooting
  if (originalTo - current > 0.0 == output > originalTo) {
    output = originalTo
    currentVelocity.value = (output - originalTo) / deltaTime
  }

  return output
}

const updateCameraTargetRotation = (entity: Entity, delta: number, world: World) => {
  if (!entity) return
  const followCamera = getComponent(entity, FollowCameraComponent, world)!
  const target = getComponent(entity, TargetCameraRotationComponent, world)!
  const epsilon = 0.001

  if (Math.abs(target.phi - followCamera.phi) < epsilon && Math.abs(target.theta - followCamera.theta) < epsilon) {
    removeComponent(entity, TargetCameraRotationComponent, world)
    return
  }

  followCamera.phi = smoothDamp(followCamera.phi, target.phi, target.phiVelocity, target.time, delta)
  followCamera.theta = smoothDamp(followCamera.theta, target.theta, target.thetaVelocity, target.time, delta)
}

const updateFollowCamera = (entity: Entity, delta: number, world: World) => {
  if (!entity) return

  const followCamera = getComponent(entity, FollowCameraComponent, world)!

  // Limit the pitch
  followCamera.phi = Math.min(85, Math.max(-70, followCamera.phi))

  // Zoom smoothing
  followCamera.distance = smoothDamp(
    followCamera.distance,
    followCamera.zoomLevel,
    followCamera.zoomVelocity,
    0.3,
    delta
  )

  let camDist = followCamera.distance
  const theta = followCamera.theta
  const phi = followCamera.phi

  // const avatar = getComponent(entity, Avatar, world)
  let avatar = { avatarHeight: 10 };
  const transformComponent = getComponent(entity, TransformComponent, world)!

  const minDistanceRatio = Math.min(followCamera.distance / followCamera.minDistance, 1)
  const side = followCamera.shoulderSide ? -1 : 1
  const shoulderOffset = lerp(0, 0.2, minDistanceRatio) * side
  const heightOffset = lerp(0, 0.25, minDistanceRatio)

  tempVec.set(shoulderOffset, avatar.avatarHeight + heightOffset, 0)
  tempVec.applyQuaternion(transformComponent.rotation)
  tempVec.add(transformComponent.position)

  // Raycast for camera
  const cameraTransform = getComponent(world.mainCameraEntity, TransformComponent, world)!
  // const raycastDirection = tempVec1.setScalar(0).subVectors(cameraTransform.position, tempVec).normalize()
  // followCamera.raycastQuery.origin.copy(tempVec)
  // followCamera.raycastQuery.direction.copy(raycastDirection)

  // const closestHit = followCamera.raycastQuery.hits[0]
  // followCamera.rayHasHit = closestHit !== undefined

  // if (followCamera.rayHasHit && closestHit.distance < camDist) {
  // camDist = closestHit.distance < 0.5 ? closestHit.distance : closestHit.distance - 0.5
  // }

  cameraTransform.position.set(
    tempVec.x + camDist * Math.sin(theta * PI_2Deg) * Math.cos(phi * PI_2Deg),
    tempVec.y + camDist * Math.sin(phi * PI_2Deg),
    tempVec.z + camDist * Math.cos(theta * PI_2Deg) * Math.cos(phi * PI_2Deg)
  )

  direction.copy(cameraTransform.position).sub(tempVec).normalize()

  mx.lookAt(direction, empty, upVector)
  cameraTransform.rotation.setFromRotationMatrix(mx)

  if (followCamera.locked) {
    const newTheta = MathUtils.degToRad(theta + 180) % (Math.PI * 2)
    transformComponent.rotation.slerp(quaternion.setFromAxisAngle(upVector, newTheta), delta * 2)
  }
}

const followCamera = (entity: Entity, delta: number, world: World) => {

  if (!entity) return


  const cameraDesiredTransform = getComponent(world.mainCameraEntity, DesiredTransformComponent, world) // Camera

  if (!cameraDesiredTransform) return

  cameraDesiredTransform.rotationRate = getRotationRate()
  cameraDesiredTransform.positionRate = getPositionRate()

  // const avatar = getComponent(entity, Avatar, world)
  const avatarTransform = getComponent(entity, TransformComponent, world)!

  const followCamera = getComponent(entity, FollowCameraComponent, world)!

  let avatar = { avatarHeight: 10 };
  let theta
  let camDist = followCamera.distance
  let phi = followCamera.phi

  if (followCamera.mode !== CameraMode.Strategic) {
    followCamera.phi = Math.min(85, Math.max(-70, followCamera.phi))
  }

  if (followCamera.mode === CameraMode.FirstPerson) {
    camDist = 0.01
    theta = followCamera.theta
    tempVec.set(0, avatar.avatarHeight, 0)
  } else if (followCamera.mode === CameraMode.Strategic) {
    tempVec.set(0, avatar.avatarHeight * 2, -3)
    theta = 180
    phi = 150
  } else {
    if (followCamera.mode === CameraMode.ShoulderCam) {
      camDist = followCamera.minDistance
    } else if (followCamera.mode === CameraMode.TopDown) {
      camDist = followCamera.maxDistance
      phi = 85
    }
    theta = followCamera.theta

    const shoulderOffset = followCamera.shoulderSide ? -0.2 : 0.2
    tempVec.set(shoulderOffset, avatar.avatarHeight + 0.25, 0)
  }

  tempVec.applyQuaternion(avatarTransform.rotation)
  tempVec.add(avatarTransform.position)

  // Raycast for camera
  const cameraTransform = getComponent(world.mainCameraEntity, TransformComponent, world)!
  // const raycastDirection = new Vector3().subVectors(cameraTransform.position, tempVec).normalize()
  // followCamera.raycastQuery.origin.copy(tempVec)
  // followCamera.raycastQuery.direction.copy(raycastDirection)

  // const closestHit = followCamera.raycastQuery.hits[0]
  // followCamera.rayHasHit = closestHit !== undefined

  // if (
  //   followCamera.mode !== CameraMode.FirstPerson &&
  //   followCamera.mode !== CameraMode.Strategic &&
  //   followCamera.rayHasHit &&
  //   closestHit.distance < camDist
  // ) {
  //   if (closestHit.distance < 0.5) {
  //     camDist = closestHit.distance
  //   } else {
  //     camDist = closestHit.distance - 0.5
  //   }
  // }

  cameraDesiredTransform.position.set(
    tempVec.x + camDist * Math.sin(theta * PI_2Deg) * Math.cos(phi * PI_2Deg),
    tempVec.y + camDist * Math.sin(phi * PI_2Deg),
    tempVec.z + camDist * Math.cos(theta * PI_2Deg) * Math.cos(phi * PI_2Deg)
  )

  direction.copy(cameraDesiredTransform.position).sub(tempVec).normalize()

  mx.lookAt(direction, empty, upVector)
  cameraDesiredTransform.rotation.setFromRotationMatrix(mx)

  if (followCamera.mode === CameraMode.FirstPerson) {
    cameraTransform.position.copy(cameraDesiredTransform.position)
    cameraTransform.rotation.copy(cameraDesiredTransform.rotation)
  }

  if (followCamera.locked || followCamera.mode === CameraMode.FirstPerson) {
    const newTheta = MathUtils.degToRad(followCamera.theta + 180) % (Math.PI * 2)
    avatarTransform.rotation.slerp(quaternion.setFromAxisAngle(upVector, newTheta), delta * 2)
  }
}

export const resetFollowCamera = (world: World) => {
  let { mainCameraEntity: activeCameraEntity, mainCameraFollowTarget: activeCameraFollowTarget } = world;
  const transform = getComponent(activeCameraEntity, TransformComponent, world)
  const desiredTransform = getComponent(activeCameraEntity, DesiredTransformComponent, world)
  if (transform && desiredTransform) {
    followCamera(activeCameraFollowTarget, 1 / 60, world)
    transform.position.copy(desiredTransform.position)
    transform.rotation.copy(desiredTransform.rotation)
  }
}

export default async function CameraSystem(world: World): Promise<System> {
  const followCameraQuery = defineQuery([FollowCameraComponent, TransformComponent])
  const targetCameraRotationQuery = defineQuery([FollowCameraComponent, TargetCameraRotationComponent])

  // If we lose focus on the window, and regain it, copy our desired transform to avoid strange transform behavior and clipping
  // events.on(EVENT.WINDOW_FOCUS, ({ focused }) => {
  //   if (focused) {
  //     resetFollowCamera(world)
  //   }
  // })

  return () => {
    const { delta, mainCameraEntity: activeCameraEntity, mainCamera: activeCamera } = world

    if (!activeCameraEntity) return

    for (const entity of followCameraQuery.enter(world)) {
      // const cameraFollow = getComponent(entity, FollowCamera, world)!
      // cameraFollow.raycastQuery = PhysXInstance.instance.addRaycastQuery(
      //   new RaycastQuery({
      //     type: SceneQueryType.Closest,
      //     origin: new Vector3(),
      //     direction: new Vector3(0, -1, 0),
      //     maxDistance: 10,
      //     collisionMask: cameraFollow.collisionMask
      //   })
      // )
      world.mainCameraFollowTarget = entity
      if (hasComponent(activeCameraEntity, DesiredTransformComponent, world)) {
        removeComponent(activeCameraEntity, DesiredTransformComponent, world)
      }
      addComponent(activeCameraEntity, DesiredTransformComponent, {
        position: new Vector3(),
        rotation: new Quaternion(),
        lockRotationAxis: [false, true, false],
        rotationRate: getRotationRate(),
        positionRate: getPositionRate()
      }, world)
      resetFollowCamera(world)
    }

    for (const entity of followCameraQuery.exit(world)) {
      // const cameraFollow = getComponent(entity, FollowCameraComponent, true)
      // if (cameraFollow) PhysXInstance.instance.removeRaycastQuery(cameraFollow.raycastQuery)
      world.mainCameraFollowTarget = 0
      const activeCameraComponent = getComponent(activeCameraEntity, CameraComponent, world)
      if (activeCameraComponent) {
        removeComponent(activeCameraEntity, DesiredTransformComponent, world)
      }
    }

    for (const entity of followCameraQuery(world)) {
      updateFollowCamera(entity, delta, world)
      updateAvatarOpacity(entity, world)
    }

    for (const entity of targetCameraRotationQuery(world)) {
      updateCameraTargetRotation(entity, delta, world)
    }


    // if (Engine.xrRenderer?.isPresenting) {
    //   Engine.xrRenderer.updateCamera(Engine.camera)
    if (activeCameraEntity && activeCamera) {
      const transform = getComponent(activeCameraEntity, TransformComponent, world)!
      activeCamera.position.copy(transform.position)
      activeCamera.quaternion.copy(transform.rotation)
      activeCamera.scale.copy(transform.scale)
      activeCamera.updateMatrixWorld()
    }
  }
}
