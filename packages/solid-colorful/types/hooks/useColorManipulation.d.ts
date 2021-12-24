import { Accessor } from "solid-js";
import { ColorModel, AnyColor, HsvaColor } from "../types";
export declare function useColorManipulation<T extends AnyColor>(props: {
    colorModel: ColorModel<T>;
    color: T;
    onChange?: (color: T) => void;
}): [Accessor<HsvaColor>, (color: Partial<HsvaColor>) => void];
//# sourceMappingURL=useColorManipulation.d.ts.map