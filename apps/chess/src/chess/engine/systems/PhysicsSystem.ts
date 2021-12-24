import * as Rapier from "@dimforge/rapier3d-compat";
import {
  Vector3,
  Mesh,
  Quaternion,
  ArrowHelper,
  Euler,
  BufferGeometry,
} from "three";
import { Object3DComponent } from "../core/components";
import {
  System,
  defineSystem,
  World,
  defineMapComponent,
  defineQuery,
  enterQuery,
  addMapComponent,
  singletonQuery,
} from "../core/threecs";
import { activeSceneQuery } from "./RendererSystem";

interface PhysicsWorldProps {
  gravity: Vector3;
  debug: boolean;
}

export const PhysicsWorldComponent = defineMapComponent<PhysicsWorldProps>();

export function addPhysicsWorldComponent(
  world: World,
  eid: number,
  props: Partial<PhysicsWorldProps> = {}
) {
  addMapComponent(world, PhysicsWorldComponent, eid, {
    gravity: props.gravity || new Vector3(0, -9.81, 0),
    debug: !!props.debug,
  });
}

export const physicsWorldQuery = defineQuery([PhysicsWorldComponent]);
export const mainPhysicsWorldQuery = singletonQuery(physicsWorldQuery);
export const newPhysicsWorldsQuery = enterQuery(physicsWorldQuery);

interface InternalPhysicsWorldProps {
  physicsWorld: Rapier.World;
  colliderHandleToEntityMap: Map<number, number>;
}

export const InternalPhysicsWorldComponent =
  defineMapComponent<InternalPhysicsWorldProps>();

export enum PhysicsColliderShape {
  Box = "Box",
  Sphere = "Sphere",
  Capsule = "Capsule",
  Trimesh = "Trimesh",
}

export const RigidBodyType = Rapier.RigidBodyType;

export enum PhysicsGroups {
  None = 0,
  All = 0xffff,
}

export enum PhysicsInteractionGroups {
  None = 0,
  Default = 0xffff_ffff,
}

export function createInteractionGroup(groups: number, mask: number) {
  return (groups << 16) | mask;
}

interface RigidBodyProps {
  translation: Vector3;
  rotation: Quaternion;
  shape?: PhysicsColliderShape;
  bodyType: Rapier.RigidBodyType;
  solverGroups: number;
  collisionGroups: number;
  lockRotations: boolean;
  friction: number;
}

interface CapsuleRigidBodyProps extends RigidBodyProps {
  shape: PhysicsColliderShape.Capsule;
  halfHeight: number;
  radius: number;
}

interface TrimeshRigidBodyProps extends RigidBodyProps {
  indices?: Uint32Array;
  vertices?: Float32Array;
}

export const RigidBodyComponent = defineMapComponent<
  CapsuleRigidBodyProps | RigidBodyProps
>();

export function addRigidBodyComponent(
  world: World,
  eid: number,
  props: Partial<CapsuleRigidBodyProps | RigidBodyProps> = {}
) {
  let defaultProps = {
    translation: props.translation || new Vector3(),
    rotation: props.rotation || new Quaternion(),
    shape: props.shape,
    bodyType:
      props.bodyType === undefined
        ? Rapier.RigidBodyType.Static
        : props.bodyType,
    solverGroups:
      props.solverGroups === undefined
        ? PhysicsInteractionGroups.Default
        : props.solverGroups,
    collisionGroups:
      props.collisionGroups === undefined
        ? PhysicsInteractionGroups.Default
        : props.collisionGroups,
    lockRotations: !!props.lockRotations,
    friction: props.friction === undefined ? 0.5 : props.friction,
  };

  if (props.shape === PhysicsColliderShape.Capsule) {
    const capsuleProps = props as Partial<CapsuleRigidBodyProps>;
    const defaultCapsuleProps = defaultProps as CapsuleRigidBodyProps;

    defaultCapsuleProps.halfHeight =
      capsuleProps.halfHeight === undefined ? 0.5 : capsuleProps.halfHeight;
    defaultCapsuleProps.radius =
      capsuleProps.radius === undefined ? 0.5 : capsuleProps.radius;
  } else if (props.shape == PhysicsColliderShape.Trimesh) {
    const trimeshProps = props as Partial<TrimeshRigidBodyProps>;
    const defaultTrimeshProps = defaultProps as TrimeshRigidBodyProps;
    defaultTrimeshProps.indices = trimeshProps.indices;
    defaultTrimeshProps.vertices = trimeshProps.vertices;
  }

  addMapComponent(world, RigidBodyComponent, eid, defaultProps);
}

