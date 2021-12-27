import { useGLTF } from "solid-drei";
import { Show, Suspense } from "solid-js";
import * as THREE from "three";
export function Model(props) {
  const [data] = useGLTF("/solid.glb");

  return (
    <group>
      <Show when={data()}>
        <mesh
          castShadow
          receiveShadow
          geometry={data()?.nodes.Cylinder001.geometry}

          // material={nodes.Cylinder002.material}
          // position={[2.92, 1.29, -3.25]}
        >
          <meshStandardMaterial side={THREE.BackSide} color={"#2c4f7c"} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={data()?.nodes.Cylinder001.geometry}
          // material={nodes.Cylinder002.material}
          position={[2.92, 1.29, -3.25]}
        >
          <meshStandardMaterial side={THREE.BackSide} color={"#446b9e"} />
        </mesh>
      </Show>
    </group>
  );
}
