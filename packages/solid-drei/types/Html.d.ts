import { JSX, PropsWithChildren } from "solid-js";
import { Object3D, Camera } from "three";
declare function defaultCalculatePosition(el: Object3D, camera: Camera, size: {
    width: number;
    height: number;
}): number[];
export declare type CalculatePosition = typeof defaultCalculatePosition;
declare type PointerEventsProperties = "auto" | "none" | "visiblePainted" | "visibleFill" | "visibleStroke" | "visible" | "painted" | "fill" | "stroke" | "all" | "inherit";
export interface HtmlProps {
    prepend?: boolean;
    center?: boolean;
    fullscreen?: boolean;
    eps?: number;
    distanceFactor?: number;
    sprite?: boolean;
    transform?: boolean;
    zIndexRange?: Array<number>;
    occlude?: {
        current: Object3D;
    }[] | boolean;
    onOcclude?: (visible: boolean) => null;
    calculatePosition?: CalculatePosition;
    as?: string;
    wrapperClass?: string;
    pointerEvents?: PointerEventsProperties;
    ref?: (el: HTMLElement) => void;
    style?: any;
    class?: string;
}
export declare const Html: (props: PropsWithChildren<HtmlProps>) => JSX.Element;
export {};
//# sourceMappingURL=Html.d.ts.map