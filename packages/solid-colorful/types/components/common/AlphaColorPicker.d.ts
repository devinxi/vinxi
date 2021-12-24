import { ColorModel, ColorPickerBaseProps, AnyColor } from "../../types";
interface Props<T extends AnyColor> extends Partial<ColorPickerBaseProps<T>> {
    colorModel: ColorModel<T>;
}
export declare const AlphaColorPicker: <T extends AnyColor>({ className, colorModel, color, onChange, }: Props<T>) => import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=AlphaColorPicker.d.ts.map