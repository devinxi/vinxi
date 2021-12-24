import { folder, useControls } from "@/lib/leva";
import { Chess, Square as SquareType } from "src/lib/chess";
import { squareColor } from "@/lib/chess/utils";
import { createStore } from "solid-js/store";
import {
  generateMoves,
  getPiece,
  loadFen,
  makeMove,
  makePretty,
  sanToMove,
} from "@/lib/chess/state";
import { DEFAULT_POSITION } from "@/lib/chess/constants";
import { createMemo } from "solid-js";
import { BoxBufferGeometry } from "three";

const getSquare = (square: SquareType) => {};

export const [chessBoard, setChessGame] = createStore(
  loadFen(DEFAULT_POSITION)!
);

export function Square(props: { square: SquareType; position: any }) {
  const [controls] = useControls("square", {
    width: { value: 2.5, step: 0.1 },
    height: { value: 2.5, step: 0.1 },
    color: folder({
      light: "#d7ff7e",
      dark: "#456f1b",
    }),
  });

  const color = squareColor(props.square);

  const data = createMemo(() => {
    let piece = getPiece(chessBoard, props.square);
    let moves = generateMoves(chessBoard, { square: props.square }).map(
      (move) => makePretty(chessBoard, move)
    );
    return {
      piece: piece,
      moves: moves,
      availableMove: moves.find((m) => m.to === props.square),
    };
  });

  // const piece = useAtomValue($.piece(square));

  // const [isSquareHovered, setIsSquareHovered] = useAtom(
  //   $.isHoveredSquare(square)
  // );

  // const [selectedSquare, setSelectedSquare] = useAtom($.selectedSquare);

  // const isSelected = selectedSquare === square;

  // const [isHovered, bind] = useHover({
  //   onPointerEnter: (e) => {
  //     setIsSquareHovered(true);
  //     e.stopPropagation();
  //   },
  //   onPointerLeave: (e) => {
  //     setIsSquareHovered(false);
  //     // e.stopPropagation();
  //   },
  // });

  // const moves = useAtomValue($.moves(selectedSquare || "none"));

  // const availableMove = moves.find((m) => m.to === square);

  // const isMovable = availableMove ? true : false;

  // const updateGame = useUpdateAtom($.board);

  // const turn = useAtomValue($.turn);

  // const isSelectable = piece ? piece.color === turn : false;
  // const isKilling = isMovable && piece && piece.color != turn;

  return (
    <mesh
      // {...bind}
      // onPointerDown={(e) => {
      //   if (isMovable) {
      //     updateGame((s) => makeMove(s, sanToMove(s, availableMove!.san)!));
      //     setSelectedSquare("none");
      //   }
      //   if (piece?.color === turn) {
      //     setSelectedSquare(square);
      //   }
      //   e.stopPropagation();
      // }}
      receiveShadow
      position={props.position}
      castShadow
      geometry={new BoxBufferGeometry(controls().width, 2, controls().height)}
    >
      <meshToonMaterial
        color={
          // isMovable && isSquareHovered
          //   ? "green"
          //   : isSquareHovered && isSelectable
          //   ? "gold"
          //   : isSelected
          //   ? "gold"
          //   : isKilling
          //   ? "red"
          //   : isMovable
          //   ? "blue"
          // :
          color == "light" ? controls().light : controls().dark
        }
      />
    </mesh>
  );
}
