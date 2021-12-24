import { buildTree } from "./tree";
import { TreeWrapper } from "../Folder";

import { useDeepMemo, useTransform, useVisiblePaths } from "../../hooks";

import { root } from "./styles";
import { mergeTheme, LevaCustomTheme } from "../../styles";
import {
  ThemeContext,
  StoreContext,
  PanelSettingsContext,
} from "../../context";
import { TitleWithFilter } from "./Filter";
import { StoreType } from "../../types";
import { createEffect, createMemo, createSignal, Show } from "solid-js";
import { levaStore } from "src/leva/store";

export type LevaRootProps = {
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
  collapsed?:
    | boolean
    | {
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
  titleBar?:
    | boolean
    | {
        /**
         * Overwrites the default title content (6 dots if drag is enabled) if set to a non undefined value.
         */
        title?: React.ReactNode;
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

export function LevaRoot(props: LevaRootProps) {
  const themeContext = createMemo(() => mergeTheme(props.theme), []);
  // collapsible
  const [toggled, setToggle] = createSignal(true);

  // const computedToggled =
  //   typeof collapsed === "object" ? !collapsed.collapsed : toggled;
  // const computedSetToggle = useMemo(() => {
  //   if (typeof collapsed === "object") {
  //     return (value: React.SetStateAction<boolean>) => {
  //       if (typeof value === "function") {
  //         collapsed.onChange(!value(!collapsed.collapsed));
  //       } else {
  //         collapsed.onChange(!value);
  //       }
  //     };
  //   }
  //   return setToggle;
  // });

  return (
    <Show when={props.store}>
      <ThemeContext.Provider value={themeContext()}>
        <LevaCore
          store={props.store}
          toggled={toggled()}
          setToggle={setToggle}
          rootClass={themeContext().className}
          flat={false}
          fill={false}
        />
      </ThemeContext.Provider>
    </Show>
  );
}

type LevaCoreProps = Omit<LevaRootProps, "theme" | "hidden" | "collapsed"> & {
  store: StoreType;
  rootClass: string;
  toggled: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

// {
//   store,
//   rootClass,
//   fill = false,
//   flat = false,
//   oneLineLabels = false,
//   titleBar = {
//     title: undefined,
//     drag: true,
//     filter: true,
//   },
//   hideCopyButton = false,
//   toggled,
//   setToggle,
// }

const LevaCore = (props: LevaCoreProps) => {
  // const paths = useVisiblePaths(props.store);
  const [filter, setFilter] = createSignal("");
  const [tree, setTree] = createSignal(
    buildTree(props.store.getVisiblePaths(), filter())
  );

  createEffect(() => {
    setTree(buildTree(props.store.getVisiblePaths(), ""));
    props.store.useStore.subscribe(() => {
      setTree(buildTree(props.store.getVisiblePaths(), ""));
    });
  });

  // drag
  // const [rootRef, set] = useTransform<HTMLDivElement>();
  let rootRef;

  // this generally happens on first render because the store is initialized in createEffect.
  // const shouldShow = paths.length > 0;
  // const title =
  //   typeof props.titleBar === "object"
  //     ? props.titleBar.title || undefined
  //     : undefined;
  // const drag =
  //   typeof props.titleBar === "object" ? props.titleBar.drag ?? true : true;
  // const filterEnabled =
  //   typeof props.titleBar === "object" ? props.titleBar.filter ?? true : true;

  return (
    <PanelSettingsContext.Provider value={{ hideCopyButton: false }}>
      <div
        ref={rootRef}
        class={`${root({
          fill: props.fill,
          flat: props.flat,
          oneLineLabels: props.oneLineLabels,
          hideTitleBar: !props.titleBar,
        })} ${props.rootClass}`}
        // style={{ display: "block" }}
      >
        {/* {titleBar && (
          <TitleWithFilter
            onDrag={set}
            setFilter={setFilter}
            toggle={(flag?: boolean) => setToggle((t) => flag ?? !t)}
            toggled={toggled}
            title={title}
            drag={drag}
            filterEnabled={filterEnabled}
          />
        )} */}
        {/* {shouldShow && ( */}
        <StoreContext.Provider value={levaStore}>
          <TreeWrapper
            isRoot={true}
            fill={props.fill}
            flat={props.flat}
            tree={tree()}
            toggled={true}
          />
        </StoreContext.Provider>
        {/* )} */}
      </div>
    </PanelSettingsContext.Provider>
  );
};
