import { useFrame } from "solid-three";
import { createSignal } from "solid-js";

export function FasterBox(props: any) {
  const [hovered, setHover] = createSignal(false);
  const [rotation, setRotation] = createSignal(0.5);
  const [active, setActive] = createSignal(false);
  const [color, setColor] = createSignal("orange");

  const [direction, setDirection] = createSignal(1);

  let ref;

  useFrame(() => (ref.rotation.y += direction() > 0 ? 0.05 : -0.05));

  return (
    <mesh
      ref={ref}
      onDoubleClick={(e) => setActive((t) => !t)}
      onClick={(e) => setDirection((d) => d * -1)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
      rotation-y={rotation()}
      onContextMenu={(e) =>
        setColor((c) => (c === "orange" ? "plum" : "orange"))
      }
      scale={2}
      position-y={active() ? 2 : 1}
      castShadow
      {...props}
    >
      <boxBufferGeometry />
      <meshStandardMaterial color={hovered() ? "powderblue" : color()} />
    </mesh>
  );
}
