import {
  Accessor,
  createEffect,
  createRenderEffect,
  onCleanup,
} from "solid-js";
import { useRef } from "src/react";

export function useToggle(toggled: Accessor<boolean>) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  // let firstRender = true;

  // this should be fine for SSR since the store is set in createEffect and
  // therefore the pane doesn't show on first render.
  // createEffect(() => {
  //   // console.log(toggled());
  //   if (!toggled()) {
  //     wrapperRef.current!.style.height = "0px";
  //     wrapperRef.current!.style.overflow = "hidden";
  //   } else {
  //     const { height } = contentRef.current!.getBoundingClientRect();
  //     console.log(height);
  //     wrapperRef.current!.style.height = "inherit";
  //     wrapperRef.current!.style.overflow = "visible";
  //   }
  //   // we only want to do this once so that's ok to break the rules of hooks.
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // });

  // createEffect(() => {
  // prevents first animation
  // if (firstRender) {
  //   firstRender = false;
  //   return;
  // }
  // let timeout: number;
  // const ref = wrapperRef.current!;
  // const fixHeight = () => {
  //   if (toggled()) {
  //     ref.style.removeProperty("height");
  //     ref.style.removeProperty("overflow");
  //     contentRef.current!.scrollIntoView({
  //       behavior: "smooth",
  //       block: "nearest",
  //     });
  //   }
  // };
  // ref.addEventListener("transitionend", fixHeight, { once: true });
  // const { height } = contentRef.current!.getBoundingClientRect();
  // console.log(height);
  // ref.style.height = height + "px";
  // if (!toggled()) {
  //   ref.style.overflow = "hidden";
  //   timeout = window.setTimeout(() => (ref.style.height = "0px"), 50);
  // }
  // onCleanup(() => {
  //   ref.removeEventListener("transitionend", fixHeight);
  //   clearTimeout(timeout);
  // });
  // });

  return { wrapperRef, contentRef };
}
