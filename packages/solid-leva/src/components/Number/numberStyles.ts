import { css } from "src/styles";

export const rangeGrid = css({
  variants: {
    hasRange: {
      true: {
        position: "relative",
        display: "grid",
        gridTemplateColumns: "auto $sizes$numberInputMinWidth",
        columnGap: "$colGap",
        alignItems: "center",
      },
    },
  },
});
