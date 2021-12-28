import { folder, useControls } from "@/lib/lib/leva";
import { Chess, Square as SquareType } from "@/lib/lib/chess";
import { squareColor } from "@/lib/lib/chess/utils";
import { generateMoves, getPiece, makeMove, makePretty, sanToMove } from "@/lib/lib/chess/state";
import { createMemo, createSignal } from "solid-js";
import { BoxBufferGeometry } from "three";
import { useHover } from "./lib/useHover";
import { chessBoard, selectedSquare, setChessGame, setSelectedSquare } from "./game";
import { Html } from "solid-drei";

export function Square(props: { square: SquareType; position: any }) {
  const controls = useControls("square", {
    width: { value: 2.5, step: 0.1 },
    height: { value: 2.5, step: 0.1 },
    color: folder({
      light: "#d7ff7e",
      dark: "#456f1b"
    })
  });

  const color = squareColor(props.square);

  const getMoves = square => {
    if (square === "none") return [];
    let moves = generateMoves(chessBoard, { square: square });
    return moves.map(move => makePretty(chessBoard, move));
  };

  const data = createMemo(() => {
    let piece = getPiece(chessBoard, props.square);
    let moves = getMoves(selectedSquare() ?? "none");

    return {
      piece: piece,
      moves: moves,
      availableMove: moves.find(m => m.to === props.square)
    };
  });

  const [isSquareHovered, setIsSquareHovered] = createSignal();

  const isSelected = () => selectedSquare() === props.square;

  const [isHovered, bind] = useHover({
    onPointerEnter: e => {
      setIsSquareHovered(true);
      e.stopPropagation();
    },
    onPointerLeave: e => {
      setIsSquareHovered(false);
      // e.stopPropagation();
    }
  });

  const isMovable = () => (data().availableMove ? true : false);

  const turn = () => chessBoard.turn;

  const isSelectable = () => (data().piece ? data().piece.color === turn() : false);
  const isKilling = () => isMovable() && data().piece && data().piece.color !== turn();

  return (
    <mesh
      {...bind}
      onPointerDown={e => {
        if (isMovable()) {
          setChessGame((s: any) => makeMove(s, sanToMove(s, data().availableMove!.san)));
          setSelectedSquare("none");
        }
        if (data().piece?.color === turn()) {
          setSelectedSquare(props.square);
        }
        e.stopPropagation();
      }}
      receiveShadow
      position={props.position}
      castShadow
      geometry={new BoxBufferGeometry(controls.width, 2, controls.height)}
    >
      <Html transform >{props.square}</Html>
      <meshToonMaterial
        color={
          isMovable() && isSquareHovered()
            ? "green"
            : isSquareHovered() && isSelectable()
            ? "gold"
            : isSelected()
            ? "gold"
            : isKilling()
            ? "red"
            : isMovable()
            ? "blue"
            : color == "light"
            ? controls.light
            : controls.dark
        }
      />
    </mesh>
  );
}
