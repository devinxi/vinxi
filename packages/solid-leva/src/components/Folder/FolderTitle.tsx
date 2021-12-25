import { title } from "./styles";
import { Chevron } from "../UI";
import { JSX } from "solid-js";
export type FolderTitleProps = {
  name?: string;
  toggled: boolean;
  toggle: (flag?: boolean) => void;
};

export function FolderTitle(props: FolderTitleProps) {
  return (
    <div class={title()} onClick={() => props.toggle()}>
      <Chevron toggled={props.toggled} />
      <div>{props.name}</div>
    </div>
  );
}
