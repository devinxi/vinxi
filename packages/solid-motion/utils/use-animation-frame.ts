import sync, { cancelSync, FrameData } from "framesync";
import { createEffect } from "solid-js";
import { useConstant } from "./use-constant";

export type FrameCallback = (timestamp: number) => void;

const getCurrentTime =
  typeof performance !== "undefined"
    ? () => performance.now()
    : () => Date.now();

export function useAnimationFrame(callback: FrameCallback) {
  const initialTimestamp = useConstant(getCurrentTime);

  createEffect(() => {
    const provideTimeSinceStart = ({ timestamp }: FrameData) => {
      callback(timestamp - initialTimestamp);
    };

    sync.update(provideTimeSinceStart, true);
    return () => cancelSync.update(provideTimeSinceStart);
  }, [callback]);
}
