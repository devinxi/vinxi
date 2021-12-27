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
import { Plane } from "./Plane";
import { useControls } from "./lib/leva";
import { Board } from "./Board";
import { useTheatreControls } from "./useTheatreControls";

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
  const controls = useControls("scene", {
    camera: [3, 25, 10],
    spotLight: [10, 20, 10]
  });

  let [ref, setRef] = createSignal(null);

  let theatreControls = useTheatreControls("camera", {
    x: 0,
    y: 25,
    z: 10
  });

  return (
    <Canvas
      shadows
      gl={{
        antialias: true
      }}
    >
      <PerspectiveCamera position={[theatreControls.x, theatreControls.y, theatreControls.z]} />
      <ambientLight intensity={0.5} />
      {/* <directionalLight castShadow intensity={1} position={[10, 10, 10]} /> */}
      <spotLight ref={setRef} penumbra={1} position={controls.spotLight} intensity={2} castShadow />
      {/* <Box position={[-5, 5, 0]} /> */}
      {/* <Box position={[5, 5, 0]} /> */}
      {/* <Show when={ref()}>{ref => <spotLightHelper args={[ref]} />}</Show> */}
      <Plane />
      <ChessBoard />
      <OrbitControls />
    </Canvas>
  );
}

function rotate(ref) {
  effect: {
    console.log(ref);
  }

  useFrame(() => {
    ref.rotation.z += 0.005;
  });
}

function ChessBoard() {
  let ref;

  // useFrame(() => {
  //   ref.rotation.y += 0.005;
  // });
  return <Board ref={ref} />;
}
