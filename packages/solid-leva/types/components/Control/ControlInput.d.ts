import type { DataInput } from "../../types";
import { JSX } from "solid-js";
declare type ControlInputProps = Omit<DataInput, "__refCount" | "key"> & {
    valueKey: string;
    path: string;
    storeId: string;
    setValue: (value: any) => void;
    setSettings: (settings: any) => void;
    disable: (flag: boolean) => void;
    emitOnEditStart?: (...args: any) => void;
    emitOnEditEnd?: (...args: any) => void;
};
export declare function ControlInput(props: ControlInputProps): JSX.Element;
export {};
//# sourceMappingURL=ControlInput.d.ts.map