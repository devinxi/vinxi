import { Accessor } from "solid-js";
export declare function useToggle(toggled: Accessor<boolean>): {
    wrapperRef: {
        current: HTMLDivElement | null;
    } & ((el: HTMLDivElement | null) => void);
    contentRef: {
        current: HTMLDivElement | null;
    } & ((el: HTMLDivElement | null) => void);
};
//# sourceMappingURL=useToggle.d.ts.map