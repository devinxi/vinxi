import { css } from "src/leva/styles";
// TODO remove as any when this is corrected by stitches
const svg = css({
  fill: "currentColor",
  width: "1em",
  height: "1em",
  transition: "transform 350ms ease, fill 250ms ease",
}) as any;

export function Chevron(props: { toggled?: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 9 5"
      class={svg()}
      style={{
        transform: "rotate(" + (props.toggled ? "0deg" : "-90deg") + ")",
      }}
    >
      <path d="M3.8 4.4c.4.3 1 .3 1.4 0L8 1.7A1 1 0 007.4 0H1.6a1 1 0 00-.7 1.7l3 2.7z"></path>
    </svg>
  );
}
