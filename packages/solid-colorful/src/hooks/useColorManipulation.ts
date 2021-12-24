import { Accessor, createEffect, createSignal } from "solid-js";
import { useRef } from "solid-react-compat";
import { ColorModel, AnyColor, HsvaColor } from "../types";
import { equalColorObjects } from "../utils/compare";

export function useColorManipulation<T extends AnyColor>(props: {
  colorModel: ColorModel<T>;
  color: T;
  onChange?: (color: T) => void;
}): [Accessor<HsvaColor>, (color: Partial<HsvaColor>) => void] {
  // No matter which color model is used (HEX, RGB(A) or HSL(A)),
  // all internal calculations are based on HSVA model
  const [hsva, updateHsva] = createSignal<HsvaColor>(
    props.colorModel.toHsva(props.color)
  );

  // By using this ref we're able to prevent extra updates
  // and the effects recursion during the color conversion
  const cache = useRef({ color: props.color, hsva: hsva() });

  // Update local HSVA-value if `color` property value is changed,
  // but only if that's not the same color that we just sent to the parent
  createEffect(() => {
    if (!props.colorModel.equal(props.color, cache.current!.color)) {
      const newHsva = props.colorModel.toHsva(props.color);
      cache.current = { hsva: newHsva, color: props.color };
      updateHsva(newHsva);
    }
  });

  // Trigger `onChange` callback only if an updated color is different from cached one;
  // save the new color to the ref to prevent unnecessary updates
  createEffect(() => {
    let newColor;
    if (
      !equalColorObjects(hsva(), cache.current!.hsva) &&
      !props.colorModel.equal(
        (newColor = props.colorModel.fromHsva(hsva())),
        cache.current!.color
      )
    ) {
      cache.current = { hsva: hsva(), color: newColor };
      props.onChange?.(newColor);
    }
  });

  // Merge the current HSVA color object with updated params.
  // For example, when a child component sends `h` or `s` only
  const handleChange = (params: Partial<HsvaColor>) => {
    updateHsva((current) => Object.assign({}, current, params));
  };

  return [hsva, handleChange];
}
