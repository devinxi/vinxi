import { Show } from "solid-js";
import { row, inputRow } from "./StyledUI";

export function Row(props: any) {
  return (
    <Show
      when={!props.input}
      fallback={<div class={inputRow()}>{props.children}</div>}
    >
      <div class={row()}>{props.children}</div>
    </Show>
  );
}
