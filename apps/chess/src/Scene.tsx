import { Canvas, useFrame, useThree } from "solid-three";
import {
  ComponentProps,
  createEffect,
  createRenderEffect,
  createSignal,
  Match,
  onCleanup,
  PropsWithChildren,
  Show,
  Switch,
  untrack,
  useContext
} from "solid-js";
import { Html, OrbitControls } from "solid-drei";
import { JSX } from "solid-three";
import { Plane } from "./Plane";
import { useControls } from "./lib/leva";
import { Board } from "./Board";
import { Link } from "solid-app-router";
import { useTheatreControls } from "./theatre";
import { Portal } from "solid-js/web";
import { RoomProvider, RoomContext } from "./room";
import { chessBoard, setChessGame } from "./game";
import { ascii, getFen, loadFen } from "./lib/chess/state";
declare module "solid-js" {
  interface Directives {}
}

export const urlSearchParams = new URLSearchParams(window.location.search);

const roomCode = urlSearchParams.get("room") || "";
export const beamerServerUrl = "https://chess.vinxi.workers.dev";

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
      <spotLight ref={setRef} penumbra={1} position={controls.spotLight} intensity={2} castShadow />
      <RoomProvider>
        <ChessRoom></ChessRoom>
      </RoomProvider>
      <Plane />
      <OrbitControls />
    </Canvas>
  );
}

function createGame() {
  const room = useContext(RoomContext);
  createEffect(() => {
    room.addEventListener("message", e => {
      console.log(e.data);
      if (e.data.type === "game_state") {
        setChessGame(loadFen(e.data.board));
      }
    });
  });

  return room;
}

let send;

export function makeChessMove(availableMove) {
  send({
    type: "chess_move",
    move: availableMove
  });
  // setChessGame((s: any) => makeMove(s, sanToMove(s, availableMove!.san)));
}

export function ChessRoom() {
  const room = createGame();

  // let moveNumber = 0;
  createEffect(() => {
    if (room.client()) {
      send = room.client().sendJson.bind(room.client());
    }
    // let moves = chessBoard.move_number;
    // console.log(moveNumber, moves, room.client());
    // if (moveNumber !== moves && room.client()) {
    //   moveNumber = moves;
    //   room.client().sendJson({
    //     type: "game_state",
    //     board: getFen(chessBoard)
    //   });
    // }
    // console.log(moveNumber, moves, room.client());
  });

  return (
    <>
      <Portal>
        <div class="fixed top-2 left-2 flex flex-col items-center justify-center">
          <div class="bg-gray-200 bg-opacity-50 space-y-3 rounded-md px-6 py-6 flex flex-col items-center justify-center">
            {/* <div>hello {room.playerName()}</div> */}
            <Switch>
              <Match when={room.roomCode()}>
                <div class="text-lg text-gray-700">
                  <span class="font-bold">{chessBoard.turn === "b" ? "Black" : "White"}</span>'s
                  turn
                </div>
                <pre class="text-xs text-gray-700">{ascii(chessBoard.board)}</pre>
                <button class="text-xs" onClick={room.copyLink}>
                  (Click to copy) <br /> https://solid-chess.vercel.app/?room={room.roomCode()}
                </button>
              </Match>
            </Switch>
            <button
              onClick={() => room.hostRoom()}
              class="bg-gradient-to-r from-red-100 to-red-200 text-red-800 px-3 text-lg uppercase rounded"
            >
              new game
            </button>
          </div>
        </div>
      </Portal>
      <Board />
    </>
  );
}
