import { Canvas, useFrame, useThree } from "solid-three";
import { Component, createRenderEffect, onCleanup, untrack } from "solid-js";
import { OrbitControls } from "src/drei/OrbitControls";
import { createControls } from "solid-leva";
import { Board } from "src/chess/models/chess/Board";

const PerspectiveCamera: Component = ({ position = [10, 5, 10] } = {}) => {
  const set = useThree(({ set }) => set);
  const camera = useThree(({ camera }) => camera);
  const size = useThree(({ size }) => size);

  let cam = (
    <perspectiveCamera
      // ref={(el) => {
      //   props.ref?.(el);
      // }}
      far={1000}
      near={0.1}
      fov={75}
      position={position}
    />
  ) as unknown as THREE.PerspectiveCamera;

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

  return cam;
};

export default function App() {
  const [controls] = createControls("piece", {
    rotationX: { value: 0, max: Math.PI / 2, min: -Math.PI / 2 },
    rotataionY: 0,
    rotationZ: 0,
    positionX: { value: 0, min: -100, max: 100 },
  });

  return (
    <Canvas
      shadows={true}
      // camera={{
      //   position: [20, 20, 20],
      // }}
    >
      <PerspectiveCamera position={[controls().positionX, 20, 20]} />
      <ambientLight intensity={0.5} />
      <directionalLight castShadow intensity={1} position={[10, 10, 10]} />
      <spotLight position={[-10, -10, -10]} intensity={1} />
      {/* <Box position={[-2, 1, 0]} /> */}
      {/* <Box position={[2, 1, 0]} /> */}
      {/* <Plane /> */}
      <ChessBoard />
      <OrbitControls />
    </Canvas>
  );
}

function ChessBoard() {
  let ref;

  effect: {
    console.log(ref);
  }

  useFrame(() => {
    ref.rotation.y += 0.005;
  });

  return <Board ref={ref} />;
}
