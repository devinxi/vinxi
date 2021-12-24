import { createEffect } from "solid-js";

export function useUnmountEffect(callback: () => void) {
  return createEffect(() => () => callback(), []);
}
