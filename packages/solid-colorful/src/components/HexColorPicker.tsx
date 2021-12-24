import { ColorPicker } from "./common/ColorPicker";
import { ColorModel, ColorPickerBaseProps } from "../types";
import { equalHex } from "../utils/compare";
import { hexToHsva, hsvaToHex } from "../utils/convert";

const colorModel: ColorModel<string> = {
  defaultColor: "000",
  toHsva: hexToHsva,
  fromHsva: hsvaToHex,
  equal: equalHex,
};

export const HexColorPicker = (
  props: Partial<ColorPickerBaseProps<string>>
) => <ColorPicker {...props} colorModel={colorModel} />;
