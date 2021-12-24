import { JSX } from "solid-js";
import { FolderTitleProps } from "../Folder";
declare type FilterProps = {
    setFilter: (value: string) => void;
    toggle: (flag?: boolean) => void;
    ref?: any;
};
export declare type TitleWithFilterProps = FilterProps & FolderTitleProps & {
    onDrag: (point: {
        x?: number | undefined;
        y?: number | undefined;
    }) => void;
    title: JSX.Element;
    drag: boolean;
    filterEnabled: boolean;
};
export declare function TitleWithFilter(props: TitleWithFilterProps): JSX.Element;
export {};
//# sourceMappingURL=Filter.d.ts.map