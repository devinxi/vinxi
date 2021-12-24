import { useLayoutEffect, createEffect } from "solid-js";

// React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally createEffect on the server (no-op) and
// useLayoutEffect in the browser.
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : createEffect;
