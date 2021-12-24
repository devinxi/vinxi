import * as React from "solid-react-compat";

export default function isValidRef(ref: React.RefObject<any>) {
  return ref && typeof ref.current !== "undefined" && ref.current;
}
