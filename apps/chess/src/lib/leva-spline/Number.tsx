import * as React from "src/react";
const { Label, Row, Number } = Components;
import { RangeGrid } from "./StyledNumber";
import { RangeSlider } from "./RangeSlider";
import type { NumberProps } from "./number-types";
import { Components, useInputContext } from "@/leva/plugin";

export function NumberComponent() {
  const props = useInputContext<NumberProps>();
  const { label, value, onUpdate, settings, id } = props;
  const { min, max } = settings;
  const hasRange = max !== Infinity && min !== -Infinity;

  return (
    <Row input>
      <Label>{label}</Label>
      <RangeGrid hasRange={hasRange}>
        {hasRange && (
          <RangeSlider
            value={parseFloat(value as any)}
            onDrag={onUpdate}
            {...settings}
          />
        )}
        <Number
          {...props}
          id={id}
          label="value"
          innerLabelTrim={hasRange ? 0 : 1}
        />
      </RangeGrid>
    </Row>
  );
}