export const rigidBodiesQuery = defineQuery([
  RigidBodyComponent,
  Object3DComponent,
]);
export const newRigidBodiesQuery = enterQuery(rigidBodiesQuery);

interface InternalRigidBodyProps {
  body: Rapier.RigidBody;
  colliderShape: Rapier.Shape;
}

export const InternalRigidBodyComponent =
  defineMapComponent<InternalRigidBodyProps>();

interface PhysicsRaycasterProps {
  useObject3DTransform: boolean;
  transformNeedsUpdate: boolean;
  transformAutoUpdate: boolean;
  withIntersection: boolean;
  withNormal: boolean;
  origin: Vector3;
  dir: Vector3;
  colliderEid?: number;
  toi?: number;
  intersection: Vector3;
  normal: Vector3;
  maxToi: number;
  groups: number;
  debug: boolean;
}

export const PhysicsRaycasterComponent =
  defineMapComponent<PhysicsRaycasterProps>();

export function addPhysicsRaycasterComponent(
  world: World,
  eid: number,
  props: Partial<Omit<PhysicsRaycasterProps, "intersection" | "normal">> = {}
) {
  const useObject3DTransform =
    props.useObject3DTransform === undefined
      ? true
      : props.useObject3DTransform;

  let transformNeedsUpdate = props.transformNeedsUpdate;
  let transformAutoUpdate = props.transformAutoUpdate;

  if (useObject3DTransform && transformAutoUpdate === undefined) {
    transformAutoUpdate = true;
    transformNeedsUpdate = true;
  } else if (transformNeedsUpdate === undefined) {
    transformNeedsUpdate = true;
  }

  if (transformAutoUpdate === undefined) {
    transformAutoUpdate = false;
  }

  addMapComponent(world, PhysicsRaycasterComponent, eid, {
    useObject3DTransform,
    transformNeedsUpdate,
    transformAutoUpdate,
    withIntersection: !!props.withIntersection,
    withNormal: !!props.withNormal,
    origin: props.origin || new Vector3(0, 0, 0),
    dir: props.dir || new Vector3(0, 0, -1),
    intersection: new Vector3(),
    normal: new Vector3(),
    maxToi: props.maxToi === undefined ? Number.MAX_VALUE : props.maxToi,
    groups:
      props.groups === undefined
        ? PhysicsInteractionGroups.Default
        : props.groups,
    debug: !!props.debug,
  });
}

export const physicsRaycasterQuery = defineQuery([PhysicsRaycasterComponent]);
export const newPhysicsRaycastersQuery = enterQuery(physicsRaycasterQuery);

interface InternalPhysicsRaycasterProps {
  ray: Rapier.Ray;
  arrowHelper?: ArrowHelper;
}

export const InternalPhysicsRaycasterComponent =
  defineMapComponent<InternalPhysicsRaycasterProps>();

