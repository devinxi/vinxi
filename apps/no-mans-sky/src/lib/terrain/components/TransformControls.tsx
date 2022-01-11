import * as React, {
  forwardRef,
  useLayoutEffect,
  createEffect,
  useMemo,
} from "solid-js";
import { ReactThreeFiber, useThree } from "solid-three";
import { TransformControls as TransformControlsImpl } from "three/examples/jsm/controls/TransformControls";
import { useEditorStore } from "./useEditorStore";
import { Event } from "three";

export const TransformControls = forwardRef(
  (
    {
      children,
      object,
      ...props
    }: ReactThreeFiber.Object3DNode<
      TransformControlsImpl,
      typeof TransformControlsImpl
    > & { object: THREE.Object3D },
    ref
  ) => {
    const [camera, gl] = useThree((state) => [state.camera, state.gl] as const);
    const controls = useMemo(
      () => new TransformControlsImpl(camera, gl.domElement),
      [camera, gl.domElement]
    );

    const orbitControlsRef = useEditorStore((state) => state.orbitControls);

    useLayoutEffect(() => {
      controls.attach(object);

      return () => void controls.detach();
    }, [object, controls]);

    createEffect(() => {
      const callback = (event: Event) => {
        useEditorStore.setState({
          transforming: event.value,
        });
      };

      if (controls) {
        controls.addEventListener("dragging-changed", callback);
      }

      return () => {
        controls.removeEventListener("dragging-changed", callback);
      };
    }, [controls, orbitControlsRef]);

    // createEffect(() => {
    //   const onMouseDown = (event: Event) => {
    //     useEditorStore.setState({
    //       transforming: true,
    //     });
    //   };

    //   const onMouseUp = (event: Event) => {
    //     useEditorStore.setState({
    //       transforming: false,
    //     });
    //   };

    //   if (controls) {
    //     controls.addEventListener("mouseDown", onMouseDown);
    //     controls.addEventListener("mouseUp", onMouseUp);
    //   }

    //   return () => {
    //     controls.removeEventListener("mouseDown", onMouseDown);
    //     controls.removeEventListener("mouseUp", onMouseUp);
    //   };
    // }, [controls]);

    return <primitive dispose={null} object={controls} ref={ref} {...props} />;
  }
);
