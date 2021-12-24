import { Hue } from "./Hue";
import { Saturation } from "./Saturation";

import { ColorModel, ColorPickerBaseProps, AnyColor } from "../../types";
import { useColorManipulation } from "../../hooks/useColorManipulation";
import { useStyleSheet } from "../../hooks/useStyleSheet";
import { formatClassName } from "../../utils/format";
import { useRef } from "solid-react-compat";
import { createEffect, mergeProps, splitProps } from "solid-js";

interface Props<T extends AnyColor> extends Partial<ColorPickerBaseProps<T>> {
  colorModel: ColorModel<T>;
}

export const ColorPicker = <T extends AnyColor>(props: Props<T>) => {
  const merged = mergeProps({ color: props.colorModel.defaultColor }, props);
  let nodeRef = useRef<HTMLDivElement>();
  useStyleSheet({ current: nodeRef.current! });

  const [hsva, updateHsva] = useColorManipulation<T>(merged);

  const [_, rest] = splitProps(merged, [
    "color",
    "colorModel",
    "onChange",
    "className",
  ]);

  createEffect(() => {
    console.log(hsva());
  });

  return (
    <div
      {...rest}
      ref={(el) => (nodeRef.current = el)}
      className={formatClassName(["react-colorful", merged.className])}
    >
      <Saturation hsva={hsva()} onChange={updateHsva} />
      <Hue
        hue={hsva().h}
        onChange={updateHsva}
        className="react-colorful__last-control"
      />
    </div>
  );
};
