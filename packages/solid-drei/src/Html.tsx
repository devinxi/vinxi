import { CSSProperties } from "@stitches/core";
import {
  createEffect,
  createMemo,
  createRenderEffect,
  createSignal,
  JSX,
  PropsWithChildren,
  splitProps,
} from "solid-js";
import { render } from "solid-js/web";
import { mergeProps } from "solid-js/web";
import { useFrame, useThree } from "solid-three";
import { useRef } from "solid-react-compat";
import { Instance } from "src/solid-three/core/renderer";
import {
  Vector3,
  Group,
  Object3D,
  Matrix4,
  Camera,
  PerspectiveCamera,
  OrthographicCamera,
  Raycaster,
} from "three";

const v1 = new Vector3();
const v2 = new Vector3();
const v3 = new Vector3();

function defaultCalculatePosition(
  el: Object3D,
  camera: Camera,
  size: { width: number; height: number }
) {
  const objectPos = v1.setFromMatrixPosition(el.matrixWorld);
  objectPos.project(camera);
  const widthHalf = size.width / 2;
  const heightHalf = size.height / 2;
  return [
    objectPos.x * widthHalf + widthHalf,
    -(objectPos.y * heightHalf) + heightHalf,
  ];
}

export type CalculatePosition = typeof defaultCalculatePosition;

function isObjectBehindCamera(el: Object3D, camera: Camera) {
  const objectPos = v1.setFromMatrixPosition(el.matrixWorld);
  const cameraPos = v2.setFromMatrixPosition(camera.matrixWorld);
  const deltaCamObj = objectPos.sub(cameraPos);
  const camDir = camera.getWorldDirection(v3);
  return deltaCamObj.angleTo(camDir) > Math.PI / 2;
}

function isObjectVisible(
  el: Object3D,
  camera: Camera,
  raycaster: Raycaster,
  occlude: Object3D[]
) {
  const elPos = v1.setFromMatrixPosition(el.matrixWorld);
  const screenPos = elPos.clone();
  screenPos.project(camera);
  raycaster.setFromCamera(screenPos, camera);
  const intersects = raycaster.intersectObjects(occlude, true);
  if (intersects.length) {
    const intersectionDistance = intersects[0].distance;
    const pointDistance = elPos.distanceTo(raycaster.ray.origin);
    return pointDistance < intersectionDistance;
  }
  return true;
}

function objectScale(el: Object3D, camera: Camera) {
  if (camera instanceof OrthographicCamera) {
    return camera.zoom;
  } else if (camera instanceof PerspectiveCamera) {
    const objectPos = v1.setFromMatrixPosition(el.matrixWorld);
    const cameraPos = v2.setFromMatrixPosition(camera.matrixWorld);
    const vFOV = (camera.fov * Math.PI) / 180;
    const dist = objectPos.distanceTo(cameraPos);
    const scaleFOV = 2 * Math.tan(vFOV / 2) * dist;
    return 1 / scaleFOV;
  } else {
    return 1;
  }
}

function objectZIndex(
  el: Object3D,
  camera: Camera,
  zIndexRange: Array<number>
) {
  if (
    camera instanceof PerspectiveCamera ||
    camera instanceof OrthographicCamera
  ) {
    const objectPos = v1.setFromMatrixPosition(el.matrixWorld);
    const cameraPos = v2.setFromMatrixPosition(camera.matrixWorld);
    const dist = objectPos.distanceTo(cameraPos);
    const A = (zIndexRange[1] - zIndexRange[0]) / (camera.far - camera.near);
    const B = zIndexRange[1] - A * camera.far;
    return Math.round(A * dist + B);
  }
  return undefined;
}

const epsilon = (value: number) => (Math.abs(value) < 1e-10 ? 0 : value);

function getCSSMatrix(matrix: Matrix4, multipliers: number[], prepend = "") {
  let matrix3d = "matrix3d(";
  for (let i = 0; i !== 16; i++) {
    matrix3d +=
      epsilon(multipliers[i] * matrix.elements[i]) + (i !== 15 ? "," : ")");
  }
  return prepend + matrix3d;
}

