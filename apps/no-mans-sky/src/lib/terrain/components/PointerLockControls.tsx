import { ReactThreeFiber, useThree } from "solid-three";
import * as React from "solid-react-compat";
import * as THREE from "three";
import { PointerLockControls as PointerLockControlsImpl } from "three-stdlib";

export type PointerLockControlsProps = ReactThreeFiber.Object3DNode<
  PointerLockControlsImpl,
  typeof PointerLockControlsImpl
> & {
  selector?: string;
  camera?: THREE.Camera;
  onChange?: (e?: THREE.Event) => void;
  onLock?: (e?: THREE.Event) => void;
  onUnlock?: (e?: THREE.Event) => void;
};

export const PointerLockControls = React.forwardRef<
  PointerLockControlsImpl,
  PointerLockControlsProps
>(({ selector, onChange, onLock, onUnlock, ...props }, ref) => {
  const { camera, ...rest } = props;
  const gl = useThree(({ gl }) => gl);
  const defaultCamera = useThree(({ camera }) => camera);
  const invalidate = useThree(({ invalidate }) => invalidate);
  const explCamera = camera || defaultCamera;

  const controls = React.useMemo(
    () => new PointerLockControlsImpl(explCamera, gl.domElement),
    [explCamera, gl.domElement]
  );

  React.createEffect(() => {
    const callback = (e: THREE.Event) => {
      invalidate();
      if (onChange) onChange(e);
    };

    controls?.addEventListener?.("change", callback);

    if (onLock) controls?.addEventListener?.("lock", onLock);
    if (onUnlock) controls?.addEventListener?.("unlock", onUnlock);

    return () => {
      controls?.removeEventListener?.("change", callback);
      if (onLock) controls?.addEventListener?.("lock", onLock);
      if (onUnlock) controls?.addEventListener?.("unlock", onUnlock);
    };
  }, [onChange, onLock, onUnlock, controls, invalidate]);

  React.createEffect(() => {
    const handler = () => controls?.lock();
    const element = selector ? document.querySelector(selector) : document;
    element && element.addEventListener("dblclick", handler);
    return () => (element ? element.removeEventListener("dblclick", handler) : undefined);
  }, [controls, selector]);

  return controls ? <primitive ref={ref} dispose={undefined} object={controls} {...rest} /> : null;
});
