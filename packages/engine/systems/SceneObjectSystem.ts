import { useThree } from "@react-three/fiber"
import { Mesh, Material, MeshStandardMaterial, MeshPhongMaterial, MeshBasicMaterial } from "three"
import { defineQuery, World, System, getComponent } from "../ecs"
import { useEngine } from "../react/engine"
import { Object3DComponent } from "../scene"

const sceneObjectQuery = defineQuery([Object3DComponent])
// const persistQuery = defineQuery([Object3DComponent, PersistTagComponent])
// const visibleQuery = defineQuery([Object3DComponent, VisibleComponent])
// const updatableQuery = defineQuery([Object3DComponent, UpdatableComponent])

export default async function SceneObjectSystem(world: World): Promise<System> {
  // SceneOptions.instance = new SceneOptions()
  return () => {
    const scene = world.scene

    if (!scene) {
      return
    }

    for (const entity of sceneObjectQuery.enter(world)) {
      const object3DComponent = getComponent(entity, Object3DComponent, world)!
        // const shadowComponent = getComponent(entity, Shadow, world)

        ; (object3DComponent.value as any).entity = entity

      // Add to scene
      if (!scene.children.includes(object3DComponent.value)) {
        scene.add(object3DComponent.value)
      } else {
        console.warn('[Object3DComponent]: Scene object has been added manually.', object3DComponent)
      }

      // Apply material stuff
      // object3DComponent.traverse((obj: Mesh) => {
      //   const material = obj.material as Material
      //   if (typeof material !== 'undefined') material.dithering = true

      //   if (shadowComponent) {
      //     obj.receiveShadow = shadowComponent.receiveShadow
      //     obj.castShadow = shadowComponent.castShadow
      //   }

      //   if (Engine.simpleMaterials) {
      //     // || Engine.isHMD) {
      //     if (obj.material instanceof MeshStandardMaterial) {
      //       const prevMaterial = obj.material
      //       obj.material = new MeshPhongMaterial()
      //       MeshBasicMaterial.prototype.copy.call(obj.material, prevMaterial)
      //     }
      //   } else {
      //     const material = obj.material as Material
      //     if (typeof material !== 'undefined') {
      //       // BPCEM
      //       if (SceneOptions.instance.boxProjection)
      //         material.onBeforeCompile = beforeMaterialCompile(
      //           SceneOptions.instance.bpcemOptions.bakeScale,
      //           SceneOptions.instance.bpcemOptions.bakePositionOffset
      //         )
      //           ; (material as any).envMapIntensity = SceneOptions.instance.envMapIntensity
      //       if (obj.receiveShadow) {
      //         Engine.csm?.setupMaterial(obj)
      //       }
      //     }
      //   }
      // })
    }

    for (const entity of sceneObjectQuery.exit(world)) {
      const object3DComponent = getComponent(entity, Object3DComponent, world, true)

      // Remove from scene
      if (object3DComponent && scene.children.includes(object3DComponent.value)) {
        scene.remove(object3DComponent.value)
      } else {
        console.warn('[Object3DComponent]: Scene object has been removed manually.')
      }
    }

    // Enable second camera layer for persistant entities for fun portal effects
    // for (const entity of persistQuery.enter()) {
    //   const object3DComponent = getComponent(entity, Object3DComponent)
    //   object3DComponent?.value?.traverse((obj) => {
    //     obj.layers.enable(CameraLayers.Portal)
    //   })
    // }

    // for (const entity of visibleQuery.enter()) {
    //   const obj = getComponent(entity, Object3DComponent)
    //   const visibleComponent = getComponent(entity, Visible, world)
    //   obj.value.visible = visibleComponent.value
    // }

    // for (const entity of updatableQuery()) {
    //   const obj = getComponent(entity, Object3DComponent)
    //     ; (obj.value as unknown as Updatable).update(world.fixedDelta)
    // }
  }
}
