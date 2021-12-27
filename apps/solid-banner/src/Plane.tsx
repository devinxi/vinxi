import { PlaneBufferGeometry } from "three";

export function Plane() {
  return (
    <mesh
      receiveShadow
      geometry={new PlaneBufferGeometry(100, 100)}
      rotation={[-Math.PI / 2, 0, 0]}
      position-y={-5}
    >
      <meshStandardMaterial color={"lightgray"} />
    </mesh>
  );
}
