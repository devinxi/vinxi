import { createEffect, onCleanup } from "solid-js";
import { MotionValue, Subscriber } from "./";
import { isMotionValue } from "./utils/is-motion-value";

export function useOnChange<T>(
  value: MotionValue<T> | number | string,
  callback: Subscriber<T>
) {
  createEffect(() => {
    if (isMotionValue(value)) {
      onCleanup(value.onChange(callback));
    }
  });
}

export function useMultiOnChange(values: MotionValue[], handler: () => void) {
  createEffect(() => {
    const subscriptions = values.map((value) => value.onChange(handler));
    onCleanup(() => subscriptions.forEach((unsubscribe) => unsubscribe()));
  });
}
