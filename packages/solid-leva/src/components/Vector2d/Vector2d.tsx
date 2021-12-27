import { css } from "src/styles";
import { Vector } from "../Vector";
import { Label, Row } from "../UI";
import { Joystick } from "./Joystick";
import { useInputContext } from "../../context";
import { JSX, Show } from "solid-js";
import type { Vector2dProps } from "./vector2d-types";

export const container = css({
  display: "grid",
  columnGap: "$colGap",
  variants: {
    withJoystick: {
      true: { gridTemplateColumns: "$sizes$rowHeight auto" },
      false: { gridTemplateColumns: "auto" }
    }
  }
});

export function Vector2dComponent() {
  const input = useInputContext<Vector2dProps>();
  return (
    <Row input>
      <Label>{input.label}</Label>
      <div
        class={container({
          withJoystick: !!input.settings.joystick
        })}
      >
        <Show when={input.settings.joystick}>
          <Joystick
            value={input.displayValue}
            settings={input.settings}
            onUpdate={input.onUpdate}
          />
        </Show>
        <Vector value={input.displayValue} settings={input.settings} onUpdate={input.onUpdate} />
      </div>
    </Row>
  );
}
