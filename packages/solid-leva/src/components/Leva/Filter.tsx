import { DragGesture } from "@use-gesture/vanilla";
import { createEffect, createMemo, createSignal, JSX, onCleanup } from "solid-js";
import { debounce } from "../../utils";
import { FolderTitleProps } from "../Folder";
import { Chevron } from "../UI";
import { filterInput, titleWithFilter, titleContainer, icon, filterWrapper } from "./filterStyles";

type FilterProps = {
  setFilter: (value: string) => void;
  toggle: (flag?: boolean) => void;
  ref?: any;
};

const FilterInput = (props: FilterProps) => {
  const [value, set] = createSignal("");
  const debouncedOnChange = createMemo<FilterProps["setFilter"]>(() =>
    debounce(props.setFilter, 50)
  );
  const clear = () => {
    props.setFilter("");
    set("");
  };

  const _onChange = e => {
    const v = e.currentTarget.value;
    props.toggle(true);
    set(v);
  };

  createEffect(() => {
    debouncedOnChange()(value());
  });

  return (
    <>
      <input
        class={filterInput()}
        ref={props.ref}
        value={value()}
        placeholder="[Open filter with CMD+SHIFT+L]"
        onPointerDown={e => e.stopPropagation()}
        onInput={_onChange}
      />
      <div
        class={icon()}
        onClick={() => clear()}
        style={{ visibility: value() ? "visible" : "hidden" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="14"
          width="14"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </>
  );
};

export type TitleWithFilterProps = FilterProps &
  FolderTitleProps & {
    onDrag: (point: { x?: number | undefined; y?: number | undefined }) => void;
    title: JSX.Element;
    drag: boolean;
    filterEnabled: boolean;
  };

export function TitleWithFilter(props: TitleWithFilterProps) {
  const [filterShown, setShowFilter] = createSignal(false);
  let inputRef: HTMLInputElement | undefined;

  createEffect(() => {
    if (filterShown()) inputRef?.focus();
    else inputRef?.blur();
  });

  let dragRef;

  createEffect(() => {
    new DragGesture(dragRef, ({ offset: [x, y] }) => props.onDrag({ x, y }), {
      filterTaps: true
    });
  });

  createEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if (event.key === "L" && event.shiftKey && event.metaKey) {
        setShowFilter(f => !f);
      }
    };
    window.addEventListener("keydown", handleShortcut);
    onCleanup(() => window.removeEventListener("keydown", handleShortcut));
  }, []);

  return (
    <>
      <div
        class={titleWithFilter({
          mode: props.drag ? "drag" : undefined
        })}
      >
        <div
          class={icon({
            active: !props.toggle
          })}
          onClick={() => props.toggle()}
        >
          <Chevron toggled={props.toggled} width={12} height={8} />
        </div>
        <div
          class={titleContainer({
            filterEnabled: props.filterEnabled
          })}
          ref={dragRef}
          // {...(drag ? bind() : {})}
          // drag={drag}
        >
          {props.title === undefined && props.drag ? (
            <svg width="20" height="10" viewBox="0 0 28 14" xmlns="http://www.w3.org/2000/svg">
              <circle cx="2" cy="2" r="2" />
              <circle cx="14" cy="2" r="2" />
              <circle cx="26" cy="2" r="2" />
              <circle cx="2" cy="12" r="2" />
              <circle cx="14" cy="12" r="2" />
              <circle cx="26" cy="12" r="2" />
            </svg>
          ) : (
            props.title
          )}
        </div>
        {props.filterEnabled && (
          <div
            class={icon({
              active: filterShown()
            })}
            onClick={() => setShowFilter(f => !f)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 20 20">
              <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>
      <div
        class={filterWrapper({
          toggled: filterShown()
        })}
      >
        <FilterInput ref={inputRef} setFilter={props.setFilter} toggle={props.toggle} />
      </div>
    </>
  );
}
