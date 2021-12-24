import { Piece } from "./Piece";
import { algebraic, file, rank, SQUARES } from "src/lib/chess";
import { Square as SquareType } from "src/lib/chess";
import { chessBoard, Square } from "./Square";
import { useControls } from "@/lib/leva";
import { getPiece } from "@/lib/chess/state";
import { Show } from "solid-js";

function BoardSquare(props: { square: SquareType }) {
  let index = SQUARES[props.square as SquareType];
  const [controls] = useControls("board", {
    xOffset: { value: -9, step: 1 },
    yOffset: { value: -10, step: 1 },
    xSquareSize: { value: 2.5, step: 0.1 },
    ySquareSize: { value: 2.5, step: 0.1 },
  });

  let y = rank(index);
  let x = file(index);

  const piece = () => {
    return getPiece(chessBoard, props.square);
  };

  return (
    <>
      <Square
        square={algebraic(index)}
        position={[
          x * controls().xSquareSize + controls().xOffset,
          0,
          y * controls().ySquareSize + controls().yOffset,
        ]}
      />
      <Show when={piece() !== null}>
        <Piece
          position={[
            x * controls().xSquareSize + controls().xOffset,
            1,
            y * controls().ySquareSize + controls().yOffset,
          ]}
          square={props.square as SquareType}
          piece={piece().type}
          color={piece().color}
        />
      </Show>
    </>
  );
}

export function Board(props) {
  return (
    <group ref={props.ref}>
      {Object.keys(SQUARES).map((square) => (
        <BoardSquare square={square as SquareType} />
      ))}
    </group>
  );
}
