import { useFrame, useThree } from "@react-three/fiber";
import {
  registerSystem,
  SystemUpdateType,
  registerSystemWithArgs,
  InjectionPoint,
  createWorld,
  World,
  initializeRegisteredSystems,
  executeWorld,
} from "../ecs";
import * as React from "src/react";
import { CameraComponent } from "../systems/CameraSystem";
import { TransformComponent } from "../systems/TransformSystem";
import { NameComponent } from "../components/NameComponent";
import { useInput } from "./useInput";
import { v } from "./Entity";
import { useQuery } from "react-query";
import { createStore } from "@/lib/zustand";
import { useInternalWorld } from "./hooks";

function createWorldStore(world: World) {
  return createStore({
    world: world,
    isInitialized: false,
  });
}
export const InternalWorldContext = React.createContext<World>(
  undefined as any
);

export const WorldContext = React.createContext<
  ReturnType<typeof createWorldStore>
>(undefined as any);

export function WorldComponent({
  children,
  initializeSystems,
}: React.PropsWithChildren<{
  initializeSystems: (world: World) => Promise<void>;
}>) {
  const world = React.useMemo(() => createWorld(), []);
  const useWorld = React.useMemo(() => createWorldStore(world), []);
  const isInitialized = useWorld((w) => w.isInitialized);

  // @ts-ignore
  window.WORLD = world;
  console.log(world);

  return (
    <InternalWorldContext.Provider value={world}>
      <WorldContext.Provider value={useWorld}>
        <InitializeWorld
          registerSystems={initializeSystems}
          useWorld={useWorld}
        />
        {isInitialized ? (
          <>
            <MainCamera />
            {children}
          </>
        ) : null}
        <ExecuteWorld useWorld={useWorld} />
      </WorldContext.Provider>
    </InternalWorldContext.Provider>
  );
}

function InitializeWorld({
  registerSystems,
  useWorld,
}: {
  registerSystems: (world: World) => Promise<void>;
  useWorld: ReturnType<typeof createWorldStore>;
}) {
  const world = useWorld((w) => w.world);

  React.useLayoutEffect(() => {
    if (useWorld.getState().isInitialized) return;
    (async () => {
      await registerSystems(world);
      await initializeRegisteredSystems(world);
    })().then(() => {
      useWorld.setState({ isInitialized: true });
    });
  }, []);

  const gl = useThree((s) => s.gl);
  const scene = useThree((s) => s.scene);

  React.useLayoutEffect(() => {
    world.renderer = gl;
    world.scene = scene;
  }, [gl, scene, world]);

  return null;
}

function ExecuteWorld({
  useWorld,
}: {
  useWorld: ReturnType<typeof createWorldStore>;
}) {
  const isInitialized = useWorld((state) => state.isInitialized);
  const world = useWorld((state) => state.world);
  const clock = useThree((s) => s.clock);

  useFrame(() => {
    if (isInitialized) {
      executeWorld(world, clock.getDelta(), clock.getElapsedTime());
    }
  }, 1);

  return null;
}

