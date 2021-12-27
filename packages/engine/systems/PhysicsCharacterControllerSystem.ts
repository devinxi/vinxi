import { Vector2, Vector3, Quaternion, Object3D } from "three";
import { Object3DComponent } from "../core/components";
import {
  defineSystem,
  World,
  defineMapComponent,
  defineQuery,
  enterQuery,
  addMapComponent,
  addObject3DEntity,
} from "../core/threecs";
import { ButtonActionState } from "./ActionMappingSystem";
import {
  addRigidBodyComponent,
  RigidBodyComponent,
  InternalRigidBodyComponent,
  mainPhysicsWorldQuery,
  createInteractionGroup,
  PhysicsGroups,
  InternalPhysicsWorldComponent,
  RigidBodyType,
  PhysicsColliderShape,
} from "./PhysicsSystem";

export const PhysicsCharacterControllerGroup = 0x0000_0001;
export const CharacterPhysicsGroup = 0b1;
export const CharacterInteractionGroup = createInteractionGroup(
  CharacterPhysicsGroup,
  PhysicsGroups.All
);
export const CharacterShapecastInteractionGroup = createInteractionGroup(
  PhysicsGroups.All,
  ~CharacterPhysicsGroup
);

function physicsCharacterControllerAction(key: string) {
  return "PhysicsCharacterController/" + key;
}

export const PhysicsCharacterControllerActions = {
  Move: physicsCharacterControllerAction("Move"),
  Jump: physicsCharacterControllerAction("Jump"),
  Sprint: physicsCharacterControllerAction("Sprint"),
  Crouch: physicsCharacterControllerAction("Crouch"),
};

interface PhysicsCharacterControllerProps {
  walkSpeed: number;
  drag: number;
  maxWalkSpeed: number;
  jumpForce: number;
  inAirModifier: number;
  inAirDrag: number;
  crouchModifier: number;
  crouchJumpModifier: number;
  minSlideSpeed: number;
  slideModifier: number;
  slideDrag: number;
  slideCooldown: number;
  sprintModifier: number;
  maxSprintSpeed: number;
}

export const PhysicsCharacterControllerComponent =
  defineMapComponent<PhysicsCharacterControllerProps>();

export function addPhysicsCharacterControllerComponent(
  world: World,
  eid: number,
  props: Partial<PhysicsCharacterControllerProps> = {}
) {
  addMapComponent(
    world,
    PhysicsCharacterControllerComponent,
    eid,
    Object.assign(
      {
        walkSpeed: 2000,
        drag: 250,
        maxWalkSpeed: 20,
        jumpForce: 750,
        inAirModifier: 0.5,
        inAirDrag: 100,
        crouchModifier: 0.7,
        crouchJumpModifier: 1.5,
        minSlideSpeed: 3,
        slideModifier: 50,
        slideDrag: 150,
        slideCooldown: 1,
        sprintModifier: 1.8,
        maxSprintSpeed: 25,
      },
      props
    )
  );
}

interface InternalPhysicsCharacterController {
  moveForce: Vector3;
  dragForce: Vector3;
  linearVelocity: Vector3;
  shapeCastPosition: Vector3;
  shapeCastRotation: Quaternion;
  isSliding: boolean;
  slideForce: Vector3;
  lastSlideTime: number;
}

export const InternalPhysicsCharacterControllerComponent =
  defineMapComponent<InternalPhysicsCharacterController>();

export function addPhysicsCharacterControllerEntity(
  world: World,
  scene: Object3D,
  props?: any
) {
  const playerRig = new Object3D();
  const playerRigEid = addObject3DEntity(world, playerRig, scene);
  addPhysicsCharacterControllerComponent(world, playerRigEid);
  addRigidBodyComponent(world, playerRigEid, {
    bodyType: RigidBodyType.Dynamic,
    shape: PhysicsColliderShape.Capsule,
    halfHeight: 0.8,
    radius: 0.5,
    translation: new Vector3(0, 0.8, 0),
    collisionGroups: CharacterInteractionGroup,
    solverGroups: CharacterInteractionGroup,
    lockRotations: true,
  });
  return [playerRigEid, playerRig];
}

const physicsCharacterControllerQuery = defineQuery([
  PhysicsCharacterControllerComponent,
  InternalRigidBodyComponent,
  Object3DComponent,
]);

const physicsCharacterControllerAddedQuery = enterQuery(
  physicsCharacterControllerQuery
);

