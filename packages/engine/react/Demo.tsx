import {
  extend,
  ReactThreeFiber,
  useFrame,
  useThree,
} from "@react-three/fiber";
import * as React, { Component, Suspense } from "solid-js";
import * as THREE from "three";
import {
  Box,
  OrthographicCamera,
  Plane,
  Stars,
  useFBO,
} from "@react-three/drei";
import { Planet, PlanetPlane } from "../../lib/terrain/components/Planet";
import { createStore } from "../../lib/zustand";
import { Camera, CameraSystem } from "../../lib/terrain/components/Camera";
import { FPSControls } from "../../lib/terrain/components/FPSControls";
import { useControls } from "@/lib/leva";
import { OrbitControls } from "@/lib/terrain/components/OrbitControls";
import FBOGUI from "@/lib/terrain/components/FBOGUI";
import { FBODebug } from "@/lib/terrain/components/FBODebug";
import { TransformControls } from "@/lib/terrain/components/TransformControls";
import { useEditorStore } from "@/lib/terrain/components/useEditorStore";
import { Discoball } from "src/models/Discoball";
import DebugGrid from "@/lib/terrain/components/DebugGrid";
import { Horse } from "src/models/Horse";
import { Water as WaterImpl } from "../../lib/terrain/lib/Water";
import { PointerLockControls } from "../../lib/terrain/components/PointerLockControls";
import {
  GetObjectTransformComponent,
  TransformComponent,
} from "../systems/TransformSystem";
import {
  CameraMode,
  FollowCameraComponent,
  FollowCameraDefaultValues,
  TargetCameraRotationComponent,
} from "../systems/CameraSystem";
import { Object3DComponent } from "../scene";
import {
  ComponentRef,
  ComponentType,
  defineComponent,
  defineQuery,
  Entity,
  events,
  getComponent,
  initializeRegisteredSystems,
  ISchema,
  MappedComponent,
  MappedComponentRef,
  World,
} from "../ecs";
import { useEngine } from "./engine";
import { EngineComponent, initializePlaySystems, WorldComponent } from "./core";
import { v } from "./Entity";
import { useEntity, useInternalWorld, useUpdate } from "./hooks";
import { createPortal } from "react-dom";
import { Portal } from "@radix-ui/react-portal";
import { NameComponent } from "../components/NameComponent";
import { Folder } from "@/lib/leva-spline/Folder";
import { styled } from "@/leva/styles";

export const useViewer = createStore({
  position: new THREE.Vector3(0, 1050, 0),
});

export default function TerrainDemo() {
  const camera = useThree((t) => t.camera);
  const debug = useEngine((g) => g.debug);
  return (
    <>
      {/* <QuadTreeTerrain
        {...useControls("terrain", {
          width: 1000,
          height: 1000,
          maxViewDistance: 1000,
          chunkSize: 500,
          resolution: 64,
        })}
      /> */}
      {/* <Camera
          name="far back view"
          camera="perspective"
          position={[0, 300, 300]}
          far={10000}
          onUpdate={(c: THREE.PerspectiveCamera) => c.lookAt(0, 0, 0)}
          near={0.1}
          makeDefault
        /> */}
      {/* {!debug ? <FPSControls /> : null} */}
      {debug ? <OrbitControls /> : null}

      <Stars radius={2000} />
      {/* <Planet
          name="planet"
          resolution={16}
          radius={250}
          position={[0, 0, 0]}
        /> */}

      <PlanetPlane
        name="planet2"
        radius={250}
        width={1000}
        position={[0, 0, 0]}
        resolution={64}
        terrainNoise={{
          height: 200,
          scale: 650,
          exponentiation: 2.8,
          octaves: 6,
          persistence: 0.6,
        }}
        maxElevation={200}
      />
      <PointerLockControls />
      {/* <Water /> */}
      <EngineComponent>
        <WorldComponent initializeSystems={initializePlaySystems}>
          <ChessGame />
          <HorseEntity />
        </WorldComponent>
      </EngineComponent>
    </>
  );
}

const createEntityStore = (entity: Entity) =>
  createStore({
    id: entity,
    components: {} as Record<number, ComponentRef<any>>,
  });

const useEditor = createStore(
  {
    entities: {} as { [key: Entity]: ReturnType<typeof createEntityStore> },
    components: {} as { [key: number]: Record<string, any> },
  },
  (set, get) => {
    return {
      getComponent: <T extends {}, S extends ISchema>(
        entity: Entity,
        component: MappedComponent<T, S>
      ): ComponentRef<T, S> => {
        return get().components[component._id]?.[entity];
      },
    };
  }
);

const StyledEditor = styled("div", {
  backgroundColor: "$elevation1",
  fontFamily: "$mono",
  fontSize: "small",
});

