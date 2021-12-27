import { ISearchConfig } from ".";


/**
 * @interface IScore
 * @module IScore
 */
export interface IScore {
  type: string;
  value: number;
}

/**
 * @interface IPosition
 * @module IPosition
 */
export interface IPosition {
  fen: string;
}

/**
 * @interface IAnalysis
 * @module IAnalysis
 */
export interface IAnalysis {
  depth: number | null;
  seldepth: number | null;
  time: number | null;
  nodes: number | null;
  multipv: number | null;
  currmove: string | null;
  currmovenumber: number | null;
  hashfull: number | null;
  nps: number | null;
  moves: string[] | null;
  score: IScore | null;
}


/**
 * @interface IResult
 * @module IResult
 */
export interface IResult {
  bestMove: string;
  position: IPosition;
  config: ISearchConfig;
  analysis: IAnalysis;
}
