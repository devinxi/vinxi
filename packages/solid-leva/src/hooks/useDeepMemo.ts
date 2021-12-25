import { createMemo, Accessor } from "solid-js";
import { useCompareMemoize } from "./useCompareMemoize";

export function useDeepMemo<T>(fn: () => T, deps: []) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return createMemo(fn, useCompareMemoize(deps, true));
}
