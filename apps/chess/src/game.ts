import { createStore } from "solid-js/store";
import { loadFen, makeMove } from "@/lib/lib/chess/state";
import { BLACK, DEFAULT_POSITION } from "@/lib/lib/chess/constants";
import { createEffect, createSignal, onCleanup } from "solid-js";
import { Engine } from "./lib/chess/engine";
import { getEngineMove } from "./lib/chess/state";
import { useControls } from "./lib/leva";
import { makeChessMove } from "./Scene";

const engine = new Engine();

// export const [chessBoard, setChessGame] = createStore(loadFen(DEFAULT_POSITION)!);
// export const [hoveredSquare, setHoveredSquare] = createSignal("none");

console.log(
  engine.start(o => {
    console.log(o);
  })
);

// import Vec from "@tldraw/vec";
import { makeObservable, observable, store, computed } from "./mobx";

import { RootState } from "./statechart/RootState";

export class App extends RootState {
  constructor() {
    super();
    this.app = this;
    makeObservable(this);
  }

  @observable hoveredSquare = "none";
  @observable selectedSquare = "none";
  @store chessBoard = loadFen(DEFAULT_POSITION)!;

  // viewport = new Viewport(this);
  // inputs = new Inputs(this);

  // @observable state: GameState = {
  //   level: new Level(Level.DefaultMap)
  // };

  // @computed get map(): Block[] {
  //   const items = Object.values(this.state.level.blocks);
  //   return items
  //     .sort((a, b) => a.props.point[2] - b.props.point[2])
  //     .sort((a, b) => a.props.point[1] - b.props.point[1])
  //     .sort((a, b) => a.props.point[0] - b.props.point[0]);
  // }

  isPinching = false;

  // readonly onWheel: EventHandlers["wheel"] = info => {
  //   if (this.isPinching) return;
  //   this.viewport.panCamera(info.delta);
  //   this.inputs.onWheel(info.event);
  // };

  // readonly onPointerDown: EventHandlers["pointer"] = info => {
  //   if ("clientX" in info.event) {
  //     this.inputs.onPointerDown(info.event);
  //   }
  // };

  // readonly onPointerUp: EventHandlers["pointer"] = info => {
  //   if ("clientX" in info.event) {
  //     this.inputs.onPointerUp(info.event);
  //   }
  // };

  // readonly onPointerMove: EventHandlers["pointer"] = info => {
  //   if ("clientX" in info.event) {
  //     this.inputs.onPointerMove(info.event);
  //   }
  // };

  // readonly onKeyDown: EventHandlers["keyboard"] = info => {
  //   this.inputs.onKeyDown(info.event);
  // };

  // readonly onKeyUp: EventHandlers["keyboard"] = info => {
  //   this.inputs.onKeyUp(info.event);
  // };

  // readonly onPinchStart: EventHandlers["pinch"] = info => {
  //   this.isPinching = true;
  //   this.inputs.onPinchStart(info.event);
  // };

  // readonly onPinch: EventHandlers["pinch"] = info => {
  //   this.isPinching = true;
  //   this.inputs.onPinch(info.event);
  //   this.viewport.pinchCamera(info.point, [0, 0], info.offset[0]);
  // };

  // readonly onPinchEnd: EventHandlers["pinch"] = info => {
  //   this.isPinching = false;
  //   this.inputs.onPinchEnd(info.event);
  // };
}

export const gameApp = new App();

export function StockfishEngine() {
  let controls = useControls("game", {
    engine: false
  });
  createEffect(() => {
    console.log(gameApp.chessBoard);
    if (gameApp.chessBoard.turn === BLACK && controls.engine) {
      let timer = setTimeout(async () => {
        const move = await getEngineMove(engine, gameApp.chessBoard);
        makeChessMove(move);
      }, 1000);
      onCleanup(() => clearTimeout(timer));
    }
  });
  return null;
}
