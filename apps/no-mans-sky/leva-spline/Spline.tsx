import { useControls } from "@/leva";
import {
  Components,
  useInputContext,
  useCanvas2d,
  debounce,
  createPlugin,
  useTh,
  colord,
  styled,
} from "@/leva/plugin";
import * as React from "solid-react-compat";
import * as props from "./spline-plugin";
import { Color } from "./Color";
import { PickerContainer } from "./StyledColor";
import {
  GradientInternalPoint,
  GradientPoint,
  GradientProps,
} from "./spline-types";
import { RangeSlider } from "./RangeSlider";
import { RangeGrid } from "./StyledNumber";
import { DragHandleDots2Icon, PlusIcon } from "@radix-ui/react-icons";
import { Folder } from "./Folder";

const { Label, Row, String, Number } = Components;

export function ColorComponent() {
  const { value, label, onChange, onUpdate, settings } =
    useInputContext<GradientProps>();

  const accentColor = useTh("colors", "accent1");

  const drawSpline = React.useCallback(
    (_canvas: HTMLCanvasElement, _ctx: CanvasRenderingContext2D) => {
      // fixes unmount potential bug
      if (!_canvas) return;
      const { width, height } = _canvas;

      _ctx.clearRect(0, 0, width, height);
      let gradient = _ctx.createLinearGradient(5, 0, width - 10, 0);
      value.forEach(([d, i]) => {
        gradient.addColorStop(i, d);
      });
      _ctx.fillStyle = gradient;
      _ctx.fillRect(5, 0, width - 10, height - 20);
      _ctx.fillStyle = accentColor;
      value.forEach(([d, i]) => {
        _ctx.fillRect((width - 10) * i, height - 12, 10, 10);
      });
    },
    [value, accentColor]
  );

  const [canvas, ctx] = useCanvas2d(drawSpline);
  const updateSpline = React.useMemo(
    () => debounce(() => drawSpline(canvas.current!, ctx.current!), 250),
    [canvas, ctx, drawSpline]
  );

  React.createEffect(() => updateSpline(), [updateSpline]);

  function setColorStopWeight(index: any, v: any) {
    onUpdate([
      ...value.map((a, i) =>
        i === index ? [a[0], Math.min(Math.max(v, 0), 1.0)] : [...a]
      ),
    ]);
  }

  function setColorStop(index: any, v: any) {
    onUpdate([
      ...value.map((a, i) =>
        i === index
          ? [
              props.convert(colord(v), {
                hasAlpha: false,
                isString: true,
                format: "hex",
              }),
              a[1],
            ]
          : [...a]
      ),
    ]);
  }

  return (
    <Folder name="spline" collapsed={true}>
      {(toggled) => (
        <Row dir="column" className="space-y-2">
          <canvas className="h-full w-full" ref={canvas} />
          {toggled
            ? value.map(([color, weight], index) => (
                <div
                  className="flex flex-row w-full items-center space-x-2"
                  key={index}
                >
                  <div className="flex flex-row">
                    <DragHandleDots2Icon className="w-4" />
                    {/* <Label>{label}</Label> */}
                  </div>
                  <div className="flex flex-col space-y-1 w-full">
                    <PickerContainer>
                      <Color
                        value={color}
                        displayValue={color}
                        onChange={(newColor) => setColorStop(index, newColor)}
                        onUpdate={(newColor) => setColorStop(index, newColor)}
                        settings={{
                          format: "hex",
                          hasAlpha: false,
                          isString: true,
                        }}
                      />
                      <String
                        displayValue={color}
                        onChange={(newColor) => setColorStop(index, newColor)}
                        onUpdate={(newColor) => setColorStop(index, newColor)}
                      />
                    </PickerContainer>
                    <RangeGrid hasRange={true}>
                      <RangeSlider
                        onDrag={(v) => setColorStopWeight(index, v)}
                        pad={0.01}
                        initialValue={0.0}
                        min={0.0}
                        max={1}
                        step={0.075}
                        value={weight}
                      />
                      <Number
                        value={weight}
                        displayValue={weight}
                        settings={{
                          min: 0.0,
                          max: 1.0,
                          step: 0.075,
                          initialValue: 0.0,
                          pad: 0.01,
                        }}
                        label="w"
                        innerLabelTrim={1}
                        onChange={(v) => setColorStopWeight(index, v)}
                        onUpdate={(v) => setColorStopWeight(index, v)}
                      />
                    </RangeGrid>
                  </div>
                </div>
              ))
            : null}
          <StyledButton
            onClick={() => {
              onUpdate([...value, ["#000000", 1.0]]);
            }}
            className="space-x-2"
          >
            <PlusIcon />
            Add Stop
          </StyledButton>
        </Row>
      )}
    </Folder>
  );
}

export const StyledButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  $reset: "",
  fontWeight: "$button",
  color: "$highlight3",
  rowGap: "$sm",
  height: "$rowHeight",
  borderStyle: "none",
  borderRadius: "$sm",
  backgroundColor: "$accent2",
  cursor: "pointer",
  $hover: "$accent3",
  $active: "$accent3 $accent1",
  $focus: "",
});

export const spline = createPlugin({
  component: ColorComponent,
  ...props,
});
