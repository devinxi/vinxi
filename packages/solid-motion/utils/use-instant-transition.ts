import sync from "framesync";
import { createEffect } from "solid-js";
import { useInstantLayoutTransition } from "../projection/use-instant-layout-transition";
import { useForceUpdate } from "./use-force-update";
import { instantAnimationState } from "./use-instant-transition-state";

export function useInstantTransition() {
  const [forceUpdate, forcedRenderCount] = useForceUpdate();
  const startInstantLayoutTransition = useInstantLayoutTransition();

  createEffect(() => {
    /**
     * Unblock after two animation frames, otherwise this will unblock too soon.
     */
    forcedRenderCount();
    sync.postRender(() =>
      sync.postRender(() => (instantAnimationState.current = false))
    );
  });

  return (callback: () => void) => {
    startInstantLayoutTransition(() => {
      instantAnimationState.current = true;
      forceUpdate();
      callback();
    });
  };
}
