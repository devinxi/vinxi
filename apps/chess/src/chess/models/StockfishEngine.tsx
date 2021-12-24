import * as React from "src/react";
import { useAtom } from "jotai";
import { $ } from "src/atoms";
import { useAtomValue, useUpdateAtom } from "jotai/utils";
import { BLACK } from "@/lib/chess/constants";
import { playEngineMove$ } from "../App";

function StockfishEngine() {
  const engine = useAtomValue($.engine);
  const [board] = useAtom($.board);

  const playEngineMove = useUpdateAtom(playEngineMove$);

  React.createEffect(() => {
    if (board.turn === BLACK) {
      let timer = setTimeout(() => playEngineMove(), 1000);
      return () => clearTimeout(timer);
    }
  }, [engine, board.turn]);
  return null;
}
