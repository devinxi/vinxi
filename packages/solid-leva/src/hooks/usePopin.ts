import { createRenderEffect, createSignal, Accessor } from "solid-js";

export function usePopin(margin = 3) {
  let popinRef = {
    current: null as HTMLElement | null,
  };
  let wrapperRef = {
    current: null as HTMLElement | null,
  };

  const [shown, setShow] = createSignal(false);

  const show = () => setShow(true);
  const hide = () => setShow(false);

  createRenderEffect(() => {
    if (shown()) {
      const { bottom, top, left } = popinRef.current!.getBoundingClientRect();
      const { height } = wrapperRef.current!.getBoundingClientRect();
      const direction =
        bottom + height > window.innerHeight - 40 ? "up" : "down";

      wrapperRef.current!.style.position = "fixed";
      wrapperRef.current!.style.zIndex = "10000";
      wrapperRef.current!.style.left = left + "px";

      if (direction === "down")
        wrapperRef.current!.style.top = bottom + margin + "px";
      else
        wrapperRef.current!.style.bottom =
          window.innerHeight - top + margin + "px";
    }
  });

  return { popinRef, wrapperRef, shown, show, hide };
}
