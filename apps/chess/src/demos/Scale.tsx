import { Canvas, useFrame } from "solid-three";
import { createEffect, createSignal, For, Show } from "solid-js";
import { OrbitControls } from "solid-drei";
import { FasterBox } from "./FasterBox";
import { Plane } from "./Plane";

export default function App() {
  let width = 10;
  let height = 10;
  let light;

  createEffect(() => {
    console.log(light);
  });
  return (
    <Canvas
      camera={{
        position: [0, 20, 20],
        zoom: 2,
      }}
      shadows={true}
    >
      <ambientLight intensity={0.5} />
      <directionalLight
        ref={light}
        castShadow
        intensity={1}
        position={[30, 30, 30]}
        shadow-camera-far={1000}
        shadow-mapSize-width={1000}
        shadow-mapSize-height={1000}
      />
      <group position={[-width, 0, -height]}>
        <For each={Array(width * height).fill(0)}>
          {(_, i) => (
            <FasterBox position={[(i() % width) * 4, 0, (i() / height) * 4]} />
          )}
        </For>
      </group>
      <OrbitControls />
      <Plane />
    </Canvas>
  );
}
