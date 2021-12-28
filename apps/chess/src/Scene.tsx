import { Canvas, useFrame, useThree } from "solid-three";
import {
  ComponentProps,
  createComputed,
  createEffect,
  createRenderEffect,
  createSignal,
  onCleanup,
  PropsWithChildren,
  Show,
  untrack
} from "solid-js";
import { Html, OrbitControls } from "solid-drei";
import { JSX } from "solid-three";
import { Plane } from "./Plane";
import { useControls } from "./lib/leva";
import { Board } from "./Board";
import { useTheatreControls } from "./useTheatreControls";
import { BeamerClient } from "./server/api/client";
import { generateClientId } from "./server/api/id";

declare module "solid-js" {
  interface Directives {}
}

const urlSearchParams = new URLSearchParams(window.location.search);

const roomCode = urlSearchParams.get("room") || "";
const beamerServerUrl =
  urlSearchParams.get("apiserver") || location.origin.indexOf("http://localhost") !== -1
    ? "http://localhost:8787"
    : "https://beamerserver-a.guido.workers.dev";

const PerspectiveCamera = ({
  position = [10, 5, 10],
  ref
}: PropsWithChildren<ComponentProps<"mesh">>) => {
  const set = useThree(({ set }) => set);
  const camera = useThree(({ camera }) => camera);
  const size = useThree(({ size }) => size);

  let cam = (
    <perspectiveCamera far={1000} near={0.1} fov={75} position={position as any} />
  ) as unknown as THREE.PerspectiveCamera;

  // @ts-ignore

  // if (ref) {

  // }

  createRenderEffect(() => {
    cam.aspect = size().width / size().height;
    cam.updateProjectionMatrix();
  });

  createRenderEffect(() => {
    const oldCam = untrack(() => camera());
    console.log("setting cam", cam);
    set()({ camera: cam });
    onCleanup(() => set()({ camera: oldCam }));
  });

  return cam as unknown as JSX.Element;
};

export default function Scene() {
  const controls = useControls("scene", {
    camera: [3, 25, 10],
    spotLight: [10, 20, 10]
  });

  let [ref, setRef] = createSignal(null);

  let theatreControls = useTheatreControls("camera", {
    x: 0,
    y: 25,
    z: 10
  });

  return (
    <Canvas
      shadows
      gl={{
        antialias: true
      }}
    >
      <PerspectiveCamera position={[theatreControls.x, theatreControls.y, theatreControls.z]} />
      <ambientLight intensity={0.5} />
      {/* <directionalLight castShadow intensity={1} position={[10, 10, 10]} /> */}
      <spotLight ref={setRef} penumbra={1} position={controls.spotLight} intensity={2} castShadow />
      {/* <Box position={[-5, 5, 0]} /> */}
      {/* <Box position={[5, 5, 0]} /> */}
      {/* <Show when={ref()}>{ref => <spotLightHelper args={[ref]} />}</Show> */}

      <ChessGame
        {...{
          quickJoin: !!urlSearchParams.get("room"),
          roomCode: roomCode,
          beamerServerUrl: beamerServerUrl
        }}
      />
      <Plane />
      <OrbitControls />
    </Canvas>
  );
}

const ChessGame = ({ quickJoin, roomCode, beamerServerUrl }) => {
  let quickJoinUrl = () =>
    document.location.origin +
    document.location.pathname +
    "?" +
    new URLSearchParams({ room: roomCode }).toString();

  const [role, setRole] = createSignal("" as "host" | "peer");
  const [client, setClient] = createSignal<BeamerClient | null>(null);

  const clientId = generateClientId();

  async function hostRoom() {
    setRole("host");
    setClient(new BeamerClient(beamerServerUrl, role()));
    const roomResponse = await client()!.requestRoom();

    // console.log(roomResponse);
    // if (roomResponse.ok) {
    let roomCode = roomResponse.data.room.roomCode;
    await client().joinRoom("hostuser", roomCode, clientId);
    // } else {
    // console.error(roomResponse);
    // }
  }

  async function joinRoom() {
    setRole("host");
    setClient(new BeamerClient(beamerServerUrl, role()));
    await client().joinRoom("gamepad", roomCode, clientId);
  }

  createComputed(() => {
    if (quickJoin) {
      joinRoom();
    }
  });

  return (
    <>
      {/* <Html>
        <div>Hello World</div>
        <button onClick={() => hostRoom()}>New Game</button>
      </Html> */}
      <ChessBoard />
    </>
  );
};

function rotate(ref) {
  effect: {
    console.log(ref);
  }

  useFrame(() => {
    ref.rotation.z += 0.005;
  });
}

function ChessBoard() {
  let ref;

  // useFrame(() => {
  //   ref.rotation.y += 0.005;
  // });
  return <Board ref={ref} />;
}
