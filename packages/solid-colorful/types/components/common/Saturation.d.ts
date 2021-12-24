import { HsvaColor } from "../../types";
interface Props {
    hsva: HsvaColor;
    onChange: (newColor: {
        s: number;
        v: number;
    }) => void;
}
export declare const Saturation: (props: Props) => import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=Saturation.d.ts.map