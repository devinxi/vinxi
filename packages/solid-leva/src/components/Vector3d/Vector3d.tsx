import { Vector } from "../Vector";
import { Label, Row } from "../UI";
import { useInputContext } from "../../context";
import { JSX, Show } from "solid-js";
import type { Vector3dProps } from "./vector3d-types";

export function Vector3dComponent() {
  const props = useInputContext<Vector3dProps>();
  return (
    <Row input>
      <Label>{props.label}</Label>
      <Vector value={props.displayValue} settings={props.settings} onUpdate={props.onUpdate} />
    </Row>
  );
}
