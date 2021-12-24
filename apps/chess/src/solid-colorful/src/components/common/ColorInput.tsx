import { createEffect, createSignal, splitProps } from "solid-js";
import { ColorInputBaseProps } from "../../types";

interface Props extends ColorInputBaseProps {
  /** Blocks typing invalid characters and limits string length */
  escape: (value: string) => string;
  /** Checks that value is valid color string */
  validate: (value: string) => boolean;
  /** Processes value before displaying it in the input */
  format?: (value: string) => string;
  /** Processes value before sending it in `onChange` */
  process?: (value: string) => string;
}

export const ColorInput = (props: Props) => {
  const [_, rest] = splitProps(props, [
    "color",
    "onChange",
    "onBlur",
    "escape",
    "validate",
    "format",
    "process",
  ]);
  const [value, setValue] = createSignal(props.escape(props.color ?? ""));

  // Trigger `onChange` handler only if the input value is a valid color
  const handleChange = (e) => {
    const inputValue = props.escape(e.target.value);
    setValue(inputValue);
    if (props.validate(inputValue))
      props.onChange?.(props.process ? props.process(inputValue) : inputValue);
  };

  // Take the color from props if the last typed color (in local state) is not valid
  const handleBlur = (e) => {
    if (!props.validate(e.target.value)) setValue(props.escape(props.color ?? ""));
    props.onBlur?.(e);
  };

  // Update the local state when `color` property value is changed
  createEffect(() => {
    setValue(props.escape(props.color ?? ""));
  });

  return (
    <input
      {...rest}
      value={props.format ? props.format(value()) : value()}
      spellcheck={false} // the element should not be checked for spelling errors
      onInput={handleChange}
      onBlur={handleBlur}
    />
  );
};
