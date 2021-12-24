import { ColorModel, ColorPickerBaseProps, AnyColor } from "../../types";
interface Props<T extends AnyColor> extends Partial<ColorPickerBaseProps<T>> {
    colorModel: ColorModel<T>;
}
export declare const ColorPicker: <T extends AnyColor>(props: Props<T>) => import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=ColorPicker.d.ts.map