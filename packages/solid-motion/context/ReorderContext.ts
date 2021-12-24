import { createContext } from "solid-js";
import { ReorderContextProps } from "../components/Reorder/types";

export const ReorderContext = createContext<ReorderContextProps<any> | null>(
  null
);