export const PhysicsCharacterControllerSystem = defineSystem(
  function PhysicsCharacterControllerSystem(world: World) {
    const physicsWorldEid = mainPhysicsWorldQuery(world);
    const entities = physicsCharacterControllerQuery(world);
    const addedEntities = physicsCharacterControllerAddedQuery(world);

    addedEntities.forEach((eid) => {
      addMapComponent(world, InternalPhysicsCharacterControllerComponent, eid, {
        moveForce: new Vector3(),
        dragForce: new Vector3(),
        linearVelocity: new Vector3(),
        shapeCastPosition: new Vector3(),
        shapeCastRotation: new Quaternion(),
        isSliding: false,
        slideForce: new Vector3(),
        lastSlideTime: 0,
      });
    });

    if (physicsWorldEid === undefined) {
      return;
    }

    const internalPhysicsWorldComponent =
      InternalPhysicsWorldComponent.storage.get(physicsWorldEid);

    if (!internalPhysicsWorldComponent) {
      return;
    }

    const physicsWorld = internalPhysicsWorldComponent.physicsWorld;

    // Handle Input
    const moveVec = world.actions.get(
      PhysicsCharacterControllerActions.Move
    ) as Vector2;

    const jump = world.actions.get(
      PhysicsCharacterControllerActions.Jump
    ) as ButtonActionState;

    const crouch = world.actions.get(
      PhysicsCharacterControllerActions.Crouch
    ) as ButtonActionState;

    const sprint = world.actions.get(
      PhysicsCharacterControllerActions.Sprint
    ) as ButtonActionState;

    entities.forEach((eid) => {
      const {
        walkSpeed,
        drag,
        inAirModifier,
        inAirDrag,
        crouchModifier,
        maxWalkSpeed,
        jumpForce,
        crouchJumpModifier,
        slideModifier,
        slideDrag,
        slideCooldown,
        minSlideSpeed,
        sprintModifier,
        maxSprintSpeed,
      } = PhysicsCharacterControllerComponent.storage.get(eid)!;
      const internalPhysicsCharacterController =
        InternalPhysicsCharacterControllerComponent.storage.get(eid)!;
      const {
        moveForce,
        dragForce,
        linearVelocity,
        shapeCastPosition,
        shapeCastRotation,
        isSliding,
        slideForce,
        lastSlideTime,
      } = internalPhysicsCharacterController;
      const obj = Object3DComponent.storage.get(eid)!;
      const {
        translation: shapeTranslationOffset,
        rotation: shapeRotationOffset,
      } = RigidBodyComponent.storage.get(eid)!;
      const { body, colliderShape } =
        InternalRigidBodyComponent.storage.get(eid)!;

      body.setRotation(obj.quaternion, true);

      linearVelocity.copy(body.linvel() as Vector3);

      shapeCastPosition.copy(obj.position).add(shapeTranslationOffset);
      shapeCastRotation.copy(obj.quaternion).multiply(shapeRotationOffset);

      const shapeCastResult = physicsWorld.castShape(
        shapeCastPosition,
        shapeCastRotation,
        physicsWorld.gravity,
        colliderShape,
        world.dt,
        CharacterShapecastInteractionGroup
      );

      const isGrounded = !!shapeCastResult;
      const isSprinting = isGrounded && sprint.held && !isSliding;

      const speed = linearVelocity.length();
      const maxSpeed = isSprinting ? maxSprintSpeed : maxWalkSpeed;

      if (speed < maxSpeed) {
        moveForce
          .set(moveVec.x, 0, -moveVec.y)
          .normalize()
          .applyQuaternion(obj.quaternion)
          .multiplyScalar(walkSpeed * world.dt);

        if (!isGrounded) {
          moveForce.multiplyScalar(inAirModifier);
        } else if (isGrounded && crouch.held && !isSliding) {
          moveForce.multiplyScalar(crouchModifier);
        } else if (isGrounded && sprint.held && !isSliding) {
          moveForce.multiplyScalar(sprintModifier);
        }
      }

      moveForce.add(physicsWorld.gravity as Vector3);

      // TODO: Check to see if velocity matches orientation before sliding
      if (
        crouch.pressed &&
        speed > minSlideSpeed &&
        isGrounded &&
        !isSliding &&
        world.time > lastSlideTime + slideCooldown
      ) {
        slideForce
          .set(0, 0, (speed + 1) * -slideModifier)
          .applyQuaternion(obj.quaternion);
        moveForce.add(slideForce);
        internalPhysicsCharacterController.isSliding = true;
        internalPhysicsCharacterController.lastSlideTime = world.time;
      } else if (
        crouch.released ||
        world.time > lastSlideTime + slideCooldown
      ) {
        internalPhysicsCharacterController.isSliding = false;
      }

      if (speed !== 0) {
        let dragMultiplier = drag;

        if (isSliding) {
          dragMultiplier = slideDrag;
        } else if (!isGrounded) {
          dragMultiplier = inAirDrag;
        }

        dragForce
          .copy(linearVelocity)
          .negate()
          .multiplyScalar(dragMultiplier * world.dt);
        moveForce.add(dragForce);
      }

      if (jump.pressed && isGrounded) {
        const jumpModifier = crouch.held ? crouchJumpModifier : 1;
        moveForce.y += jumpForce * jumpModifier;
      }

      body.applyForce(moveForce, true);
    });
  }
);
