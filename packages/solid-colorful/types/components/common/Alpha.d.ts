import { HsvaColor } from "../../types";
interface Props {
    className?: string;
    hsva: HsvaColor;
    onChange: (newAlpha: {
        a: number;
    }) => void;
}
export declare const Alpha: (props: Props) => import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=Alpha.d.ts.map