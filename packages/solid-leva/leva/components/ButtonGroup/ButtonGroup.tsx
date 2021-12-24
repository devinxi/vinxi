import { Row, Label } from "../UI";
import { buttonGroup } from "./StyledButtonGroup";
import { buttonGroupButton } from "./StyledButtonGroupButton";
import { ButtonGroupInputOpts, ButtonGroupOpts } from "../../types";
import { JSX } from "solid-js";

export type ButtonGroupInternalOpts = {
  label: null | JSX.Element | string;
  opts: ButtonGroupInputOpts;
};

const getOpts = ({ label: _label, opts: _opts }: ButtonGroupInternalOpts) => {
  let label =
    typeof _label === "string"
      ? _label.trim() === ""
        ? null
        : _label
      : _label;
  let opts = _opts;
  if (typeof _opts.opts === "object") {
    if (opts.label !== undefined) {
      label = _opts.label as any;
    }
    opts = _opts.opts;
  }

  return { label, opts: opts as ButtonGroupOpts };
};

export function ButtonGroup(props: ButtonGroupInternalOpts) {
  const { label, opts } = getOpts(props);
  return (
    <Row input={!!label}>
      {label && <Label>{label}</Label>}
      <div class={buttonGroup()}>
        {Object.entries(opts).map(([label, onClick]) => (
          <button class={buttonGroupButton()} onClick={() => onClick()}>
            {label}
          </button>
        ))}
      </div>
    </Row>
  );
}
