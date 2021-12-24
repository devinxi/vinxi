import { css } from "../../styles";

export const button = css("button", {
  display: "block",
  $reset: "",
  fontWeight: "$button",
  color: "$highlight3",
  height: "$rowHeight",
  borderStyle: "none",
  borderRadius: "$sm",
  backgroundColor: "$accent2",
  cursor: "pointer",
  $hover: "$accent3",
  $active: "$accent3 $accent1",
  $focus: "",
});
