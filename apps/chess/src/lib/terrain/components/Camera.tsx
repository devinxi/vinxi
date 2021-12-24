import { OrthographicCamera, PerspectiveCamera } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import * as React, { forwardRef } from "solid-js";
import { useControls, folder } from "@/lib/leva";
import { createStore } from "@/lib/zustand";
import * as THREE from "three";
import shallow from "zustand/shallow";
import mergeRefs from "react-merge-refs";

const ControlledOrthographicCamera = React.forwardRef(
  function ControlledOrthographicCamera(
    {
      name,
      position = [10, -10, 0],
      ...props
    }: { name: string } & React.ComponentProps<typeof OrthographicCamera>,
    ref
  ) {
    const { width, height } = useThree((s) => ({
      width: s.viewport.width,
      height: s.viewport.height,
    }));

    const controls = useControls("camera", {
      [name]: folder({
        orthographic: folder({
          position: {
            value: position as [number, number, number],
            step: 1,
          },
          left: { value: -width / 2, step: 1 },
          right: { value: width / 2, step: 1 },
          bottom: { value: -height / 2, step: 1 },
          top: { value: height / 2, step: 1 },
          far: { value: 1000, step: 1 },
          near: { value: -1, step: 0.01 },
          zoom: { value: 0.2, step: 0.01 },
        }),
      }),
    });

    return <OrthographicCamera ref={ref} {...props} {...controls} />;
  }
);

const ControlledPerspectiveCamera = React.forwardRef(
  function ControlledPerspectiveCamera(
    {
      position = [-10, 10, 0],
      fov = 60,
      far = 1000,
      near = 0.1,
      zoom = 1,
      name,
      ...props
    }: { name: string } & React.ComponentProps<typeof PerspectiveCamera>,
    ref
  ) {
    const controls = useControls("camera", {
      [name]: folder({
        perspective: folder({
          position: {
            value: position as [number, number, number],
            step: 1,
          },
          fov: {
            value: fov,
            step: 1,
          },
          far: { value: far },
          near: { value: near },
          zoom: { value: zoom, step: 0.1 },
        }),
      }),
    });

    return <PerspectiveCamera ref={ref} {...props} {...controls} />;
  }
);

interface PerspectiveCameraProps
  extends React.ComponentProps<typeof PerspectiveCamera> {
  camera: "perspective";
}

interface OrthographicCameraProps
  extends React.ComponentProps<typeof OrthographicCamera> {
  camera: "orthographic";
}

const useCameras = createStore(
  {
    cameras: {} as Record<string, THREE.Camera>,
    activeCamera: null as null | string,
  },
  (set, get, api) => {
    return {
      mountCamera: (name: string, camera: THREE.Camera, active: boolean) => {
        set({
          cameras: {
            ...get().cameras,
            [name]: camera,
          },
          activeCamera: active ? name : get().activeCamera,
        });
      },
      unmountCamera: (name: string) => {
        let newCameras = { ...get().cameras };
        delete newCameras[name];
        set({
          cameras: newCameras,
        });
      },
      setActiveCamera: (name: string | null) => {
        set({ activeCamera: name });
      },
    };
  }
);

export function CameraSystem({ children }: React.PropsWithChildren<{}>) {
  const [cameras, setActiveCamera, activeCamera] = useCameras(
    (s) => [s.cameras, s.setActiveCamera, s.activeCamera],
    shallow
  );
  const store = useControls(
    "camera",
    {
      activeCamera: {
        options: Object.keys(cameras),
        value: activeCamera,
        onChange: (name) => {
          if (name !== null) {
            setActiveCamera(name);
          }
        },
      },
    },
    {},
    [cameras]
  );

  return <>{children}</>;
}

export const Camera = React.forwardRef(function Camera(
  {
    name,
    camera,
    ...props
  }: { name: string; active?: boolean } & (
    | PerspectiveCameraProps
    | OrthographicCameraProps
  ),
  forwardedRef: React.ForwardedRef<THREE.Camera>
) {
  const [mountCamera, unmountCamera, setActiveCamera, activeCamera] =
    useCameras(
      (s) => [
        s.mountCamera,
        s.unmountCamera,
        s.setActiveCamera,
        s.activeCamera,
      ],
      shallow
    );

  const ref = React.useRef<THREE.Camera>();

  React.useLayoutEffect(() => {
    if (ref.current) {
      mountCamera(name, ref.current, props.makeDefault!);
      // if (active) {
      //   setActiveCamera(name);
      // }
    }

    return () => {
      // if (activeCamera === name) {
      //   setActiveCamera(null);
      // }
      unmountCamera(name);
    };
  }, [mountCamera, name, unmountCamera, props.makeDefault]);

  React.useLayoutEffect(() => {
    if (activeCamera === null && props.makeDefault) {
      console.log("setting active camera", name);
      setActiveCamera(name);
    }

    return () => {};
  }, [activeCamera, setActiveCamera, name, props.makeDefault]);

  const controls = useControls(
    "camera",
    {
      [name]: folder({
        type: {
          options: ["perspective", "orthographic"] as const,
          value: camera,
        },
      }),
    },
    {
      collapsed: true,
    }
  );

  let CameraType: any =
    controls.type === "perspective"
      ? ControlledPerspectiveCamera
      : ControlledOrthographicCamera;

  return (
    <CameraType
      ref={mergeRefs([ref, forwardedRef])}
      name={name}
      {...props}
      makeDefault={
        (activeCamera !== null && activeCamera === name) ||
        (activeCamera === null && props.makeDefault)
      }
    />
  );
});
