import { JSX } from "solid-js";
declare type ValueInputProps = {
    id?: string;
    value: string;
    innerLabel?: false | JSX.Element;
    type?: "number" | undefined;
    onUpdate: (value: any) => void;
    onChange: (value: any) => void;
    onKeyDown?: (event: Event) => void;
};
export declare function ValueInput(props: ValueInputProps): JSX.Element;
export declare function NumberInput(props: ValueInputProps): JSX.Element;
export {};
//# sourceMappingURL=ValueInput.d.ts.map