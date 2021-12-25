import { useInputContext } from "../context";
// import { useDrag as useDragHook } from 'react-use-gesture'
import { FullGestureState, DragConfig } from "@use-gesture/vanilla";

export function useDrag(
  handler: (state: FullGestureState<"drag">) => any,
  config?: DragConfig
) {
  const { emitOnEditStart, emitOnEditEnd } = useInputContext();
  // return useDragHook((state) => {
  //   if (state.first) {
  //     document.body.classList.add("panel__dragged");
  //     emitOnEditStart();
  //   }
  //   const result = handler(state);
  //   if (state.last) {
  //     document.body.classList.remove("panel__dragged");
  //     emitOnEditEnd();
  //   }
  //   return result;
  // }, config);
  return {};
}
