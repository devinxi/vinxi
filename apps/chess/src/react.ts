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

export function useCallback(fn) {
  return fn;
}

export function useMemo(fn) {
  return createMemo(fn)();
}
