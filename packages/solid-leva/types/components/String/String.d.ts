import { ValueInput } from "../ValueInput";
import type { StringProps } from "./string-types";
import { ComponentProps, JSX } from "solid-js";
declare type BaseStringProps = Pick<StringProps, "displayValue" | "onUpdate" | "onChange"> & Omit<ComponentProps<typeof ValueInput>, "value">;
export declare function String(props: BaseStringProps): JSX.Element;
export declare function StringComponent(): JSX.Element;
export {};
//# sourceMappingURL=String.d.ts.map