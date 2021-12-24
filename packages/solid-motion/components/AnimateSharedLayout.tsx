import * as React from "solid-react-compat";
import { useConstant } from "../utils/use-constant";
import { LayoutGroup } from "./LayoutGroup";

let id = 0;
export const AnimateSharedLayout: React.FunctionComponent = ({ children }) => (
  <LayoutGroup id={useConstant(() => `asl-${id++}`)}>{children}</LayoutGroup>
);