const getCameraCSSMatrix = ((multipliers: number[]) => {
  return (matrix: Matrix4) => getCSSMatrix(matrix, multipliers);
})([1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1]);

const getObjectCSSMatrix = ((scaleMultipliers: (n: number) => number[]) => {
  return (matrix: Matrix4, factor: number) =>
    getCSSMatrix(matrix, scaleMultipliers(factor), "translate(-50%,-50%)");
})((f: number) => [
  1 / f,
  1 / f,
  1 / f,
  1,
  -1 / f,
  -1 / f,
  -1 / f,
  -1,
  1 / f,
  1 / f,
  1 / f,
  1,
  1,
  1,
  1,
  1,
]);

type PointerEventsProperties =
  | "auto"
  | "none"
  | "visiblePainted"
  | "visibleFill"
  | "visibleStroke"
  | "visible"
  | "painted"
  | "fill"
  | "stroke"
  | "all"
  | "inherit";

export interface HtmlProps {
  prepend?: boolean;
  center?: boolean;
  fullscreen?: boolean;
  eps?: number;
  // portal?: React.MutableRefObject<HTMLElement>;
  distanceFactor?: number;
  sprite?: boolean;
  transform?: boolean;
  zIndexRange?: Array<number>;
  occlude?: { current: Object3D }[] | boolean;
  onOcclude?: (visible: boolean) => null;
  calculatePosition?: CalculatePosition;
  as?: string;
  wrapperClass?: string;
  pointerEvents?: PointerEventsProperties;
}

