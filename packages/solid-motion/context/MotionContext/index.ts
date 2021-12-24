import { createContext, useContext } from "solid-js";
import { VisualElement } from "../../render/types";

export interface MotionContextProps {
  visualElement?: VisualElement;
  initial?: false | string | string[];
  animate?: string | string[];
}

export const MotionContext = createContext<MotionContextProps>({});

export function useVisualElementContext() {
  return useContext(MotionContext).visualElement;
}
