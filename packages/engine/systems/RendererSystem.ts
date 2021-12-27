import { World } from "../ecs";
import { useEngine } from "../react/engine";

// export const RendererComponent = defineComponent<WebGLRenderer>();
// export const ActiveSceneComponent = defineComponent();
// export const ActiveCameraComponent = defineComponent();

// export const rendererQuery = defineQuery([RendererComponent]);
// export const cameraQuery = defineQuery([Object3DComponent, CameraComponent, ActiveCameraComponent]);

export default async function RendererSystem(world: World) {
  return () => {
    const { scene, renderer, mainCamera: activeCamera } = world;

    if (renderer && scene && activeCamera) {
      renderer.render(scene, activeCamera);
    }
  }
};