export const initializePlaySystems = async (world: World) => {
  // Network (Incoming)
  // registerSystem(
  //   SystemUpdateType.Free,
  //   import("./networking/systems/IncomingNetworkSystem")
  // );

  // Input
  // registerSystem(
  //   SystemUpdateType.Free,
  //   import("./input/systems/ClientInputSystem")
  // );
  // registerSystem(SystemUpdateType.Free, import("./xr/systems/XRSystem"));
  registerSystem(
    SystemUpdateType.Free,
    import("../systems/CameraSystem"),
    world
  );
  // registerSystem(
  //   SystemUpdateType.Free,
  //   import("./navigation/systems/AutopilotSystem")
  // );

  // UPDATE INJECTION POINT
  registerSystemWithArgs(
    SystemUpdateType.Free,
    import("../systems/InjectedPipelineSystem"),
    {
      injectionPoint: InjectionPoint.UPDATE,
    },
    world
  );

  // Fixed Systems
  registerSystemWithArgs(
    SystemUpdateType.Free,
    import("../systems/FixedPipelineSystem"),
    {
      updatesPerSecond: 60,
    },
    world
  );

  // EARLY FIXED UPDATE INJECTION POINT
  registerSystemWithArgs(
    SystemUpdateType.Fixed,
    import("../systems/InjectedPipelineSystem"),
    {
      injectionPoint: InjectionPoint.FIXED_EARLY,
    },
    world
  );

  // Bot
  // registerSystem(
  //   SystemUpdateType.Fixed,
  //   import("./bot/systems/BotHookSystem")
  // );

  // // Maps
  // registerSystem(SystemUpdateType.Fixed, import("./map/MapUpdateSystem"));

  // // Navigation
  // registerSystem(
  //   SystemUpdateType.Fixed,
  //   import("./proximityChecker/systems/ProximitySystem")
  // );
  // registerSystem(
  //   SystemUpdateType.Fixed,
  //   import("./navigation/systems/FollowSystem")
  // );

  // // Avatar Systems
  // registerSystem(
  //   SystemUpdateType.Fixed,
  //   import("./physics/systems/InterpolationSystem")
  // );
  // registerSystem(
  //   SystemUpdateType.Fixed,
  //   import("./avatar/ClientAvatarSpawnSystem")
  // );
  // registerSystem(SystemUpdateType.Fixed, import("./avatar/AvatarSystem"));
  // registerSystem(
  //   SystemUpdateType.Fixed,
  //   import("./avatar/AvatarControllerSystem")
  // );

  // LATE FIXED UPDATE INJECTION POINT
  registerSystemWithArgs(
    SystemUpdateType.Fixed,
    import("../systems/InjectedPipelineSystem"),
    {
      injectionPoint: InjectionPoint.FIXED,
    },
    world
  );

  // // Scene Systems
  // registerSystem(
  //   SystemUpdateType.Fixed,
  //   import("./interaction/systems/EquippableSystem")
  // );
  registerSystem(
    SystemUpdateType.Free,
    import("../systems/SceneObjectSystem"),
    world
  );
  // registerSystem(
  //   SystemUpdateType.Fixed,
  //   import("./scene/systems/NamedEntitiesSystem")
  // );
  registerSystem(
    SystemUpdateType.Free,
    import("../systems/TransformSystem"),
    world
  );
  // registerSystemWithArgs(
  //   SystemUpdateType.Fixed,
  //   import("./physics/systems/PhysicsSystem"),
  //   {
  //     simulationEnabled: options.physics.simulationEnabled,
  //   }
  // );

  // LATE FIXED UPDATE INJECTION POINT
  registerSystemWithArgs(
    SystemUpdateType.Fixed,
    import("../systems/InjectedPipelineSystem"),
    {
      injectionPoint: InjectionPoint.FIXED_LATE,
    },
    world
  );

  // // Camera & UI systems
  // registerSystem(
  //   SystemUpdateType.Free,
  //   import("./networking/systems/MediaStreamSystem")
  // );
  // registerSystem(SystemUpdateType.Free, import("./xrui/systems/XRUISystem"));
  // registerSystem(
  //   SystemUpdateType.Free,
  //   import("./interaction/systems/InteractiveSystem")
  // );

  // // Audio Systems
  // registerSystem(
  //   SystemUpdateType.Free,
  //   import("./audio/systems/AudioSystem")
  // );
  // registerSystem(
  //   SystemUpdateType.Free,
  //   import("./audio/systems/PositionalAudioSystem")
  // );

  // PRE RENDER INJECTION POINT
  registerSystemWithArgs(
    SystemUpdateType.Free,
    import("../systems/InjectedPipelineSystem"),
    {
      injectionPoint: InjectionPoint.PRE_RENDER,
    },
    world
  );

  // Animation Systems
  // registerSystem(
  //   SystemUpdateType.Free,
  //   import("./avatar/AvatarLoadingSystem")
  // );
  // registerSystem(SystemUpdateType.Free, import("./avatar/AnimationSystem"));
  // registerSystem(
  //   SystemUpdateType.Free,
  //   import("./particles/systems/ParticleSystem")
  // );
  // registerSystem(
  //   SystemUpdateType.Free,
  //   import("./debug/systems/DebugHelpersSystem")
  // );
  // registerSystem(SystemUpdateType.Free, import("./renderer/HighlightSystem"));

  registerSystem(
    SystemUpdateType.Free,
    import("../systems/RendererSystem"),
    world
  );

  // POST RENDER INJECTION POINT
  registerSystemWithArgs(
    SystemUpdateType.Free,
    import("../systems/InjectedPipelineSystem"),
    {
      injectionPoint: InjectionPoint.POST_RENDER,
    },
    world
  );
};

export function EngineComponent({ children }: React.PropsWithChildren<{}>) {
  React.useLayoutEffect(() => {
    useInput.getState().addEventListeners();
    return () => {
      useInput.getState().removeEventListeners();
    };
  }, []);

  return <>{children}</>;
}

function MainCamera({ children }: React.PropsWithChildren<{}>) {
  const camera = useThree((s) => s.camera);
  const world = useInternalWorld();

  return (
    <v.entity
      onCreated={(e) => {
        world.mainCameraEntity = e;
        world.mainCamera = camera;
      }}
    >
      <v.component type={NameComponent} value={{ name: "Main Camera" }} />
      <v.component type={CameraComponent} />
      <v.component
        type={TransformComponent}
        value={{
          position: camera.position.clone(),
          rotation: camera.quaternion.clone(),
          scale: camera.scale.clone(),
        }}
      />
      {children}
    </v.entity>
  );
}

export function Example() {}
