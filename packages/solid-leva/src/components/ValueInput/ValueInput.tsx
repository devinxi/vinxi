import { createEffect, JSX } from "solid-js";
import { useInputContext } from "../../context";
import { parseNumber } from "../../utils";
import {
  input,
  inputContainer as inputContainer,
  innerLabel,
} from "./StyledInput";

type ValueInputProps = {
  id?: string;
  value: string;
  innerLabel?: false | JSX.Element;
  type?: "number" | undefined;
  onUpdate: (value: any) => void;
  onChange: (value: any) => void;
  onKeyDown?: (event: Event) => void;
};

export function ValueInput(props: ValueInputProps): JSX.Element {
  const { id: _id, emitOnEditStart, emitOnEditEnd } = useInputContext();
  const inputId = props.id || _id;
  let inputRef: HTMLInputElement | undefined;

  const update = (fn: (value: string) => void) => (event: any) => {
    const _value = event.currentTarget.value;
    fn(_value);
  };

  /**
   * We need to add native blur handler because of this issue in React, where
   * the onBlur handler isn't called during unmount:
   * https://github.com/facebook/react/issues/12363
   */

  createEffect(() => {
    const ref = inputRef;
    const _onUpdate = update((value) => {
      props.onUpdate(value);
      // emitOnEditEnd();
    });
    ref?.addEventListener("blur", _onUpdate);
    return () => ref?.removeEventListener("blur", _onUpdate);
  }, [update, props.onUpdate, emitOnEditEnd]);

  const onKeyPress = (event: any) => {
    if (event.key === "Enter") {
      update(props.onUpdate)(event);
      // event.currentTarget.blur()
    }
  };

  return (
    <div class={inputContainer()}>
      {props.innerLabel && typeof props.innerLabel === "string" ? (
        <label class={innerLabel()}>{props.innerLabel}</label>
      ) : (
        props.innerLabel
      )}
      <input
        class={input({
          levaType: props.type,
        })}
        ref={inputRef}
        id={inputId}
        type={"text"}
        autocomplete="off"
        spell-check="false"
        value={props.value}
        onInput={(e) => {
          props.onChange(e.currentTarget.value);
        }}
        onChange={(e) => {
          props.onUpdate(e.currentTarget.value);
        }}
        // onFocus={() => emitOnEditStart()}
        onKeyPress={onKeyPress}
        onKeyDown={props.onKeyDown}
      />
    </div>
  );
}

export function NumberInput(props: ValueInputProps) {
  const _onUpdate = (v: any) => props.onUpdate(parseNumber(v));
  const onKeyDown = (event) => {
    const dir =
      event.key === "ArrowUp" ? 1 : event.key === "ArrowDown" ? -1 : 0;
    if (dir) {
      event.preventDefault();
      const step = event.altKey ? 0.1 : event.shiftKey ? 10 : 1;
      // props.onChange((v: any) => parseFloat(v) + dir * step);
      props.onUpdate((v: any) => parseFloat(v) + dir * step);
    }
  };

  return (
    <ValueInput
      // {...props}
      value={props.value}
      onChange={props.onChange}
      onUpdate={_onUpdate}
      onKeyDown={onKeyDown}
    />
  );
}
