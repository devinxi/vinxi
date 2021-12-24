import { Interactive, Interaction } from "./Interactive";
import { Pointer } from "./Pointer";

import { hsvaToHslString } from "../../utils/convert";
import { formatClassName } from "../../utils/format";
import { clamp } from "../../utils/clamp";
import { round } from "../../utils/round";
import { createEffect } from "solid-js";

interface Props {
  className?: string;
  hue: number;
  onChange: (newHue: { h: number }) => void;
}

export const Hue = (props: Props) => {
  const handleMove = (interaction: Interaction) => {
    props.onChange({ h: 360 * interaction.left });
  };

  const handleKey = (offset: Interaction) => {
    // Hue measured in degrees of the color circle ranging from 0 to 360
    props.onChange({
      h: clamp(props.hue + offset.left * 360, 0, 360),
    });
  };

  return (
    <div className={formatClassName(["react-colorful__hue", props.className])}>
      <Interactive
        onMove={handleMove}
        onKey={handleKey}
        aria-label="Hue"
        aria-valuetext={round(props.hue)}
      >
        <Pointer
          className="react-colorful__hue-pointer"
          left={props.hue / 360}
          top={0}
          color={hsvaToHslString({ h: props.hue, s: 100, v: 100, a: 1 })}
        />
      </Interactive>
    </div>
  );
};
