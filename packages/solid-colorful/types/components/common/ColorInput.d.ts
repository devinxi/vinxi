import { ColorInputBaseProps } from "../../types";
interface Props extends ColorInputBaseProps {
    /** Blocks typing invalid characters and limits string length */
    escape: (value: string) => string;
    /** Checks that value is valid color string */
    validate: (value: string) => boolean;
    /** Processes value before displaying it in the input */
    format?: (value: string) => string;
    /** Processes value before sending it in `onChange` */
    process?: (value: string) => string;
}
export declare const ColorInput: (props: Props) => import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=ColorInput.d.ts.map