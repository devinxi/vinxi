import { atom } from "solid-use";
// import { focusAtom } from "jotai/optics";
// import { atomFamily, atomWithReset } from "jotai/utils";
// import { Square, State } from "./lib/chess/types";
import { DEFAULT_POSITION, EMPTY, WHITE } from "./lib/chess/constants";
import {
  createState,
  generateMoves,
  getEngineMove,
  getFen,
  getPiece,
  inCheck,
  inCheckmate,
  loadFen,
  makeMove,
  makePretty,
} from "@/lib/chess/state";
import { Engine } from "@/lib/chess/engine";
import create from "zustand";
import { atomWithStore } from "jotai/zustand";
import { combine } from "zustand/middleware";

const board$ = createStore(loadFen(DEFAULT_POSITION)!);

// const engine$ = atom<Engine>(async () => {
//   const engine = new Engine();
//   return new Promise((res) => engine.start((opt) => res(engine)));
// });

const turn$ = focusAtom(board$, (optic) => optic.prop("turn"));

const boardFen$ = atom((get) => {
  return getFen(get(board$));
});

const allMoves$ = atom((get) => {
  const board = get(board$);
  return generateMoves(board).map((move) => makePretty(board, move));
});

const selectedSquare$ = atom("none" as Square | "none");

const moves$ = atomFamily((square: Square | "none") =>
  atom((get) => {
    if (square === "none") {
      return [];
    }
    const board = get(board$);
    return generateMoves(board, { square }).map((move) =>
      makePretty(board, move)
    );
  })
);

const inCheckmate$ = atom((get) => inCheckmate(get(board$)));

const hoveredSquare$ = atom("none" as Square | "none");

const dispatch$ = atom(
  null,
  (
    get,
    set,
    action:
      | { type: "POINTER_ENTER"; square: Square }
      | { type: "POINTER_LEAVE"; square: Square }
  ) => {
    switch (action.type) {
      case "POINTER_ENTER": {
        set(isHoveredSquare$(action.square), true);
      }
      case "POINTER_LEAVE": {
        set(isHoveredSquare$(action.square), false);
      }
    }
  }
);

const isHoveredSquare$ = atomFamily((square: Square) => atom(false));

const gameState$ = atom({
  state: "playing",
});

import { Loader } from "three";
// @ts-ignore
import { GLTFLoader, DRACOLoader, MeshoptDecoder } from "three-stdlib";
import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";

function extensions(
  useDraco: boolean | string,
  useMeshopt: boolean,
  extendLoader?: (loader: GLTFLoader) => void
) {
  return (loader: Loader) => {
    if (extendLoader) {
      extendLoader(loader as GLTFLoader);
    }
    if (useDraco) {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath(
        typeof useDraco === "string"
          ? useDraco
          : "https://www.gstatic.com/draco/v1/decoders/"
      );
      (loader as GLTFLoader).setDRACOLoader(dracoLoader);
    }
    if (useMeshopt) {
      (loader as GLTFLoader).setMeshoptDecoder(MeshoptDecoder);
    }
  };
}

// const gltfAsset$ = atomFamily((path: string) =>
//   atom(async (get) => {
//     const loader = new GLTFLoader();
//     extensions(true, true, () => {})(loader);
//     return loader.loadAsync(path);
//   })
// );

export const useCharacter = create(
  combine(
    {
      state: "idle" as "idle" | "walk" | "run" | "attack",
    },
    (set, get, api) => ({
      // dispatch: (action: { type: 'MOVE' } | { type: 'KEYPRESS_FORWARD_IN' } | { type: 'KEYPRESS_FORWARD_OUT' } | { type: 'BACKWARD' }) => {
      //   let prevState = get();
      //   switch (prevState.state) {
      //     case "idle": {
      //       switch (action.type) {
      //         case "MOVE": {
      //           set({ state: 'walking' })
      //         }
      //         case "KEYPRESS_FORWARD_IN": {
      //           set({ state: 'walking' })
      //         }
      //         case "KEYPRESS_FORWARD_IN": {
      //           set({ state: 'walking' })
      //         }
      //         case "BACKWARD": {
      //           set({ controls: { ...prevState.controls, backward: true } })
      //         }
      //       }
      //     }
      //   }
      // },
      set,
      get,
    })
  )
);

const character$ = atomWithStore(useCharacter);

const piece$ = atomFamily((square: Square) =>
  atom((get) => getPiece(get(board$), square))
);

const playEngineMove$ = atom(null, (get, set) => {
  getEngineMove(get($.engine), get($.board)).then((move) =>
    set($.board, (board) => makeMove(board, move))
  );
});

export const atoms = {
  board: board$,
  boardFen: boardFen$,
  moves: moves$,
  allMoves: allMoves$,
  dispatch: dispatch$,
  hoveredSquare: hoveredSquare$,
  isHoveredSquare: isHoveredSquare$,
  selectedSquare: selectedSquare$,
  turn: turn$,
  piece: piece$,
  engine: engine$,
  inCheckmate: inCheckmate$,
  character: character$,
  gltfAsset: gltfAsset$,
  playEngineMove: playEngineMove$,
};

export const $ = atoms;
