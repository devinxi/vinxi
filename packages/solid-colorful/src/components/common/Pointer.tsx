import { createEffect } from "solid-js";
import { formatClassName } from "../../utils/format";

interface Props {
  className?: string;
  top?: number;
  left: number;
  color: string;
}

export const Pointer = (props: Props) => {
  createEffect(() => {
    console.log(props.color);
  });
  return (
    <div
      class={formatClassName(["react-colorful__pointer", props.className])}
      style={{
        top: `${props.top * 100}%`,
        left: `${props.left * 100}%`,
      }}
    >
      <div
        class="react-colorful__pointer-fill"
        style={{
          "background-color": props.color,
        }}
      />
    </div>
  );
};
