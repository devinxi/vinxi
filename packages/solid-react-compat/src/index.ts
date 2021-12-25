import { createMemo } from "solid-js";
export function useRef<T>(initialVal: T | null = null) {
  // function group(el) {
  //   this.current = el;
  // }

  // let ref = {
  //   current: initialVal,
  // };

  // let g = group.bind(ref);

  // g.current = initialVal;

  return {
    current: initialVal,
  } as { current: T | null } & ((el: T | null) => void);
}

export type RefObject<T> = { current: T | null } & ((el: T | null) => void);

export function useCallback<T>(fn: T, deps: any[]): T {
  return fn;
}

export function useMemo<V>(fn: () => V): V {
  return createMemo(fn)();
}
