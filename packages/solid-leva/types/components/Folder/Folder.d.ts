import type { Tree } from "../../types";
import { JSX } from "solid-js";
declare type TreeWrapperProps = {
    isRoot?: boolean;
    fill?: boolean;
    flat?: boolean;
    parent?: string;
    tree: Tree;
    toggled: boolean;
};
export declare const TreeWrapper: (props: TreeWrapperProps) => JSX.Element;
export {};
//# sourceMappingURL=Folder.d.ts.map