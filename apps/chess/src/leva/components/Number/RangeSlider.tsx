import { sanitizeStep } from "./number-plugin";
import { invertedRange, range } from "../../utils";
import { useTh } from "../../styles";
import type { RangeSliderProps } from "./number-types";
import {
  rangeWrapper,
  indicator,
  scrubber,
  range as rangeClass,
} from "./rangeStyles";
import { DragGesture } from "@use-gesture/vanilla";
import { createEffect } from "solid-js";

export function RangeSlider(props: RangeSliderProps) {
  let ref: HTMLDivElement;
  let scrubberRef: HTMLDivElement;
  let rangeWidth: number;
  const scrubberWidth = useTh("sizes", "scrubberWidth");

  createEffect(() => {
    new DragGesture(
      scrubberRef,
      ({ event, first, xy: [x], movement: [mx], memo }) => {
        if (first) {
          // rangeWidth is the width of the slider el minus the width of the scrubber el itself
          const { width, left } = ref.getBoundingClientRect();
          rangeWidth = width - parseFloat(scrubberWidth);

          const targetIsScrub = event?.target === scrubberRef;
          // memo is the value where the user clicked on
          memo = targetIsScrub
            ? props.value
            : invertedRange((x - left) / width, props.min, props.max);
        }
        const newValue =
          memo + invertedRange(mx / rangeWidth, 0, props.max - props.min);
        props.onDrag(
          sanitizeStep(newValue, {
            step: props.step,
            initialValue: props.initialValue,
          })
        );
        return memo;
      }
    );
  });

  return (
    <div class={rangeWrapper()} ref={ref}>
      <div class={rangeClass()}>
        <div
          class={indicator()}
          style={{
            left: 0,
            right: `${(1 - range(props.value, props.min, props.max)) * 100}%`,
          }}
        />
      </div>
      <div
        class={scrubber()}
        ref={scrubberRef}
        style={{
          left: `calc(${range(
            props.value,
            props.min,
            props.max
          )} * (100% - ${scrubberWidth}))`,
          "touch-action": "none",
        }}
      />
    </div>
  );
}
