import { Hue } from "./Hue";
import { Saturation } from "./Saturation";
import { Alpha } from "./Alpha";

import { ColorModel, ColorPickerBaseProps, AnyColor } from "../../types";
import { useColorManipulation } from "../../hooks/useColorManipulation";
import { useStyleSheet } from "../../hooks/useStyleSheet";
import { formatClassName } from "../../utils/format";
import { useRef } from "src/react";

interface Props<T extends AnyColor> extends Partial<ColorPickerBaseProps<T>> {
  colorModel: ColorModel<T>;
}

export const AlphaColorPicker = <T extends AnyColor>({
  className,
  colorModel,
  color = colorModel.defaultColor,
  onChange,
}: // ...rest
Props<T>) => {
  const nodeRef = useRef<HTMLDivElement>();
  useStyleSheet(nodeRef);

  const [hsva, updateHsva] = useColorManipulation<T>(
    colorModel,
    color,
    onChange
  );

  const nodeClassName = formatClassName(["react-colorful", className]);

  return (
    <div
      // {...rest}
      ref={(el) => (nodeRef.current = el)}
      className={nodeClassName}
    >
      <Saturation hsva={hsva} onChange={updateHsva} />
      <Hue hue={hsva.h} onChange={updateHsva} />
      <Alpha
        hsva={hsva}
        onChange={updateHsva}
        className="react-colorful__last-control"
      />
    </div>
  );
};
