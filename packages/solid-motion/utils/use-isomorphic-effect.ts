import { createEffect } from "solid-js";
import { isBrowser } from "./is-browser";

export const useIsomorphicLayoutEffect = isBrowser
  ? createEffect
  : createEffect;
