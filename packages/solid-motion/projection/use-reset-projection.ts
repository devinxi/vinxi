import { rootProjectionNode } from "./node/HTMLProjectionNode";

export function useResetProjection() {
  const reset = () => {
    const root = rootProjectionNode.current;
    if (!root) return;
    root.resetTree();
  };

  return reset;
}
