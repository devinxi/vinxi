import isEqual from "lodash.isequal";
import arrayRotate from "arr-rotate";
import {
  Box,
  useInput,
  Component,
  createSignal,
  JSX,
  Dynamic,
  createEffect,
  mergeProps,
  For
} from "solid-ink";
import Indicator from "./Indicator";
import type { Props as IndicatorProps } from "./Indicator";
import Item from "./Item";
import type { Props as ItemProps } from "./Item";

interface Props<V> {
  /**
   * props.items to display in a list. Each item must be an object and have `label` and `value` props, it may also optionally have a `key` prop.
   * If no `key` prop is provided, `value` will be used as the item key.
   */
  items: Array<Item<V>>;

  /**
   * Listen to user's input. Useful in case there are multiple input components at the same time and input must be "routed" to a specific component.
   *
   * @default true
   */
  isFocused?: boolean;

  /**
   * Index of initially-selected item in `items` array.
   *
   * @default 0
   */
  initialIndex?: number;

  /**
   * Number of props.items to display.
   */
  limit?: number;

  /**
   * Custom component to override the default indicator component.
   */
  indicatorComponent?: Component<IndicatorProps>;

  /**
   * Custom component to override the default item component.
   */
  itemComponent?: Component<ItemProps>;

  /**
   * Function to call when user selects an item. Item object is passed to that function as an argument.
   */
  onSelect?: (item: Item<V>) => void;

  /**
   * Function to call when user highlights an item. Item object is passed to that function as an argument.
   */
  onHighlight?: (item: Item<V>) => void;
}

export interface Item<V> {
  key?: string;
  label: string;
  value: V;
}

// eslint-disable-next-line react/function-component-definition
function SelectInput<V>(props: Props<V>): JSX.Element {
  props = mergeProps(
    {
      items: [],
      isFocused: true,
      initialIndex: 0,
      indicatorComponent: Indicator,
      itemComponent: Item
    },
    props
  ) as Props<V>;
  const [rotateIndex, setRotateIndex] = createSignal(0);
  const [selectedIndex, setSelectedIndex] = createSignal(
    props.initialIndex ?? 0
  );
  const hasLimit = () =>
    typeof props.limit === "number" && props.items!.length > props.limit;
  const limit = () =>
    hasLimit()
      ? Math.min(props.limit!, props.items!.length)
      : props.items!.length;

  let previousItems = props.items!;

  createEffect(() => {
    if (
      !isEqual(
        previousItems.map(item => item.value),
        props.items!.map(item => item.value)
      )
    ) {
      setRotateIndex(0);
      setSelectedIndex(0);
    }

    previousItems = props.items!;
  });

  useInput(
    (input, key) => {
      if (input === "k" || key.upArrow) {
        const lastIndex = (hasLimit() ? limit() : props.items.length) - 1;
        const atFirstIndex = selectedIndex() === 0;
        const nextIndex = hasLimit() ? selectedIndex() : lastIndex;
        const nextRotateIndex = atFirstIndex
          ? rotateIndex() + 1
          : rotateIndex();
        const nextSelectedIndex = atFirstIndex
          ? nextIndex
          : selectedIndex() - 1;

        setRotateIndex(nextRotateIndex);
        setSelectedIndex(nextSelectedIndex);

        const slicedItems = hasLimit()
          ? arrayRotate(props.items, nextRotateIndex).slice(0, limit)
          : props.items;

        if (typeof props.onHighlight === "function") {
          props.onHighlight(slicedItems[nextSelectedIndex]);
        }
      }

      if (input === "j" || key.downArrow) {
        const atLastIndex =
          selectedIndex() === (hasLimit() ? limit() : props.items.length) - 1;
        const nextIndex = hasLimit() ? selectedIndex() : 0;
        const nextRotateIndex = atLastIndex ? rotateIndex() - 1 : rotateIndex();
        const nextSelectedIndex = atLastIndex ? nextIndex : selectedIndex() + 1;

        setRotateIndex(nextRotateIndex);
        setSelectedIndex(nextSelectedIndex);

        const slicedItems = hasLimit()
          ? arrayRotate(props.items, nextRotateIndex).slice(0, limit)
          : props.items;

        if (typeof props.onHighlight === "function") {
          props.onHighlight(slicedItems[nextSelectedIndex]);
        }
      }

      if (key.return) {
        const slicedItems = hasLimit()
          ? arrayRotate(props.items, rotateIndex()).slice(0, limit)
          : props.items;

        if (typeof props.onSelect === "function") {
          props.onSelect(slicedItems[selectedIndex()]);
        }
      }
    },

    { isActive: props.isFocused }
  );

  const slicedItems = () =>
    hasLimit()
      ? arrayRotate(props.items, rotateIndex()).slice(0, limit)
      : props.items;

  return (
    <Box flexDirection="column">
      <For each={slicedItems()}>
        {(item, index) => {
          return (
            <Box>
              <Dynamic
                component={props.indicatorComponent}
                isSelected={index() === selectedIndex()}
              />
              <Dynamic
                component={props.itemComponent}
                {...item}
                isSelected={index() === selectedIndex()}
              />
            </Box>
          );
        }}
      </For>
    </Box>
  );
}

export default SelectInput;
