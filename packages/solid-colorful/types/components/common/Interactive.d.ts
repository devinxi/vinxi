import { PropsWithChildren } from "solid-js";
export interface Interaction {
    left: number;
    top: number;
}
interface Props {
    onMove: (interaction: Interaction) => void;
    onKey: (offset: Interaction) => void;
}
export declare const Interactive: (props: PropsWithChildren<Props>) => import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=Interactive.d.ts.map