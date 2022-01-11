import { folder, useControls } from "@/lib/lib/leva";
import { Chess, Square as SquareType } from "@/lib/lib/chess";
import { squareColor } from "@/lib/lib/chess/utils";
import { generateMoves, getPiece, makeMove, makePretty, sanToMove } from "@/lib/lib/chess/state";
import { ComponentProps, createMemo, createSignal } from "solid-js";
import { BoxBufferGeometry, Color } from "three";
import { useHover } from "./lib/useHover";
import { gameApp } from "./game";
import { Html } from "solid-drei";
import { makeChessMove } from "./Scene";

const Colors = {
  gold: new Color("gold"),
  white: new Color("white"),
  black: new Color("black"),
  red: new Color("red"),
  blue: new Color("blue"),
  green: new Color("green")
};
export function Square(props: { square: SquareType } & ComponentProps<"mesh">) {
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
    let moves = generateMoves(gameApp.chessBoard, { square: square });
    return moves.map(move => makePretty(gameApp.chessBoard, move));
  };

  const data = createMemo(() => {
    let piece = getPiece(gameApp.chessBoard, props.square);
    let moves = getMoves(gameApp.selectedSquare ?? "none");

    return {
      piece: piece,
      moves: moves,
      availableMove: moves.find(m => m.to === props.square)
    };
  });

  const [isSquareHovered, setIsSquareHovered] = createSignal();

  const isSelected = () => gameApp.selectedSquare === props.square;

  // const isSquareHovered = () => gameApp.hoveredSquare === props.square;
  const [isHovered, bind] = useHover({
    onPointerEnter: e => {
      setIsSquareHovered(true);
      gameApp.hoveredSquare = props.square;
      e.stopPropagation();
    },
    onPointerLeave: e => {
      setIsSquareHovered(false);
      gameApp.hoveredSquare = "none";
      // e.stopPropagation();
    }
  });

  const isMovable = () => (data().availableMove ? true : false);

  const turn = () => gameApp.chessBoard.turn;

  const isSelectable = () => (data().piece ? data().piece.color === turn() : false);
  const isKilling = () => isMovable() && data().piece && data().piece.color !== turn();

  return (
    <mesh
      {...bind}
      onPointerDown={e => {
        if (isMovable()) {
          makeChessMove(sanToMove(gameApp.chessBoard, data().availableMove!.san));
          gameApp.selectedSquare = "none";
        }
        if (data().piece?.color === turn()) {
          gameApp.selectedSquare = props.square;
        }
        e.stopPropagation();
      }}
      receiveShadow
      castShadow
      {...props}
    >
      <boxBufferGeometry args={[controls.width, 2, controls.height]} />
      <Html transform>{props.square}</Html>
      <meshToonMaterial
        color={
          isMovable() && isSquareHovered()
            ? Colors.green
            : isSquareHovered() && isSelectable()
            ? Colors.gold
            : isSelected()
            ? Colors.gold
            : isKilling()
            ? Colors.red
            : isMovable()
            ? Colors.blue
            : color == "light"
            ? Colors.white
            : Colors.black
        }
      />
    </mesh>
  );
}
