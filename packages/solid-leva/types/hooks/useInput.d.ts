import { Accessor } from "solid-js";
import type { DataItem } from "../types";
export declare type Input = Omit<DataItem, "__refCount">;
/**
 * Return all input (value and settings) properties at a given path.
 *
 * @param path
 */
export declare function useInput(path: string): readonly [Accessor<Input | null>, {
    readonly set: (value: any) => void;
    readonly setSettings: (settings: any) => void;
    readonly disable: (flag: any) => void;
    readonly storeId: string;
    readonly emitOnEditStart: () => void;
    readonly emitOnEditEnd: () => void;
}];
//# sourceMappingURL=useInput.d.ts.map