export function Editor() {
  const entities = useEditor((s) => s.entities);
  React.useLayoutEffect(() => {
    events.on("ENTITY_CREATED", (event) => {
      useEditor.setState({
        entities: {
          ...useEditor.getState().entities,
          [event.entity]: createEntityStore(event.entity),
        },
      });
    });
    events.on("ENTITY_DESTROYED", (event) => {
      let entities = { ...useEditor.getState().entities };
      delete entities[event.entity];
      useEditor.setState({
        entities,
      });
    });
    events.on("COMPONENT_ADDED", (event) => {
      let state = useEditor.getState();
      state.entities[event.entity]?.setState((entityStore) => ({
        ...entityStore,
        components: {
          ...entityStore.components,
          [event.component._id]: event.componentRef,
        },
      }));
      useEditor.setState({
        components: {
          ...state.components,
          [event.component._id]: {
            ...(state.components[event.component._id] ?? {}),
            [event.entity]: event.componentRef,
          },
        },
      });
    });
    events.on("COMPONENT_REMOVED", (event) => {
      let state = useEditor.getState();
      state.entities[event.entity]?.setState((entityStore) => ({
        ...entityStore,
        components: {
          ...entityStore.components,
          [event.component._id]: undefined,
        },
      }));
      useEditor.setState({
        components: {
          ...state.components,
          [event.component._id]: {
            ...state.components[event.component._id],
            [event.entity]: undefined,
          },
        },
      });
    });
    events.on("COMPONENT_CHANGED", (event) => {
      let state = useEditor.getState();
      state.entities[event.entity]?.setState((entityStore) => ({
        ...entityStore,
        components: {
          ...entityStore.components,
          [event.component._id]: event.componentRef,
        },
      }));
      useEditor.setState({
        components: {
          ...state.components,
          [event.component._id]: {
            ...state.components[event.component._id],
            [event.entity]: event.componentRef,
          },
        },
      });
    });
  }, []);

  return (
    <StyledEditor className="h-full">
      {Object.keys(entities).map((entity) => (
        <EditorEntity entity={entity} />
      ))}
    </StyledEditor>
  );
}

import { ObjectInspector } from "@devtools-ds/object-inspector";

function EditorEntity({ entity }: { entity: Entity }) {
  const useEntity = useEditor((s) => s.entities[entity]);
  const components = useEntity((s) => s.components);

  let name = "Entity" + entity;
  if (components[NameComponent._id]) {
    name = components[NameComponent._id].name;
  }
  ``;

  return (
    <Folder name={name} collapsed={true}>
      {(toggled) =>
        toggled ? (
          <div>
            {/* {Object.keys(components).map((id) => (
              <ObjectInspector data={components[id]} />
            ))} */}
          </div>
        ) : null
      }
    </Folder>
  );
}

function HorseEntity() {
  const [ref, setRef] = React.useState();

  return (
    <Suspense fallback={null}>
      <Horse ref={setRef} position={[0, 50, 0]} scale={5} />
      <v.entity>
        <v.component
          type={TransformComponent}
          value={{
            position: new THREE.Vector3(),
            rotation: new THREE.Quaternion(),
            scale: new THREE.Vector3(1, 1, 1),
          }}
        />
        <v.component type={GetObjectTransformComponent} />
        {ref && <v.component type={Object3DComponent} value={{ value: ref }} />}
        <v.component
          type={FollowCameraComponent}
          value={{
            ...FollowCameraDefaultValues,
            distance: 50,
            mode: CameraMode.FirstPerson,
          }}
        />
        <TransformControls mode="scale" object={ref!} />
      </v.entity>
    </Suspense>
  );
}

let ChessGame = React.memo(function ChessGame() {
  const mesh = React.useMemo(
    () =>
      new THREE.Mesh(
        new THREE.BoxGeometry(30, 30, 30),
        new THREE.MeshLambertMaterial({ color: 0x123456 })
      ),
    []
  );

  const ref = React.useRef<MappedComponentRef<typeof TransformComponent>>();

  useUpdate(() => {
    if (ref.current) {
      ref.current!.position.x += 0.1;
    }
  });

  return (
    <>
      <v.entity>
        <v.component
          onAdded={(c) => (ref.current = c)}
          type={TransformComponent}
          value={{
            position: new THREE.Vector3(0, 100, 0),
            rotation: new THREE.Quaternion(),
            scale: new THREE.Vector3(1, 1, 1),
          }}
        />

        <v.component type={Object3DComponent} value={{ value: mesh }} />
      </v.entity>
    </>
  );
});

// const useEditor = createStore({
//   selected: null,
//   selectedComponent: null,
//   entities: [] as Entity,
// });

// function Editor() {
//   const { selected, selectedComponent } = useEditor();

//   React.useLayoutEffect(() => {
//     let onEntityCreated = (e: number) => {
//       useEditor.setState({ entities: [...useEditor.getState().entities, e] });
//     };
//     events.on("ENTITY_CREATED", onEntityCreated);
//     events.on("ENTITY_DESTROYED", onEntityCreated);

