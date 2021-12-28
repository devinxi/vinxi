import { Piece } from "./Piece";
import { algebraic, file, rank, SQUARES } from "@/lib/lib/chess";
import { Square as SquareType } from "@/lib/lib/chess";
import { Square } from "./Square";
import { chessBoard } from "./game";
import { useControls } from "@/lib/lib/leva";
import { getPiece } from "@/lib/lib/chess/state";
import { For, Show } from "solid-js";
import { useTheatre } from "./App";

export const BoardSquare = ({ square }: { square: SquareType }) => {
  let index = SQUARES[square as SquareType];
  const sheet = useTheatre();

  const controls = useControls("board", {
    offset: [-9, -10],
    xSquareSize: { value: 2.5, step: 0.1 },
    ySquareSize: { value: 2.5, step: 0.1 }
  });

  let y = rank(index);
  let x = file(index);

  const piece = () => {
    return getPiece(chessBoard, square);
  };

  return (
    <>
      <Square
        square={algebraic(index)}
        position={[
          x * controls.xSquareSize + controls.offset[0],
          0,
          y * controls.ySquareSize + controls.offset[1]
        ]}
      />
      <group
        position={[
          x * controls.xSquareSize + controls.offset[0],
          0,
          y * controls.ySquareSize + controls.offset[1]
        ]}
      ></group>
      <Show when={piece() !== null}>
        <Piece
          position={[
            x * controls.xSquareSize + controls.offset[0],
            1,
            y * controls.ySquareSize + controls.offset[1]
          ]}
          square={square as SquareType}
          piece={piece().type}
          color={piece().color}
        />
      </Show>
    </>
  );
};

export function Board(props) {
  return (
    <group ref={props.ref}>
      <For each={Object.keys(SQUARES)}>
        {square => <BoardSquare square={square as SquareType} />}
      </For>
    </group>
    // <BoardSquare square={"a1" as SquareType} />
  );
}
