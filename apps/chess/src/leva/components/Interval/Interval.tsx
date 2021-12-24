import { Label, Row } from "../UI";
// import { Vector } from "../Vector";
import { sanitizeStep } from "../Number";
import { invertedRange, range } from "../../utils";
import { useInputContext } from "../../context";
import { css, useTh } from "../../styles";
import type {
  IntervalSliderProps,
  IntervalProps,
  InternalInterval,
} from "./interval-types";
import { useRef } from "src/react";
import { DragGesture } from "@use-gesture/vanilla";
import { createEffect, splitProps } from "solid-js";
import {
  indicator,
  rangeWrapper,
  scrubber,
  range as rangeStyle,
} from "../Number/rangeStyles";

const container = css({
  display: "grid",
  columnGap: "$colGap",
  gridTemplateColumns:
    "auto calc($sizes$numberInputMinWidth * 2 + $space$rowGap)",
});

function IntervalSlider({
  value,
  bounds: [min, max],
  onDrag,
  ...settings
}: IntervalSliderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const minScrubberRef = useRef<HTMLDivElement>(null);
  const maxScrubberRef = useRef<HTMLDivElement>(null);
  const rangeWidth = useRef<number>(0);
  const scrubberWidth = useTh("sizes", "scrubberWidth");

  createEffect(() => {
    new DragGesture(
      ref.current,
      ({ event, first, xy: [x], movement: [mx], memo = {} }) => {
        if (first) {
          const { width, left } = ref.current!.getBoundingClientRect();
          rangeWidth.current = width - parseFloat(scrubberWidth);

          const targetIsScrub =
            event?.target === minScrubberRef.current ||
            event?.target === maxScrubberRef.current;

          memo.pos = invertedRange((x - left) / width, min, max);
          const delta =
            Math.abs(memo.pos - value.min) - Math.abs(memo.pos - value.max);
          memo.key =
            delta < 0 || (delta === 0 && memo.pos <= value.min) ? "min" : "max";
          if (targetIsScrub)
            memo.pos = value[memo.key as keyof InternalInterval];
        }
        const newValue =
          memo.pos + invertedRange(mx / rangeWidth.current, 0, max - min);

        onDrag({
          [memo.key]: sanitizeStep(
            newValue,
            settings[memo.key as "min" | "max"]
          ),
        });
        return memo;
      }
    );
  });

  const minStyle = `calc(${range(
    value.min,
    min,
    max
  )} * (100% - ${scrubberWidth} - 8px) + 4px)`;
  const maxStyle = `calc(${
    1 - range(value.max, min, max)
  } * (100% - ${scrubberWidth} - 8px) + 4px)`;

  return (
    <div class={rangeWrapper()} ref={(el) => (ref.current = el)}>
      <div class={rangeStyle()}>
        <div class={indicator()} style={{ left: minStyle, right: maxStyle }} />
      </div>
      <div
        class={scrubber({
          position: "left",
        })}
        ref={(el) => (minScrubberRef.current = el)}
        style={{ left: minStyle }}
      />
      <div
        class={scrubber({
          position: "right",
        })}
        ref={(el) => (maxScrubberRef.current = el)}
        style={{ right: maxStyle }}
      />
    </div>
  );
}

export function IntervalComponent() {
  const input = useInputContext<IntervalProps>();

  return (
    <>
      <Row input>
        <Label>{input.label}</Label>
        <div class={container()}>
          <IntervalSlider
            value={input.displayValue}
            {...input.settings}
            onDrag={input.onUpdate}
          />
          {/* <Vector
            value={input.displayValue}
            settings={splitProps(input.settings, ["bounds"])[1]}
            onUpdate={input.onUpdate}
            innerLabelTrim={0}
          /> */}
        </div>
      </Row>
    </>
  );
}
