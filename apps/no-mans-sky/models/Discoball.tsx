import * as React, { Suspense, createEffect } from "solid-js";
import { Canvas, useThree } from "@react-three/fiber";
import { useGesture } from "@use-gesture/react";
import { useSpring, a } from "@react-spring/three";

export function Discoball() {
  // Set up a spring with values we're going to modify
  const [{ rotation, ...rest }, set] = useSpring(() => ({
    scale: [1, 1, 1],
    position: [0, 100, 0],
    rotation: [0, 0, 0],
    config: { mass: 3, friction: 40, tension: 800 },
  }));
  // Create a gesture that contains drag and hover, set the spring accordingly
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const bind = useGesture({
    onDrag: ({ event, offset: [x, y] }) => {
      x = x * 10;
      y = y * 10;
      // event.persist()
      // console.log(event)
      set({
        position: [x / aspect, 100, -y / aspect],
        rotation: [y / aspect, 100, x / aspect],
      });
    },
    onHover: ({ hovering }) =>
      set({ scale: hovering ? [1.2, 1.2, 1.2] : [1, 1, 1] }),
  });
  // Attach both the spring values and the gesture event-handlers to the view
  return (
    <a.group {...rest}>
      <a.mesh rotation={rotation} {...bind()} castShadow>
        <sphereBufferGeometry args={[50, 10, 7]} />
        <meshPhysicalMaterial
          color="black"
          metallness={1}
          roughness={0.5}
          clearcoat={1}
          clearcoatRoughness={0.2}
          flatShading
        />
      </a.mesh>
      {/* <directionalLight
        castShadow
        position={[3, 3, 4]}
        intensity={2}
        shadow-mapSize-width={256}
        shadow-mapSize-height={256}
        shadow-camera-far={100}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      /> */}
    </a.group>
  );
}
