import { Accessor } from "solid-js";
export declare function usePopin(margin?: number): {
    popinRef: {
        current: HTMLElement | null;
    };
    wrapperRef: {
        current: HTMLElement | null;
    };
    shown: Accessor<boolean>;
    show: () => true;
    hide: () => false;
};
//# sourceMappingURL=usePopin.d.ts.map