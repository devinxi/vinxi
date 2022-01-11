import * as React from "solid-react-compat";
import { Chevron } from "./Chevron";
import { StyledTitle } from "./StyledFolder";

export type FolderTitleProps = {
  name?: string;
  toggled: boolean;
  toggle: (flag?: boolean) => void;
};

export function FolderTitle({ toggle, toggled, name }: FolderTitleProps) {
  return (
    <StyledTitle onClick={() => toggle()}>
      <Chevron toggled={toggled} />
      <div>{name}</div>
    </StyledTitle>
  );
}
