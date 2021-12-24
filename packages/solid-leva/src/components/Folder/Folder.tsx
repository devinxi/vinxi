import { FolderTitle } from "./FolderTitle";
import { folder, wrapper, content } from "./styles";
import { isInput } from "../Leva/tree";
import { join } from "../../utils";
import { Control } from "../Control";
import { useToggle } from "../../hooks";
import { useStoreContext } from "../../context";
import type { Tree } from "../../types";
import { createEffect, createSignal, For, Show } from "solid-js";
import { useTh } from "src/styles";

type FolderProps = { name: string; path?: string; tree: Tree };

const Folder = ({ name, path, tree }: FolderProps) => {
  const store = useStoreContext();
  const newPath = join(path, name);
  const { collapsed, color } = store.getFolderSettings(newPath);
  const [toggled, setToggle] = createSignal(!collapsed);

  let folderRef: HTMLDivElement;

  const widgetColor = useTh("colors", "folderWidgetColor");
  const textColor = useTh("colors", "folderTextColor");

  createEffect(() => {
    folderRef!.style.setProperty(
      "--leva-colors-folderWidgetColor",
      color || widgetColor
    );
    folderRef!.style.setProperty(
      "--leva-colors-folderTextColor",
      color || textColor
    );
  });

  return (
    <div
      class={folder({
        isRoot: false,
      })}
      ref={folderRef}
    >
      <FolderTitle
        name={name!}
        toggled={toggled()}
        toggle={() => setToggle((t) => !t)}
      />
      <TreeWrapper parent={newPath} tree={tree} toggled={toggled()} />
    </div>
  );
};

type TreeWrapperProps = {
  isRoot?: boolean;
  fill?: boolean;
  flat?: boolean;
  parent?: string;
  tree: Tree;
  toggled: boolean;
};

export const TreeWrapper = (props: TreeWrapperProps) => {
  const { wrapperRef, contentRef } = useToggle(() => props.toggled);
  return (
    <div
      class={wrapper({
        isRoot: props.isRoot,
        fill: props.fill,
        flat: props.flat,
      })}
      style={
        !props.toggled
          ? { overflow: "hidden", height: 0 }
          : {
              overflow: "visible",
              height: "auto",
            }
      }
      ref={(el) => (wrapperRef.current = el)}
    >
      <div
        class={content({
          isRoot: props.isRoot,
          toggled: props.toggled,
        })}
        ref={(el) => (contentRef.current = el)}
      >
        <For each={Object.keys(props.tree)}>
          {(key) => (
            <Show
              when={isInput(props.tree[key])}
              fallback={
                <Folder
                  name={key}
                  path={props.parent}
                  tree={props.tree[key] as Tree}
                />
              }
            >
              <Control
                key={props.tree[key].path}
                valueKey={props.tree[key].valueKey}
                path={props.tree[key].path}
              />
            </Show>
          )}
        </For>
      </div>
    </div>
  );
};
