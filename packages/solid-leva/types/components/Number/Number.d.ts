import type { NumberProps } from "./number-types";
import { JSX } from "solid-js";
export declare function Number(props: Omit<NumberProps, "setSettings" | "emitOnEditStart" | "emitOnEditEnd"> & {
    id?: string;
    label: string;
    innerLabelTrim?: number;
}): JSX.Element;
export declare function NumberComponent(): JSX.Element;
//# sourceMappingURL=Number.d.ts.map