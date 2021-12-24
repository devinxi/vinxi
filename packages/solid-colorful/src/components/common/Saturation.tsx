import { Interactive, Interaction } from "./Interactive";
import { Pointer } from "./Pointer";
import { HsvaColor } from "../../types";
import { hsvaToHslString, hsvaToRgbString } from "../../utils/convert";
import { clamp } from "../../utils/clamp";
import { round } from "../../utils/round";

interface Props {
  hsva: HsvaColor;
  onChange: (newColor: { s: number; v: number }) => void;
}

export const Saturation = (props: Props) => {
  const handleMove = (interaction: Interaction) => {
    props.onChange({
      s: interaction.left * 100,
      v: 100 - interaction.top * 100,
    });
  };

  const handleKey = (offset: Interaction) => {
    // Saturation and brightness always fit into [0, 100] range
    props.onChange({
      s: clamp(props.hsva.s + offset.left * 100, 0, 100),
      v: clamp(props.hsva.v - offset.top * 100, 0, 100),
    });
  };

  return (
    <div
      className="react-colorful__saturation"
      style={{
        "background-color": hsvaToRgbString({
          h: props.hsva.h,
          s: 100,
          v: 100,
          a: 1,
        }),
      }}
    >
      <Interactive
        onMove={handleMove}
        onKey={handleKey}
        aria-label="Color"
        aria-valuetext={`Saturation ${round(props.hsva.s)}%, Brightness ${round(
          props.hsva.v
        )}%`}
      >
        <Pointer
          className="react-colorful__saturation-pointer"
          top={1 - props.hsva.v / 100}
          left={props.hsva.s / 100}
          color={hsvaToHslString(props.hsva)}
        />
      </Interactive>
    </div>
  );
};
