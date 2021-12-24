import { ValueInput } from "../ValueInput";
import { Label, Row } from "../UI";
import { useInputContext } from "../../context";
import type { StringProps } from "./string-types";
import { ComponentProps } from "solid-js";

type BaseStringProps = Pick<
  StringProps,
  "displayValue" | "onUpdate" | "onChange"
> &
  Omit<ComponentProps<typeof ValueInput>, "value">;

export function String(props: BaseStringProps) {
  return <ValueInput value={props.displayValue} {...props} />;
}

export function StringComponent() {
  const { label, displayValue, onUpdate, onChange } =
    useInputContext<StringProps>();
  return (
    <Row input>
      <Label>{label}</Label>
      <String
        displayValue={displayValue}
        onUpdate={onUpdate}
        onChange={onChange}
      />
    </Row>
  );
}
