import { dequal } from "dequal/lite";
import { createEffect, createSignal, Accessor } from "solid-js";
import { format } from "../plugin-system";

type Props<V, Settings> = {
  type: string;
  value: V;
  settings?: Settings;
  setValue: (v: V) => void;
};

export function useInputSetters<V, Settings extends object>(
  props: Props<V, Settings>
) {
  const [displayValue, setDisplayValue] = createSignal(
    format(props.type, props.value, props.settings)
  );
  let previousValue;
  const setFormat = (v) =>
    setDisplayValue(format(props.type, v, props.settings));

  const onUpdate = (updatedValue: any) => {
    try {
      props.setValue(updatedValue);
    } catch (error: any) {
      const { type, previousValue } = error;
      // make sure we throw an error if it's not a sanitization error
      if (type !== "LEVA_ERROR") throw error;
      setFormat(previousValue);
    }
  };

  createEffect(() => {
    if (!dequal(props.value, previousValue)) {
      setFormat(props.value);
    }
    previousValue = props.value;
  });

  return { displayValue, onChange: setDisplayValue, onUpdate };
}
