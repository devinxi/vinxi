import { createStore } from "solid-js/store";
import { loadFen } from "src/chess/state";
import { DEFAULT_POSITION } from "src/chess/constants";
import { createSignal } from "solid-js";

export const [chessBoard, setChessGame] = createStore(loadFen(DEFAULT_POSITION)!);
export const [selectedSquare, setSelectedSquare] = createSignal("none");
export const [hoveredSquare, setHoveredSquare] = createSignal("none");
