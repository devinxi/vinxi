import { Accessor } from "solid-js";
declare type Props<V, Settings> = {
    type: string;
    value: V;
    settings?: Settings;
    setValue: (v: V) => void;
};
export declare function useInputSetters<V, Settings extends object>(props: Props<V, Settings>): {
    displayValue: Accessor<any>;
    onChange: <U extends any>(value?: (U extends Function ? never : U) | ((prev?: any) => U) | undefined) => U;
    onUpdate: (updatedValue: any) => void;
};
export {};
//# sourceMappingURL=useInputSetters.d.ts.map