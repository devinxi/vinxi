import { createEffect, createSignal } from "solid-js";
import shallow from "zustand/shallow";
import type { StoreType } from "../types";

/**
 * Hook used by the root component to get all visible inputs.
 */
export const useVisiblePaths = (store: StoreType) => {
  const [paths, setPaths] = createSignal(store.getVisiblePaths());

  createEffect(() => {
    setPaths(store.getVisiblePaths());
    const unsub = store.useStore.subscribe(
      store.getVisiblePaths,
      setPaths,
      shallow
    );
    return () => unsub();
  });

  return paths;
};
