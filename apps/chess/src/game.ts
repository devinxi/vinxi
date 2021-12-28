import { createStore } from "solid-js/store";
import { loadFen, makeMove } from "@/lib/lib/chess/state";
import { BLACK, DEFAULT_POSITION } from "@/lib/lib/chess/constants";
import { createEffect, createSignal, onCleanup } from "solid-js";
import { Engine } from "./lib/chess/engine";
import { getEngineMove } from "./lib/chess/state";

const engine = new Engine();

export const [chessBoard, setChessGame] = createStore(loadFen(DEFAULT_POSITION)!);
export const [selectedSquare, setSelectedSquare] = createSignal("none");
export const [hoveredSquare, setHoveredSquare] = createSignal("none");

console.log(
  engine.start(o => {
    console.log(o);
  })
);

export function StockfishEngine() {
  createEffect(() => {
    if (chessBoard.turn === BLACK) {
      let timer = setTimeout(async () => {
        const move = await getEngineMove(engine, chessBoard);
        setChessGame(makeMove(chessBoard, move));
      }, 1000);
      onCleanup(() => clearTimeout(timer));
    }
  });
  return null;
}
