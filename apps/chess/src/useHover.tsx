import { createSignal } from "solid-js";
import { ThreeEvent } from "solid-three";

export const useHover = ({
  onPointerEnter,
  onPointerLeave,
}: {
  onPointerEnter: (event: ThreeEvent<PointerEvent>) => void;
  onPointerLeave: (event: ThreeEvent<PointerEvent>) => void;
}) => {
  const [hover, setHover] = createSignal(false);
  return [
    hover,
    {
      onPointerEnter: (e: ThreeEvent<PointerEvent>) => {
        setHover(true);
        onPointerEnter(e);
      },
      onPointerOut: (e: ThreeEvent<PointerEvent>) => {
        setHover(false);
        onPointerLeave(e);
      },
    },
  ] as const;
};
