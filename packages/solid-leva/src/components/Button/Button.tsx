import { Row } from "../UI";
import { button } from "./StyledButton";
import { JSX } from "solid-js";

type ButtonProps = {
  label: string;
  onClick: () => any;
};

export function Button(props: ButtonProps) {
  return (
    <Row>
      <button class={button()} onClick={() => props.onClick()}>
        {props.label}
      </button>
    </Row>
  );
}
