import { useInputContext } from "../../context";
import { Label, Row, Chevron } from "../UI";
import {
  nativeSelect,
  presentationalSelect,
  selectContainer,
} from "./StyledSelect";
import type { SelectProps } from "./select-types";
import { For, JSX } from "solid-js";

export function Select(
  props: Pick<
    SelectProps,
    "value" | "displayValue" | "onUpdate" | "id" | "settings"
  >
) {
  return (
    <div class={selectContainer()}>
      <select
        class={nativeSelect()}
        id={props.id}
        value={props.displayValue}
        onChange={(e) =>
          props.onUpdate(props.settings.keys[Number(e.currentTarget.value)])
        }
      >
        <For each={props.settings.keys}>
          {(key, index) => <option value={index()}>{key}</option>}
        </For>
      </select>
      <div class={presentationalSelect()}>
        {props.settings.keys[props.displayValue]}
      </div>
      <Chevron toggled />
    </div>
  );
}

export function SelectComponent() {
  const input = useInputContext<SelectProps>();
  return (
    <Row input>
      <Label>{input.label}</Label>
      <Select {...input} />
    </Row>
  );
}
