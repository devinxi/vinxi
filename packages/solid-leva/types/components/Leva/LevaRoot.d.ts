import { LevaCustomTheme } from "../../styles";
import { StoreType } from "../../types";
import { JSX } from "solid-js";
export declare type LevaRootProps = {
    /**
     * Theme with Stitches tokens
     */
    theme?: LevaCustomTheme;
    /**
     * The store to be used by the panel
     */
    store?: StoreType | null;
    /**
     * If true, won't display the panel
     */
    hidden?: boolean;
    /**
     * If true, the panel will fill its parent
     */
    fill?: boolean;
    /**
     * If true, the panel will have no border radius nor shadow
     */
    flat?: boolean;
    /**
     * If true, the panel will start collapsed.
     * If set to an object, the collapsed state is controlled via the property.
     */
    collapsed?: boolean | {
        collapsed: boolean;
        onChange: (collapsed: boolean) => void;
    };
    /**
     * If true, input labels will stand above the controls
     */
    oneLineLabels?: boolean;
    /**
     * If true, the title bar including filters and drag zone will be shown. If set to false, the title bar including filters will be hidden.
     * In case it is set to an object the title bar will be shown and the additional sub-options might be applied.
     */
    titleBar?: boolean | {
        /**
         * Overwrites the default title content (6 dots if drag is enabled) if set to a non undefined value.
         */
        title?: JSX.Element;
        /**
         * Toggle whether the leva panel can be dragged around via the title bar.
         */
        drag?: boolean;
        /**
         * Toggle whether filtering should be enabled or disabled.
         */
        filter?: boolean;
    };
    /**
     * If true, the copy button will be hidden
     */
    hideCopyButton?: boolean;
};
export declare function LevaRoot(props: LevaRootProps): JSX.Element;
//# sourceMappingURL=LevaRoot.d.ts.map