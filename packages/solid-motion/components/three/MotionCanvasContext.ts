import { Size } from "@react-three/fiber";
import { createContext, MutableRefObject, RefObject, Ref } from "solid-js";

export type DimensionsState = {
  size: Size;
  dpr?: number;
};

export type SetLayoutCamera = (ref: Ref<any>) => void;
export type SetDimensions = (state: DimensionsState) => void;

export interface MotionCanvasContextProps {
  layoutCamera: RefObject<any>;
  dimensions: MutableRefObject<DimensionsState>;
}

export const MotionCanvasContext = createContext<
  MotionCanvasContextProps | undefined
>(undefined);
