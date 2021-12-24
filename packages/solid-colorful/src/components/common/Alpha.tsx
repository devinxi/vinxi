import { Interactive, Interaction } from "./Interactive";
import { Pointer } from "./Pointer";

import { hsvaToHslaString } from "../../utils/convert";
import { formatClassName } from "../../utils/format";
import { clamp } from "../../utils/clamp";
import { round } from "../../utils/round";
import { HsvaColor } from "../../types";

interface Props {
  className?: string;
  hsva: HsvaColor;
  onChange: (newAlpha: { a: number }) => void;
}

export const Alpha = (props: Props) => {
  const handleMove = (interaction: Interaction) => {
    props.onChange({ a: interaction.left });
  };

  const handleKey = (offset: Interaction) => {
    // Alpha always fit into [0, 1] range
    props.onChange({ a: clamp(props.hsva.a + offset.left) });
  };

  // We use `Object.assign` instead of the spread operator
  // to prevent adding the polyfill (about 150 bytes gzipped)
  const colorFrom = hsvaToHslaString(Object.assign({}, props.hsva, { a: 0 }));
  const colorTo = hsvaToHslaString(Object.assign({}, props.hsva, { a: 1 }));

  const gradientStyle = {
    backgroundImage: `linear-gradient(90deg, ${colorFrom}, ${colorTo})`,
  };

  const nodeClassName = formatClassName([
    "react-colorful__alpha",
    props.className,
  ]);

  return (
    <div className={nodeClassName}>
      <div className="react-colorful__alpha-gradient" style={gradientStyle} />
      <Interactive
        onMove={handleMove}
        onKey={handleKey}
        aria-label="Alpha"
        aria-valuetext={`${round(props.hsva.a * 100)}%`}
      >
        <Pointer
          className="react-colorful__alpha-pointer"
          left={props.hsva.a}
          top={0}
          color={hsvaToHslaString(props.hsva)}
        />
      </Interactive>
    </div>
  );
};