export async function loadPhysicsSystem(): Promise<System> {
  await Rapier.init();

  const tempVec3 = new Vector3();
  const tempQuat = new Quaternion();

  return defineSystem(function PhysicsSystem(world: World) {
    const physicsWorldEid = mainPhysicsWorldQuery(world);
    const newPhysicsWorldEntities = newPhysicsWorldsQuery(world);
    const rigidBodyEntities = rigidBodiesQuery(world);
    const newRigidBodyEntities = newRigidBodiesQuery(world);
    const physicsRaycasterEntities = physicsRaycasterQuery(world);
    const newPhysicsRaycasterEntities = newPhysicsRaycastersQuery(world);
    const sceneEid = activeSceneQuery(world);

    newPhysicsWorldEntities.forEach((eid) => {
      const physicsWorldComponent = PhysicsWorldComponent.storage.get(eid)!;
      addMapComponent(world, InternalPhysicsWorldComponent, eid, {
        physicsWorld: new Rapier.World(physicsWorldComponent.gravity),
        colliderHandleToEntityMap: new Map(),
      });
    });

    if (physicsWorldEid === undefined) {
      return;
    }

    const internalPhysicsWorldComponent =
      InternalPhysicsWorldComponent.storage.get(physicsWorldEid)!;
    const { physicsWorld, colliderHandleToEntityMap } =
      internalPhysicsWorldComponent;

    newRigidBodyEntities.forEach((rigidBodyEid) => {
      const obj = Object3DComponent.storage.get(rigidBodyEid)!;
      const rigidBodyProps = RigidBodyComponent.storage.get(rigidBodyEid)!;

      const geometry = (obj as Mesh).geometry;

      if (!geometry && !rigidBodyProps.shape) {
        return;
      }

      obj.getWorldPosition(tempVec3);
      obj.getWorldQuaternion(tempQuat);

      const rigidBodyDesc = new Rapier.RigidBodyDesc(rigidBodyProps.bodyType);

      rigidBodyDesc.setRotation(tempQuat.clone());
      rigidBodyDesc.setTranslation(tempVec3.x, tempVec3.y, tempVec3.z);

      if (rigidBodyProps.lockRotations) {
        rigidBodyDesc.lockRotations();
      }

      const body = physicsWorld.createRigidBody(rigidBodyDesc);

      let colliderShape: Rapier.Shape;

      const geometryType = geometry && geometry.type;

      if (geometryType === "BoxGeometry") {
        geometry.computeBoundingBox();
        const boundingBoxSize = geometry.boundingBox!.getSize(new Vector3());

        colliderShape = new Rapier.Cuboid(
          boundingBoxSize.x / 2,
          boundingBoxSize.y / 2,
          boundingBoxSize.z / 2
        );
      } else if (geometryType === "SphereGeometry") {
        geometry.computeBoundingSphere();
        const radius = geometry.boundingSphere!.radius;
        colliderShape = new Rapier.Ball(radius);
      } else if (rigidBodyProps.shape === PhysicsColliderShape.Capsule) {
        const { radius, halfHeight } = rigidBodyProps as CapsuleRigidBodyProps;
        colliderShape = new Rapier.Capsule(halfHeight, radius);
      } else if (geometryType === "Mesh" || PhysicsColliderShape.Trimesh) {
        const { vertices, indices } = rigidBodyProps as TrimeshRigidBodyProps;
        const mesh = obj as Mesh;

        let finalIndices;

        if (indices) {
          finalIndices = indices;
        } else if (mesh.geometry.index) {
          finalIndices = mesh.geometry.index!.array;
        } else {
          const { count } = mesh.geometry.attributes.position;
          const arr = new Uint32Array(count);
          for (let i = 0; i < count; i++) {
            arr[i] = i;
          }
          finalIndices = arr;
        }

        colliderShape = new Rapier.TriMesh(
          vertices ||
          (mesh.geometry.attributes.position!.array as Float32Array),
          indices || (finalIndices as Uint32Array)
        );
      } else {
        throw new Error("Unimplemented");
      }

      const colliderDesc = new Rapier.ColliderDesc(colliderShape);

      const translation = rigidBodyProps.translation;
      colliderDesc.setTranslation(translation.x, translation.y, translation.z);
      colliderDesc.setRotation(rigidBodyProps.rotation);
      colliderDesc.setCollisionGroups(rigidBodyProps.collisionGroups);
      colliderDesc.setSolverGroups(rigidBodyProps.solverGroups);
      colliderDesc.setFriction(rigidBodyProps.friction);

      // TODO: Handle mass / density
      // TODO: Handle scale

      const collider = physicsWorld.createCollider(colliderDesc, body.handle);

      colliderHandleToEntityMap.set(collider.handle, rigidBodyEid);

      addMapComponent(world, InternalRigidBodyComponent, rigidBodyEid, {
        body,
        colliderShape,
      });
    });

    newPhysicsRaycasterEntities.forEach((raycasterEid) => {
      const raycaster = PhysicsRaycasterComponent.storage.get(raycasterEid)!;
      InternalPhysicsRaycasterComponent.storage.set(raycasterEid, {
        ray: new Rapier.Ray(raycaster.origin, raycaster.dir),
      });
    });

    physicsWorld.timestep = world.dt;
    physicsWorld.step();

    physicsRaycasterEntities.forEach((rayCasterEid) => {
      const raycaster = PhysicsRaycasterComponent.storage.get(rayCasterEid)!;
      const obj = Object3DComponent.storage.get(rayCasterEid);

      if (
        raycaster.useObject3DTransform &&
        obj &&
        (raycaster.transformNeedsUpdate || raycaster.transformAutoUpdate)
      ) {
        obj.getWorldPosition(raycaster.origin);
        obj.getWorldDirection(raycaster.dir);

        if (!raycaster.transformAutoUpdate) {
          raycaster.transformNeedsUpdate = false;
        }
      }

      const internalRaycaster =
        InternalPhysicsRaycasterComponent.storage.get(rayCasterEid)!;

      const colliderSet = physicsWorld.colliders;

      let intersection;

      if (raycaster.withNormal) {
        intersection = physicsWorld.queryPipeline.castRayAndGetNormal(
          colliderSet,
          internalRaycaster.ray,
          raycaster.maxToi,
          true,
          raycaster.groups
        );

        if (intersection) {
          raycaster.normal.copy(intersection.normal as Vector3);
        } else {
          raycaster.normal.set(0, 0, 0);
        }
      } else {
        intersection = physicsWorld.queryPipeline.castRay(
          colliderSet,
          internalRaycaster.ray,
          raycaster.maxToi,
          true,
          raycaster.groups
        );
      }

      if (intersection) {
        raycaster.colliderEid = colliderHandleToEntityMap.get(
          intersection.colliderHandle
        );
        raycaster.toi = intersection.toi;
      } else {
        raycaster.colliderEid = undefined;
        raycaster.toi = undefined;
      }

      if (raycaster.withIntersection) {
        if (raycaster.toi !== undefined) {
          raycaster.intersection
            .addVectors(raycaster.origin, raycaster.dir)
            .multiplyScalar(raycaster.toi);
        } else {
          raycaster.intersection.set(0, 0, 0);
        }
      }

      if (sceneEid === undefined) {
        return;
      }

      if (raycaster.debug) {
        if (!internalRaycaster.arrowHelper) {
          internalRaycaster.arrowHelper = new ArrowHelper(
            raycaster.dir,
            raycaster.origin,
            raycaster.toi,
            0xffff00,
            0.2,
            0.1
          );
          const scene = Object3DComponent.storage.get(sceneEid)!;
          scene.add(internalRaycaster.arrowHelper);
        } else {
          const arrowHelper = internalRaycaster.arrowHelper;
          arrowHelper.position.copy(raycaster.origin);
          arrowHelper.setDirection(raycaster.dir);
          arrowHelper.setLength(raycaster.toi || 0, 0.2, 0.1);
        }
      } else if (!raycaster.debug && internalRaycaster.arrowHelper) {
        const scene = Object3DComponent.storage.get(sceneEid)!;
        scene.remove(internalRaycaster.arrowHelper);
        internalRaycaster.arrowHelper = undefined;
      }
    });

    rigidBodyEntities.forEach((rigidBodyEid) => {
      const obj = Object3DComponent.storage.get(rigidBodyEid)!;
      const { lockRotations } = RigidBodyComponent.storage.get(rigidBodyEid)!;
      const { body } = InternalRigidBodyComponent.storage.get(rigidBodyEid)!;

      if (body.isDynamic()) {
        const translation = body.translation();
        const rotation = body.rotation();
        obj.position.set(translation.x, translation.y, translation.z);

        if (!lockRotations) {
          obj.quaternion.copy(rotation as Quaternion);
        }
      } else if (body.isKinematic()) {
        body.setNextKinematicTranslation(obj.position);
        body.setNextKinematicRotation(obj.quaternion);
      }
    });
  });
}
