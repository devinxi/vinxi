import {
  label,
  copyLabelContainer,
  optionalToggle,
  toolTipContent,
  tooltipArrow,
} from "./StyledUI";
import { useInputContext, usePanelSettingsContext } from "../../context";
import { LevaErrors, warn } from "../../utils";
import { createSignal } from "solid-js";

function OptionalToggle() {
  const { id, disable, disabled } = useInputContext();
  return (
    <>
      <input
        class={optionalToggle()}
        id={id + "__disable"}
        type="checkbox"
        checked={!disabled}
        onChange={() => disable(!disabled)}
      />
      <label htmlFor={id + "__disable"}></label>
    </>
  );
}

function RawLabel(props: any) {
  const { id, optional, hint } = useInputContext();
  const htmlFor = props.htmlFor || (id ? { htmlFor: id } : null);

  // If there's no tooltip, and if the label is of type string, then add a title.
  // const title =
  //   !hint && typeof props.children === "string"
  //     ? { title: props.children }
  //     : null;

  return (
    <>
      {optional && <OptionalToggle />}
      {hint !== undefined ? (
        <label {...props} />
      ) : (
        // <RadixTooltip.Root>
        //   <RadixTooltip.Trigger as={label} {...htmlFor} {...props} />
        //   <RadixTooltip.Content side="top" sideOffset={2}>
        //     <toolTipContent>
        //       {hint}
        //       {/* <tooltipArrow /> */}
        //     </toolTipContent>
        //   </RadixTooltip.Content>
        // </RadixTooltip.Root>
        <label {...props} />
      )}
    </>
  );
}

export function Label(props) {
  const { value, label, key } = useInputContext();
  const { hideCopyButton } = usePanelSettingsContext();

  const copyEnabled = !hideCopyButton && key !== undefined;

  const [copied, setCopied] = createSignal(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(
        JSON.stringify({ [key]: value ?? "" })
      );
      setCopied(true);
    } catch {
      warn(LevaErrors.CLIPBOARD_ERROR, { [key]: value });
    }
  };

  return (
    <div
      class={copyLabelContainer({
        align: props.align,
      })}
      onPointerLeave={() => setCopied(false)}
    >
      <RawLabel {...props} />
      {copyEnabled && (
        <div
          title={`Click to copy ${
            typeof label === "string" ? label : key
          } value`}
        >
          {!copied() ? (
            <svg
              onClick={handleClick}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
              <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path
                fill-rule="evenodd"
                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
          )}
        </div>
      )}
    </div>
  );
}
