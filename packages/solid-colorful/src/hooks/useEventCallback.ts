import { useRef } from "solid-react-compat";

// Saves incoming handler to the ref in order to avoid "useCallback hell"
export function useEventCallback<T>(
  handler?: (value: T) => void
): (value: T) => void {
  const callbackRef = useRef(handler);
  const fn = useRef((value: T) => {
    callbackRef.current && callbackRef.current(value);
  });

  // @ts-ignore
  callbackRef.current = handler;

  // @ts-ignore
  return fn.current;
}
