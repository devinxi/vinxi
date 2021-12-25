import { useCompareMemoize } from "./useCompareMemoize";

export function useShallowMemo<T>(fn: () => T) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // return useMemo(fn, useCompareMemoize(deps, false));
}
