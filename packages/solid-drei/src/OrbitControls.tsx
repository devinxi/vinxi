import { Accessor, createEffect, createMemo, onCleanup } from "solid-js";
import { EventManager, ThreeJSX, useFrame, useThree } from "solid-three";
import * as THREE from "three";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";

export type OrbitControlsProps = ThreeJSX.Overwrite<
  ThreeJSX.Object3DNode<OrbitControlsImpl, typeof OrbitControlsImpl>,
  {
    target?: ThreeJSX.Vector3;
    camera?: THREE.Camera;
    regress?: boolean;
    enableDamping?: boolean;
    makeDefault?: boolean;
    onChange?: (e?: THREE.Event) => void;
    onStart?: (e?: THREE.Event) => void;
    onEnd?: (e?: THREE.Event) => void;
  }
>;

export const OrbitControls = (props: OrbitControlsProps) => {
  const invalidate = useThree(({ invalidate }) => invalidate);
  const defaultCamera = useThree(({ camera }) => camera);
  const gl = useThree(({ gl }) => gl);
  const events = useThree(({ events }) => events) as Accessor<
    EventManager<HTMLElement>
  >;
  const set = useThree(({ set }) => set);
  const get = useThree(({ get }) => get);
  const performance = useThree(({ performance }) => performance);

  const orbitControls = createMemo(
    () => new OrbitControlsImpl(defaultCamera())
  );

  useFrame(() => {
    let controls = orbitControls();
    if (controls.enabled) controls.update();
  });

  createEffect(() => {
    // const explDomElement =
    //   domElement ||
    //   (typeof events.connected !== "boolean"
    //     ? events.connected
    //     : gl.domElement);

    // const controls = ;

    const callback = (e: THREE.Event) => {
      invalidate();
      // if (regress) performance.regress();
      props.onChange?.(e);
    };

    orbitControls().connect(gl().domElement);
    orbitControls().addEventListener("change", callback);

    if (props.onStart) orbitControls().addEventListener("start", props.onStart);
    if (props.onEnd) orbitControls().addEventListener("end", props.onEnd);

    onCleanup(() => {
      orbitControls().removeEventListener("change", callback);
      if (props.onStart)
        orbitControls().removeEventListener("start", props.onStart);
      if (props.onEnd) orbitControls().removeEventListener("end", props.onEnd);
      orbitControls().dispose();
    });
  });

  createEffect(() => {
    if (props.makeDefault) {
      const old = get()().controls;
      set()({ controls: orbitControls() });
      onCleanup(() => set()({ controls: old }));
    }
  });

  return null;
};
