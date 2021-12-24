import { splitProps } from "solid-js";
import { ColorInputBaseProps } from "../types";

import { validHex } from "../utils/validate";
import { ColorInput } from "./common/ColorInput";

interface HexColorInputProps extends ColorInputBaseProps {
  /** Enables `#` prefix displaying */
  prefixed?: boolean;
  /** Allows `#rgba` and `#rrggbbaa` color formats */
  alpha?: boolean;
}

/** Adds "#" symbol to the beginning of the string */
const prefix = (value: string) => "#" + value;

export const HexColorInput = (props: HexColorInputProps) => {
  const [data, rest] = splitProps(props, ["prefixed", "alpha"]);

  /** Escapes all non-hexadecimal characters including "#" */
  const escape = (value: string) =>
    value.replace(/([^0-9A-F]+)/gi, "").substring(0, props.alpha ? 8 : 6);

  /** Validates hexadecimal strings */
  const validate = (value: string) => validHex(value, props.alpha);

  return (
    <ColorInput
      {...rest}
      escape={escape}
      format={props.prefixed ? prefix : undefined}
      process={prefix}
      validate={validate}
    />
  );
};
