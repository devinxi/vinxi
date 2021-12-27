import * as React, { useRef, useState, createEffect } from "solid-js";
import { RgbaColorPicker, RgbaColor, RgbColorPicker } from "react-colorful";
import { colord } from "colord";
import { PickerWrapper, ColorPreview, PickerContainer } from "./StyledColor";
import { Components, useInputContext } from "@/leva/plugin";
import type { ColorProps, Color as ColorType } from "./spline-types";

const { Label, Row, Overlay, Portal, String } = Components;
function convertToRgb(value: ColorType, format: string) {
  return format !== "rgb" ? colord(value).toRgb() : (value as RgbaColor);
}

import { useLayoutEffect, useCallback } from "solid-js";

export function usePopin(margin = 3) {
  const popinRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [shown, setShow] = useState(false);

  const show = useCallback(() => setShow(true), []);
  const hide = useCallback(() => setShow(false), []);

  useLayoutEffect(() => {
    if (shown) {
      const { bottom, top, left } = popinRef.current!.getBoundingClientRect();
      const { height } = wrapperRef.current!.getBoundingClientRect();
      const direction =
        bottom + height > window.innerHeight - 40 ? "up" : "down";

      wrapperRef.current!.style.position = "fixed";
      wrapperRef.current!.style.zIndex = "10000";
      wrapperRef.current!.style.left = left + "px";

      if (direction === "down")
        wrapperRef.current!.style.top = bottom + margin + "px";
      else
        wrapperRef.current!.style.bottom =
          window.innerHeight - top + margin + "px";
    }
  }, [margin, shown]);

  return { popinRef, wrapperRef, shown, show, hide };
}

export function Color({
  value,
  displayValue,
  settings,
  onUpdate,
}: Pick<
  ColorProps,
  "value" | "displayValue" | "settings" | "onChange" | "onUpdate"
>) {
  const { emitOnEditStart, emitOnEditEnd } = useInputContext();

  const { format, hasAlpha } = settings;

  const { popinRef, wrapperRef, shown, show, hide } = usePopin();

  // timeout before colorpicker close
  const timer = useRef(0);

  /**
   * @note we're using initialRgb instead of binding
   * const rgb = format !== 'rgb' ? tinycolor(value).toRgb() : (value as RgbaColor)
   * to the ColorPicker as we were doing before
   */
  const [initialRgb, setInitialRgb] = useState(() =>
    convertToRgb(value, format)
  );

  const ColorPicker = hasAlpha ? RgbaColorPicker : RgbColorPicker;

  const showPicker = () => {
    setInitialRgb(convertToRgb(value, format));
    show();
    emitOnEditStart();
  };

  const hidePicker = () => {
    hide();
    emitOnEditEnd();
    window.clearTimeout(timer.current);
  };

  const hideAfterDelay = () => {
    timer.current = window.setTimeout(hidePicker, 500);
  };

  createEffect(() => {
    return () => window.clearTimeout(timer.current);
  }, []);

  return (
    <>
      <ColorPreview
        ref={popinRef}
        active={shown}
        onClick={() => showPicker()}
        style={{ color: displayValue }}
      />
      {shown && (
        <Portal>
          <Overlay onPointerUp={hidePicker} />
          <PickerWrapper
            ref={wrapperRef}
            onMouseEnter={() => window.clearTimeout(timer.current)}
            onMouseLeave={(e) => e.buttons === 0 && hideAfterDelay()}
          >
            <ColorPicker color={initialRgb} onChange={onUpdate} />
          </PickerWrapper>
        </Portal>
      )}
    </>
  );
}
