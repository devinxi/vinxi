import {
  RgbaColorPicker,
  RgbaColor,
  RgbColorPicker,
} from "src/solid-colorful/src";
import { colord } from "colord";
import { pickerWrapper, colorPreview, pickerContainer } from "./StyledColor";
import { ValueInput } from "../ValueInput";
import { Label, Row } from "../UI";
import { useInputContext } from "../../context";
import { usePopin } from "../../hooks";
import type { ColorProps, Color as ColorType } from "./color-types";
import { createSignal, onCleanup, Show } from "solid-js";
import { Dynamic, Portal } from "solid-js/web";
import { overlay } from "../UI/StyledUI";

function convertToRgb(value: ColorType, format: string) {
  return format !== "rgb" ? colord(value).toRgb() : (value as RgbaColor);
}

export function Color(
  props: Pick<
    ColorProps,
    "value" | "displayValue" | "settings" | "onChange" | "onUpdate"
  >
) {
  const { emitOnEditStart, emitOnEditEnd } = useInputContext();

  const { popinRef, wrapperRef, shown, show, hide } = usePopin();

  // timeout before colorpicker close
  let timer = 0;

  /**
   * @note we're using initialRgb instead of binding
   * const rgb = format !== 'rgb' ? tinycolor(value).toRgb() : (value as RgbaColor)
   * to the ColorPicker as we were doing before
   */
  const [initialRgb, setInitialRgb] = createSignal(
    convertToRgb(props.value, props.settings.format)
  );

  // const ColorPicker = hasAlpha ? RgbaColorPicker : RgbColorPicker;

  const showPicker = () => {
    setInitialRgb(convertToRgb(props.value, props.settings.format));
    show();
    // emitOnEditStart();
  };

  const hidePicker = () => {
    hide();
    // emitOnEditEnd();
    window.clearTimeout(timer);
  };

  const hideAfterDelay = () => {
    timer = window.setTimeout(hidePicker, 500);
  };

  onCleanup(() => window.clearTimeout(timer));

  return (
    <>
      <div
        class={colorPreview({
          active: shown(),
        })}
        ref={(el) => (popinRef.current = el)}
        onClick={() => showPicker()}
        style={{ color: props.displayValue }}
      />
      <Show when={shown()}>
        <Portal>
          <>
            <div
              class={`${pickerWrapper()}`}
              ref={(el) => (wrapperRef.current = el)}
              onMouseEnter={() => window.clearTimeout(timer)}
              onMouseLeave={(e) => e.buttons === 0 && hideAfterDelay()}
            >
              <Dynamic
                component={
                  props.settings.hasAlpha ? RgbaColorPicker : RgbColorPicker
                }
                color={initialRgb()}
                onChange={props.onUpdate}
              />
            </div>
            <div class={overlay()} onPointerUp={hidePicker} />
          </>
        </Portal>
      </Show>
    </>
  );
}

export function ColorComponent() {
  const { value, displayValue, label, onChange, onUpdate, settings } =
    useInputContext<ColorProps>();

  return (
    <Row input>
      <Label>{label}</Label>
      <div class={pickerContainer()}>
        <Color
          value={value}
          displayValue={displayValue}
          onChange={onChange}
          onUpdate={onUpdate}
          settings={settings}
        />
        <ValueInput
          value={displayValue}
          onChange={onChange}
          onUpdate={onUpdate}
        />
      </div>
    </Row>
  );
}
