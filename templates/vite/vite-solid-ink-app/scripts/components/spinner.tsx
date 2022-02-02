import { createEffect, mergeProps, onCleanup, Text } from "solid-ink";
import * as spinners from "cli-spinners";
import type { SpinnerName } from "cli-spinners";
import { createSignal } from "solid-ink";

interface Props {
  /**
   * Type of a spinner.
   * See [cli-spinners](https://github.com/sindresorhus/cli-spinners) for available spinners.
   *
   * @default dots
   */
  type: SpinnerName;
}

/**
 * Spinner.
 */
const Spinner = (props: Partial<Props>) => {
  props = mergeProps({ type: "dots" }, props) as Props;
  const [frame, setFrame] = createSignal(0);

  let spinner = spinners[props.type!];
  const timer = setInterval(() => {
    setFrame(previousFrame => {
      console.log(frame());
      const isLastFrame = previousFrame === spinner.frames.length - 1;
      return isLastFrame ? 0 : previousFrame + 1;
    });
  }, 5);

  createEffect(() => console.log(frame()));

  onCleanup(() => clearInterval(timer));

  return <Text>{spinners[props.type!].frames[frame()]}</Text>;
};

export default Spinner;
