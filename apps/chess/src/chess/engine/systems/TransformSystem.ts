import { Euler, Quaternion, Vector3 } from 'three'
import { defineQuery, getComponent, hasComponent, removeComponent, System, Entity, defineComponent, World } from '../ecs'


export type CopyTransformComponentType = {
  input: Entity
}

export const CopyTransformComponent = defineComponent<CopyTransformComponentType>()
export type DesiredTransformComponentType = {
  position: Vector3
  rotation: Quaternion
  positionRate: number
  rotationRate: number
  lockRotationAxis: [boolean, boolean, boolean]
}

export const DesiredTransformComponent = defineComponent<DesiredTransformComponentType>()

export type TransformComponentType = {
  position: Vector3
  rotation: Quaternion
  scale: Vector3
}

export const TransformComponent = defineComponent<TransformComponentType>()


export type TransformParentComponentType = {
  children: any[]
}

export const TransformParentComponent = defineComponent<TransformParentComponentType>()

import { Object3DComponent } from '../scene'

export type TransformChildComponentType = {
  parent: any
  offsetPosition: Vector3
  offsetQuaternion: Quaternion
}

export const TransformChildComponent = defineComponent<TransformChildComponentType>()

export const GetObjectTransformComponent = defineComponent();

const euler1YXZ = new Euler()
euler1YXZ.order = 'YXZ'
const euler2YXZ = new Euler()
euler2YXZ.order = 'YXZ'

export default async function TransformSystem(world: World): Promise<System> {
  const parentQuery = defineQuery([TransformParentComponent, TransformComponent])
  const childQuery = defineQuery([TransformChildComponent, TransformComponent])
  const copyTransformQuery = defineQuery([CopyTransformComponent])
  const desiredTransformQuery = defineQuery([DesiredTransformComponent])
  // const tweenQuery = defineQuery([TweenComponent])
  const transformObjectQuery = defineQuery([TransformComponent, Object3DComponent])
  const objectTransformQuery = defineQuery([
    GetObjectTransformComponent,
    Object3DComponent,
    TransformComponent,
  ]);

  return () => {
    const { fixedDelta } = world
    for (const entity of parentQuery(world)) {
      const parentTransform = getComponent(entity, TransformComponent, world)!
      const parentingComponent = getComponent(entity, TransformParentComponent, world)!
      for (const child of parentingComponent.children) {
        if (!hasComponent(child, Object3DComponent, world)) {
          continue
        }
        const {
          value: { position: childPosition, quaternion: childQuaternion }
        } = getComponent(child, Object3DComponent, world)!
        const childTransformComponent = getComponent(child, TransformComponent, world)!
        // reset to "local"
        if (childTransformComponent) {
          childPosition.copy(childTransformComponent.position)
          childQuaternion.copy(childTransformComponent.rotation)
        } else {
          childPosition.setScalar(0)
          childQuaternion.set(0, 0, 0, 0)
        }
        // add parent
        childPosition.add(parentTransform.position)
        childQuaternion.multiply(parentTransform.rotation)
      }
    }

    for (var entity of objectTransformQuery(world)) {
      const object3DComponent = getComponent(entity, Object3DComponent, world)!;
      const transform = getComponent(entity, TransformComponent, world)!;
      transform.position.copy(object3DComponent.value.position);
      transform.rotation.copy(object3DComponent.value.quaternion);
      transform.scale.copy(object3DComponent.value.scale);
    }


    for (const entity of childQuery(world)) {
      const childComponent = getComponent(entity, TransformChildComponent, world)!
      const parent = childComponent.parent
      const parentTransform = getComponent(parent, TransformComponent, world)!
      const childTransformComponent = getComponent(entity, TransformComponent, world)!
      if (childTransformComponent && parentTransform) {
        childTransformComponent.position.setScalar(0).add(parentTransform.position).add(childComponent.offsetPosition)
        childTransformComponent.rotation
          .set(0, 0, 0, 1)
          .multiply(parentTransform.rotation)
          .multiply(childComponent.offsetQuaternion)
      }
    }

    for (const entity of copyTransformQuery(world)) {
      const inputEntity = getComponent(entity, CopyTransformComponent, world)!.input
      const outputTransform = getComponent(entity, TransformComponent, world)!
      const inputTransform = getComponent(inputEntity, TransformComponent, world)!

      if (!inputTransform || !outputTransform) {
        // wait for both transforms to appear?
        continue
      }

      outputTransform.position.copy(inputTransform.position)
      outputTransform.rotation.copy(inputTransform.rotation)

      removeComponent(entity, CopyTransformComponent, world)
    }

    for (const entity of desiredTransformQuery(world)) {
      const desiredTransform = getComponent(entity, DesiredTransformComponent, world)!

      const mutableTransform = getComponent(entity, TransformComponent, world)!
      mutableTransform.position.lerp(desiredTransform.position, desiredTransform.positionRate * fixedDelta)

      // store rotation before interpolation
      euler1YXZ.setFromQuaternion(mutableTransform.rotation)
      // lerp to desired rotation

      mutableTransform.rotation.slerp(desiredTransform.rotation, desiredTransform.rotationRate * fixedDelta)
      euler2YXZ.setFromQuaternion(mutableTransform.rotation)
      // use axis locks - yes this is correct, the axis order is weird because quaternions
      if (desiredTransform.lockRotationAxis[0]) {
        euler2YXZ.x = euler1YXZ.x
      }
      if (desiredTransform.lockRotationAxis[2]) {
        euler2YXZ.y = euler1YXZ.y
      }
      if (desiredTransform.lockRotationAxis[1]) {
        euler2YXZ.z = euler1YXZ.z
      }
      mutableTransform.rotation.setFromEuler(euler2YXZ)
    }

    // for (const entity of tweenQuery(world)) {
    //   const tween = getComponent(entity, TweenComponent, world)!
    //   tween.tween.update()
    // }

    for (const entity of transformObjectQuery(world)) {
      const transform = getComponent(entity, TransformComponent, world)!
      const object3DComponent = getComponent(entity, Object3DComponent, world)!

      if (!object3DComponent.value) {
        console.warn('object3D component on entity', entity, ' is undefined')
        continue
      }

      object3DComponent.value.position.copy(transform.position)
      object3DComponent.value.quaternion.copy(transform.rotation)
      object3DComponent.value.scale.copy(transform.scale)
      object3DComponent.value.updateMatrixWorld()
    }
  }
}
