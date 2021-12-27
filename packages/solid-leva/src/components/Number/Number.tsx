import { NumberInput } from "../ValueInput";
import { Label, Row } from "../UI";
import { useDrag } from "../../hooks";
import { rangeGrid } from "./numberStyles";
import { RangeSlider } from "./RangeSlider";
import { useInputContext } from "../../context";
import type { NumberProps } from "./number-types";
import { multiplyStep } from "../../utils";
import { innerNumberLabel } from "../ValueInput/StyledInput";
import { createSignal, Show, JSX, createEffect } from "solid-js";
import { effect } from "src/../../solid-colorful/node_modules/solid-js/web/types";
import { DragGesture } from "@use-gesture/vanilla";

type DraggableLabelProps = {
  label: string;
  step: number;
  innerLabelTrim: number;
  onUpdate: (v: any) => void;
};

const DraggableLabel = (props: DraggableLabelProps): JSX.Element => {
  const [dragging, setDragging] = createSignal(false);
  let ref;

  createEffect(() => {
    new DragGesture(ref, ({ active, delta: [dx], event, memo = 0 }) => {
      setDragging(active);
      memo += dx / 2;
      if (Math.abs(memo) >= 1) {
        props.onUpdate(
          (v: any) => parseFloat(v) + Math.floor(memo) * props.step * multiplyStep(event)
        );
        memo = 0;
      }
      return memo;
    });
  });

  return (
    <div
      class={innerNumberLabel({
        dragging: dragging()
      })}
      title={props.label.length > 1 ? props.label : ""}
      ref={ref}
      // {...bind()}
    >
      {props.label.slice(0, props.innerLabelTrim)}
    </div>
  );
};

export function Number(
  props: Omit<NumberProps, "setSettings" | "emitOnEditStart" | "emitOnEditEnd"> & {
    id?: string;
    label: string;
    innerLabelTrim?: number;
  }
): JSX.Element {
  return (
    <NumberInput
      id={props.id}
      value={String(props.displayValue)}
      onUpdate={props.onUpdate}
      onChange={props.onChange}
      innerLabel={
        <DraggableLabel
          label={props.label}
          step={props.settings.step}
          onUpdate={props.onUpdate}
          innerLabelTrim={props.innerLabelTrim!}
        />
      }
    />
  );
}

export function NumberComponent(): JSX.Element {
  const props = useInputContext<NumberProps>();
  const hasRange = () => props.settings.max !== Infinity && props.settings.min !== -Infinity;

  return (
    <Row input>
      <Label>{props.label}</Label>
      <div
        class={rangeGrid({
          hasRange: hasRange()
        })}
      >
        <Show when={hasRange()}>
          <RangeSlider
            value={parseFloat(props.value as any)}
            onDrag={props.onUpdate}
            {...props.settings}
          />
        </Show>
        <Number {...props} id={props.id} label="value" innerLabelTrim={hasRange() ? 0 : 2} />
      </div>
    </Row>
  );
}
