import { css } from "../../styles";

export const selectContainer = css({
  $flexCenter: "",
  position: "relative",
  "> svg": {
    pointerEvents: "none",
    position: "absolute",
    right: "$md",
  },
});

export const nativeSelect = css({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  opacity: 0,
});

export const presentationalSelect = css("div", {
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "$rowHeight",
  backgroundColor: "$elevation3",
  borderRadius: "$sm",
  padding: "0 $sm",
  cursor: "pointer",
  [`${nativeSelect}:focus + &`]: {
    $focusStyle: "",
  },
  [`${nativeSelect}:hover + &`]: {
    $hoverStyle: "",
  },
});
