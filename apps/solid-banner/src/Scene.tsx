import { Canvas, useFrame, useThree } from "solid-three";
import {
  ComponentProps,
  createRenderEffect,
  createSignal,
  onCleanup,
  PropsWithChildren,
  Show,
  untrack
} from "solid-js";
import { OrbitControls } from "solid-drei";
import { JSX } from "solid-three";
import { createControls } from "solid-leva";
import { Model } from "./Logo";
import { Plane } from "./Plane";
declare module "solid-js" {
  interface Directives {}
}

const PerspectiveCamera = ({
  position = [10, 5, 10],
  ref
}: PropsWithChildren<ComponentProps<"mesh">>) => {
  const set = useThree(({ set }) => set);
  const camera = useThree(({ camera }) => camera);
  const size = useThree(({ size }) => size);

  let cam = (
    <perspectiveCamera far={1000} near={0.1} fov={75} position={position as any} />
  ) as unknown as THREE.PerspectiveCamera;

  // @ts-ignore

  // if (ref) {

  // }

  createRenderEffect(() => {
    cam.aspect = size().width / size().height;
    cam.updateProjectionMatrix();
  });

  createRenderEffect(() => {
    const oldCam = untrack(() => camera());
    console.log("setting cam", cam);
    set()({ camera: cam });
    onCleanup(() => set()({ camera: oldCam }));
  });

  return cam as unknown as JSX.Element;
};

export default function Scene() {
  const controls = createControls("scene", {
    camera: [0, 5, 5],
    spotLight: [10, 20, 10]
  });

  let [ref, setRef] = createSignal(null);

  return (
    <Canvas
      shadows
      gl={{
        antialias: true
      }}
    >
      <PerspectiveCamera position={controls.camera} />
      <ambientLight intensity={1} />
      {/* <directionalLight castShadow intensity={1} position={[10, 10, 10]} /> */}
      <spotLight
        ref={setRef}
        penumbra={1}
        position={controls.spotLight}
        intensity={1.25}
        castShadow
      />
      {/* <Box position={[-5, 5, 0]} /> */}
      {/* <Box position={[5, 5, 0]} /> */}
      {/* <Show when={ref()}>{ref => <spotLightHelper args={[ref]} />}</Show> */}
      <Plane />
      {/* <ChessBoard /> */}
      <OrbitControls />
      <Model />
    </Canvas>
  );
}
