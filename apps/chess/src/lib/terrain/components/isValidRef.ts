import * as React from "src/react";

export default function isValidRef(ref: React.RefObject<any>) {
  return ref && typeof ref.current !== "undefined" && ref.current;
}
