import { createEffect } from "solid-js";
import { useRef, RefObject } from "solid-react-compat";
import { debounce } from "../utils";

export function useCanvas2d(
  fn: Function
): [RefObject<HTMLCanvasElement>, RefObject<CanvasRenderingContext2D>] {
  const canvas = useRef<HTMLCanvasElement>(null);
  const ctx = useRef<CanvasRenderingContext2D | null>(null);
  const hasFired = useRef(false);

  // TODO this is pretty much useless in 90% of cases since panels
  // have a fixed width
  createEffect(() => {
    const handleCanvas = debounce(() => {
      canvas.current!.width =
        canvas.current!.offsetWidth * window.devicePixelRatio;
      canvas.current!.height =
        canvas.current!.offsetHeight * window.devicePixelRatio;
      fn(canvas.current, ctx.current);
    }, 250);
    window.addEventListener("resize", handleCanvas);
    if (!hasFired.current) {
      handleCanvas();
      hasFired.current = true;
    }
    return () => window.removeEventListener("resize", handleCanvas);
  }, [fn]);

  createEffect(() => {
    ctx.current = canvas.current!.getContext("2d");
  }, []);

  return [canvas, ctx];
}
