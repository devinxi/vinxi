import { useFrame } from "solid-three";
import { createEffect, createSignal, Match, Switch } from "solid-js";
import { button, createControls, folder } from "solid-leva";
import { Html } from "solid-drei";
import { animate } from "popmotion";
import { PieceModel } from "src/chess/models/chess/Piece";

export function Box(props: any) {
  const [hovered, setHover] = createSignal(false);
  const [rotation, setRotation] = createSignal(0.5);
  const [active, setActive] = createSignal(false);
  const [direction, setDirection] = createSignal(1);

  let mesh;
  const controls = createControls("box", {
    size: {
      value: 5,
      min: 0,
      max: 10
    },
    width: {
      value: 1,
      min: -0.1,
      max: 5
    },
    interval: [10, 20],
    material: folder({
      color: "#ffaa11",
      wireframe: false
    }),
    shape: {
      value: "box",
      options: ["box", "cylinder", "tetrahedron"]
    },
    rotate: false,
    bounce: button(() => {
      animate({
        from: mesh.position.y,
        to: mesh.position.y + 5,
        repeat: 1,
        // type: "spring",
        repeatType: "reverse",
        onUpdate: v => (mesh.position.y = 0 + v)
      });
    })
  });

  useFrame(() => (controls.rotate ? setRotation(r => r + (direction() > 0 ? 0.01 : -0.01)) : null));

  let ref;

  createEffect(() => {
    if (ref) {
      ref.className = "bg-red-100";
    }
  });

  effect: {
    console.log(controls.width);
  }

  return (
    <mesh
      ref={mesh}
      onDoubleClick={e => setActive(t => !t)}
      onClick={e => setDirection(d => d * -1)}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}
      rotation-y={rotation()}
      scale={controls.size}
      position-y={active() ? 2 : 1}
      castShadow
      {...props}
    >
      <Html ref={ref}>
        <div>Hello World</div>
      </Html>
      <Switch fallback={null}>
        <Match when={controls.shape === "box" && controls.width > 0}>
          <boxBufferGeometry args={[controls.width, 1, 1]} />
        </Match>
        <Match when={controls.shape === "cylinder"}>
          <cylinderBufferGeometry args={[1, 1, 1]} />
        </Match>
        <Match when={controls.shape === "tetrahedron"}>
          <tetrahedronBufferGeometry args={[1]} />
        </Match>
      </Switch>
      <meshStandardMaterial
        wireframe={controls.wireframe}
        color={hovered() ? "powderblue" : controls.color}
      />
    </mesh>
  );
}
