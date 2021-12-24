import { MutableRefObject } from "solid-js";

export function isRefObject<E = any>(ref: any): ref is MutableRefObject<E> {
  return (
    typeof ref === "object" &&
    Object.prototype.hasOwnProperty.call(ref, "current")
  );
}