//     return () => {
//       events.off("ENTITY_CREATED", onEntityCreated);
//       events.off("ENTITY_DESTROYED", onEntityCreated);
//     };
//   }, []);
//   // const { scene } = useThree();
//   // const { entities } = useEngine();
//   // const { setSelected, setSelectedComponent, setSelectedComponentValue } =
//   //   useEditorStore();
//   // const selectedEntity = entities.find((e) => e.id === selected);
//   // const selectedComponentEntity =
//   //   selectedEntity &&
//   //   selectedEntity.components.find((c) => c.name === selectedComponent);
//   // const selectedComponentValue =
//   //   selectedComponentEntity && selectedComponentEntity.value;

//   return (
//     <>
//       {/* <Entity
//         name="editor"
//         position={[0, 0, 0]}
//         onClick={(e) => {
//           const { object } = e.detail;
//           if (object.name === "editor") {
//             setSelected(null);
//             setSelectedComponent(null);
//             return;
//           }
//           setSelected(object.name);
//           setSelectedComponent(null);
//         }}
//       /> */}
//     </>
//   );
// }

// function Vinxi() {

// }

// function Entities() {
//   const { entities } = useEditor();
// }

// function GUI() {
//   // const firstFBO = useStore((state) => state.fbos.test);
//   const size = useThree((t) => t.size);
//   const fbo = useFBO(256, 256, {
//     depthBuffer: true,
//     depthTexture: new THREE.DepthTexture(256, 256),
//   });
//   const [guiScene] = React.useState(new THREE.Scene());
//   const guiCamera = React.useRef<THREE.Camera>();

//   useFrame(({ gl, scene, camera }) => {
//     // render GUI panels on top of main scene
//     gl.render(guiScene, guiCamera.current!);
//     gl.autoClear = true;
//   }, 12);

//   useFrame(({ gl, scene, camera }) => {
//     gl.setRenderTarget(fbo);
//     gl.render(scene, camera);
//     gl.setRenderTarget(null);
//   }, 2);

//   return (
//     <>
//       {createPortal(
//         <FBOGUI>
//           <FBODebug fbo={fbo} />
//           {/* <FBODepthDebug fbo={/fbo} /> */}
//         </FBOGUI>,
//         guiScene
//       )}

//       <OrthographicCamera ref={guiCamera} near={0.0001} far={1} />
//     </>
//   );
// }

// function Renderer() {
//   useFrame(({ gl }) => {
//     gl.autoClear = false;
//   }, -1);

//   useFrame(({ gl, scene, camera }) => {
//     gl.setRenderTarget(null);
//     gl.render(scene, camera);
//   }, 10);

//   useFrame(({ gl }) => {
//     gl.autoClear = true;
//   }, 20);

//   return null;
// }

// function MiniMap() {
//   const size = useThree((t) => t.size);
//   const target = useFBO(size.width, size.height);

//   const ref = React.useRef<HTMLCanvasElement>();

//   useFrame((state) => {
//     state.gl.setRenderTarget(target);
//     state.gl.render(state.scene, state.camera);
//     state.gl.setRenderTarget(null);
//   });

//   return <FBOGUI>{[<FBODebug fbo={target} />]}</FBOGUI>;
// }

const glsl = String.raw;

const waterMaterial = new THREE.ShaderMaterial({
  uniforms: {
    waterColor: { value: new THREE.Color(0x00aaff) },
    refractionTexture: { value: null },
    reflectionTexture: { value: null },
  },
  opacity: 0.5,
  // wireframe: true,
  vertexShader: glsl`
  uniform float time;
  varying vec3 vNormal;

  void main() {
    vNormal = normal;
    vec3 newPosition = position;
    newPosition.z += sin(position.x) * 0.1;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }`,
  fragmentShader: glsl`
  uniform float time;
  uniform vec3 waterColor;
  varying vec3 vNormal;

  void main() {
    vec3 normal = normalize(vNormal);
    vec3 lightDir = normalize(vec3(0.0, 1.0, 0.0));
    vec3 lightColor = vec3(0.5, 0.5, 1.0);
    float lightIntensity = max(dot(normal, lightDir), 0.0);
    // gl_FragColor = vec4(lightColor * lightIntensity, 1.0);
    gl_FragColor = vec4(waterColor, 1.0);
  }`,
});

function Water() {
  const [ref, setRef] = React.useState<THREE.Object3D>();
  let [geom] = React.useState(() => new THREE.PlaneBufferGeometry(1000, 1000));
  return (
    <>
      {/* <TransformControls object={ref!} mode="scale" enabled={true} /> */}
      {/* <water
        ref={setRef}
        args={[geom, { clipBias: 0 }]}
        rotation-x={-Math.PI / 2}
        {...useControls("water", {
          "position-y": 16,
        })}
      /> */}
      <Plane
        args={[1000, 1000, 10, 10]}
        material={waterMaterial}
        rotation-x={-Math.PI / 2}
        {...useControls("water", {
          "position-y": 16,
        })}
      />
    </>
  );
}

type Water2Props = ReactThreeFiber.Object3DNode<WaterImpl, typeof WaterImpl>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      water: Water2Props;
    }
  }
}

extend({ Water: WaterImpl });
