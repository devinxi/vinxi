import { Object3D } from "three";
import { defineComponent } from "./ecs";

export const Object3DComponent = defineComponent<{ value: Object3D }>();


