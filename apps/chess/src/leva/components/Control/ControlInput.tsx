import { Plugins } from "../../plugin-system";
import { warn, LevaErrors } from "../../utils/log";
import { InputContext } from "../../context";
import { useInputSetters } from "../../hooks";
import { inputWrapper } from "../UI/StyledUI";
import type { DataInput } from "../../types";
import { createEffect, Dynamic } from "solid-three";

type ControlInputProps = Omit<DataInput, "__refCount" | "key"> & {
  valueKey: string;
  path: string;
  storeId: string;
  setValue: (value: any) => void;
  setSettings: (settings: any) => void;
  disable: (flag: boolean) => void;
  emitOnEditStart?: (...args: any) => void;
  emitOnEditEnd?: (...args: any) => void;
};

function InputProvider(props) {
  return (
    <InputContext.Provider value={props}>
      {props.children}
    </InputContext.Provider>
  );
}

export function ControlInput(props: ControlInputProps) {
  const { displayValue, onChange, onUpdate } = useInputSetters(props);

  const Input = Plugins[props.type].component;
  if (!Input) {
    warn(LevaErrors.NO_COMPONENT_FOR_TYPE, props.type, props.path);
    return null;
  }

  return (
    <InputProvider
      value={props.value}
      key={props.valueKey}
      id={"" + props.path}
      displayValue={displayValue()}
      onChange={onChange}
      onUpdate={onUpdate}
      settings={props.settings}
      label={props.label}
    >
      <div
        class={inputWrapper({
          disabled: props.disabled,
        })}
      >
        <Dynamic component={Input} />
      </div>
    </InputProvider>
  );
}
