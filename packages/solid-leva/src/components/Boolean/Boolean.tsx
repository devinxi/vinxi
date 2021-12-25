import { useInputContext } from "../../context";
import { Label, Row } from "../UI";
import { inputWrapper } from "./StyledBoolean";
import type { BooleanProps } from "./boolean-types";

import { JSX } from "solid-js";

export function Boolean({
  value,
  onUpdate,
  id,
}: Pick<BooleanProps, "value" | "onUpdate" | "id">) {
  return (
    <div class={inputWrapper()}>
      <input
        id={id}
        type="checkbox"
        checked={value}
        onChange={(e) => onUpdate(e.currentTarget.checked)}
      />
      <label htmlFor={id}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-stroke-linejoin="round"
            stroke-width={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </label>
    </div>
  );
}

export function BooleanComponent() {
  const { label, value, onUpdate, id } = useInputContext<BooleanProps>();

  return (
    <Row input>
      <Label>{label}</Label>
      <Boolean value={value} onUpdate={onUpdate} id={id} />
    </Row>
  );
}
