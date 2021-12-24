import sync from "framesync";
import { Accessor, createSignal } from "solid-js";
import { useRef } from "src/react";
import { useUnmountEffect } from "./use-unmount-effect";

export function useForceUpdate(): [VoidFunction, Accessor<number>] {
  const isUnmountingRef = useRef(false);
  const [forcedRenderCount, setForcedRenderCount] = createSignal(0);
  useUnmountEffect(() => (isUnmountingRef.current = true));

  const forceRender = () => {
    !isUnmountingRef.current && setForcedRenderCount((count) => count + 1);
  };

  /**
   * Defer this to the end of the next animation frame in case there are multiple
   * synchronous calls.
   */
  const deferredForceRender = () => sync.postRender(forceRender);

  return [deferredForceRender, forcedRenderCount];
}