export const Html = (props: PropsWithChildren<HtmlProps>) => {
  props = mergeProps(
    {
      eps: 0.001,
      transform: false,
      zIndexRange: [16777271, 0],
      calculatePosition: defaultCalculatePosition,
      as: "div",
      pointerEvents: "auto",
    },
    props
  );

  const groupProps = splitProps(props, [
    "eps",
    "distanceFactor",
    "sprite",
    "transform",
    "zIndexRange",
    "calculatePosition",
    "occlude",
    "onOcclude",
    "prepend",
    "center",
    "fullscreen",
    "as",
    "wrapperClass",
    "pointerEvents",
    "children",
    // "style",
  ]);

  const gl = useThree(({ gl }) => gl);
  const camera = useThree(({ camera }) => camera);
  const scene = useThree(({ scene }) => scene);
  const size = useThree(({ size }) => size);
  const raycaster = useThree(({ raycaster }) => raycaster);

  const [el] = createSignal(document.createElement(props.as));
  const group: Group = <group {...groupProps} />;
  const oldZoom = useRef(0);
  const oldPosition = useRef([0, 0]);
  const transformOuterRef = useRef<HTMLDivElement>(null!);
  const transformInnerRef = useRef<HTMLDivElement>(null!);
  // const target = portal?.current ?? gl().domElement.parentNode;

  createRenderEffect(() => {
    if (group && scene() && el()) {
      scene().updateMatrixWorld();
      if (props.transform) {
        el().style.cssText = `position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;`;
      } else {
        const vec = props.calculatePosition(group, camera(), size());
        el().style.cssText = `position:absolute;top:0;left:0;transform:translate3d(${vec[0]}px,${vec[1]}px,0);transform-origin:0 0;`;
      }
      let target = gl().domElement.parentNode;
      if (target) {
        if (props.prepend) target.prepend(el());
        else target.appendChild(el());
      }
      // return () => {
      //   if (target) target.removeChild(el());
      //   // ReactDOM.unmountComponentAtNode(el);
      // };
    }
  });

  createRenderEffect(() => {
    if (props.wrapperClass) el().className = props.wrapperClass;
  });

  const styles: CSSProperties = createMemo(() => {
    if (props.transform) {
      return {
        position: "absolute",
        top: 0,
        left: 0,
        width: size().width,
        height: size().height,
        "transform-style": "preserve-3d",
        "pointer-events": "none",
      };
    } else {
      return {
        position: "absolute",
        transform: props.center ? "translate3d(-50%,-50%,0)" : "none",
        ...(props.fullscreen && {
          top: -size().height / 2,
          left: -size().width / 2,
          width: size().width,
          height: size().height,
        }),
        // ...props.style,
      };
    }
  });

  const transformInnerStyles = () => ({
    position: "absolute",
    "pointer-events": props.pointerEvents,
  });

  createRenderEffect(() => {
    if (props.transform && el()) {
      render(
        () => (
          <div ref={(el) => (transformOuterRef.current = el)} style={styles}>
            <div
              ref={(el) => (transformInnerRef.current = el)}
              style={transformInnerStyles}
            >
              <div
                ref={props.ref}
                class={props.class ?? ""}
                style={props.style}
                children={props.children}
              />
            </div>
          </div>
        ),
        el()
      );
    } else if (el()) {
      render(
        () => (
          <div
            ref={props.ref}
            style={styles}
            class={props.class ?? ""}
            children={props.children}
          />
        ),
        el()
      );
    }
  });

  const visible = useRef(true);

  useFrame(() => {
    camera().updateMatrixWorld();
    group.updateWorldMatrix(true, false);
    const vec = props.transform
      ? oldPosition.current
      : props.calculatePosition(group, camera(), size());

    if (
      props.transform ||
      Math.abs(oldZoom.current - camera().zoom) > props.eps ||
      Math.abs(oldPosition.current[0] - vec[0]) > props.eps ||
      Math.abs(oldPosition.current[1] - vec[1]) > props.eps
    ) {
      const isBehindCamera = isObjectBehindCamera(group, camera());
      let raytraceTarget: null | undefined | boolean | Object3D[] = false;
      if (typeof props.occlude === "boolean") {
        if (props.occlude === true) {
          raytraceTarget = [scene()];
        }
      } else if (Array.isArray(props.occlude)) {
        raytraceTarget = props.occlude.map(
          (item) => item.current
        ) as Object3D[];
      }

      const previouslyVisible = visible.current;
      if (raytraceTarget) {
        const isvisible = isObjectVisible(
          group,
          camera(),
          raycaster(),
          raytraceTarget
        );
        visible.current = isvisible && !isBehindCamera;
      } else {
        visible.current = !isBehindCamera;
      }

      if (previouslyVisible !== visible.current) {
        if (props.onOcclude) props.onOcclude(!visible.current);
        else el().style.display = visible.current ? "block" : "none";
      }

      el().style.zIndex = `${objectZIndex(group, camera(), props.zIndexRange)}`;
      if (props.transform) {
        const [widthHalf, heightHalf] = [size().width / 2, size().height / 2];
        const fov = camera().projectionMatrix.elements[5] * heightHalf;
        const { isOrthographicCamera, top, left, bottom, right } =
          camera() as OrthographicCamera;
        const cameraMatrix = getCameraCSSMatrix(camera().matrixWorldInverse);
        const cameraTransform = isOrthographicCamera
          ? `scale(${fov})translate(${epsilon(-(right + left) / 2)}px,${epsilon(
              (top + bottom) / 2
            )}px)`
          : `translateZ(${fov}px)`;
        let matrix = group.matrixWorld;
        if (props.sprite) {
          matrix = camera()
            .matrixWorldInverse.clone()
            .transpose()
            .copyPosition(matrix)
            .scale(group.scale);
          matrix.elements[3] = matrix.elements[7] = matrix.elements[11] = 0;
          matrix.elements[15] = 1;
        }
        el().style.width = size().width + "px";
        el().style.height = size().height + "px";
        el().style.perspective = isOrthographicCamera ? "" : `${fov}px`;
        if (transformOuterRef.current && transformInnerRef.current) {
          transformOuterRef.current.style.transform = `${cameraTransform}${cameraMatrix}translate(${widthHalf}px,${heightHalf}px)`;
          transformInnerRef.current.style.transform = getObjectCSSMatrix(
            matrix,
            1 / ((props.distanceFactor || 10) / 400)
          );
        }
      } else {
        const scale =
          props.distanceFactor === undefined
            ? 1
            : objectScale(group, camera()) * props.distanceFactor;
        el().style.transform = `translate3d(${vec[0]}px,${vec[1]}px,0) scale(${scale})`;
      }
      oldPosition.current = vec;
      oldZoom.current = camera().zoom;
    }
  });

  return group as unknown as JSX.Element;
};
