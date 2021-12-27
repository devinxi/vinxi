// import { Event } from "../Event/Event";
// import { IAnalysis } from "../Analysis/IAnalysis";
// import { EvaluationEvent } from "../Event/EvaluationEvent";
// import { Handler } from "../Event/Handler";
// import { Process } from "./Process";
// import { IPosition } from "../Analysis/IPosition";
// import { IResult } from "../Analysis/IResult";
// import { IEngineOption } from "./IEngineOption";
// import { OptionEvent } from "src/Event/OptionEvent";
// import { BestMoveEvent } from "src/Event/BestMoveEvent";
// import { ISearchConfig } from "./ISearchConfig";
// import { IdEvent } from "src/Event/IdEvent";

import { IPosition, IResult, IAnalysis } from "./analysis";
import { EvaluationEvent, BestMoveEvent, IdEvent, OptionEvent, Event } from "./event";
import { Handler } from "./handler";
import { StockfishProcess } from "./process";

/**
 * @interface IEngineId
 * @module IEngineId
 */
export interface IEngineId {
  name: string;
  value: string;
}

/**
 * @interface IEngineOption
 * @module IEngineOption
 */
export interface IEngineOption {
  name: string;
  type: string;
  default: string | null;
  vars: string[] | null;
  min: string | null;
  max: string | null;
}

/**
 * @interface ISearchConfig
 * @module ISearchConfig
 */
export interface ISearchConfig {
  [key: string]: string | number | null | undefined;
  searchmoves?: string;
  ponder?: null;
  wtime?: number;
  btime?: number;
  winc?: number;
  binc?: number;
  movestogo?: number;
  depth?: number;
  nodes?: number;
  mate?: number;
  movetime?: number;
  infinite?: null;
}


type EventCallback = (event: Event) => void;

/**
 * @class Engine
 * @module Engine
 */
export class Engine {
  /**
   * @protected
   * @type {Process}
   */
  public process: StockfishProcess;

  /**
   * @protected
   * @type {Handler}
   */
  protected handler: Handler;

  /**
   * @protected
   * @type {Handler}
   */
  protected id: Record<string, string>;

  /**
   * @protected
   * @type {IEngineOption[]}
   */
  protected options: IEngineOption[];

  /**
   * @protected
   * @type {boolean}
   */
  protected isStarted: boolean;

  /**
   * @constructor
   */
  constructor() {
    this.process = new StockfishProcess();
    if (!this.process.isRunning) {
      if (this.process.error) throw this.process.error;
      throw new Error("Process failed to start");
    }
    this.handler = new Handler();
    this.id = {};
    this.options = [];
    this.isStarted = false;

    this.process.listen((output: string) => {
      console.log(output)
      this.handler.handle(output);
    });
  }

  /**
   * @public
   * @return {boolean}
   */
  public get isRunning(): boolean {
    return this.process.isRunning;
  }

  /**
   * @public
   * @method
   * @param {IPosition} position
   * @param {ISearchConfig} config
   * @param {Function} callback
   * @return {void}
   */
  public analyzePosition(
    position: IPosition,
    config: ISearchConfig,
    callback: (result: IResult) => void
  ): void {
    let lastAnalysis: IAnalysis | undefined;

    const removeListener = this.on("evaluation", (event: Event): void => {
      const evalEvent = event as EvaluationEvent;
      if (evalEvent.getAnalysis().moves !== null) {
        lastAnalysis = evalEvent.getAnalysis();
      }
    });

    this.go(position, config, (bestMove) => {
      this.stop();
      removeListener();
      if (lastAnalysis !== undefined) {
        const result: IResult = {
          analysis: lastAnalysis,
          bestMove: bestMove.getBestMove(),
          config,
          position,
        };
        callback(result);
      }
    });
  }

  /**
   * @public
   * @method
   * @param {Function} callback
   * @param {Function} evalCallback
   * @return {void}
   */
  public go(
    position: IPosition,
    config: ISearchConfig,
    callback?: (bestMove: BestMoveEvent) => void
  ): void {
    if (callback) {
      this.once("bestmove", (event: Event): void => {
        const bestMoveEvent = event as BestMoveEvent;
        callback(bestMoveEvent);
      });
    }
    let cmd = "go";
    Object.entries(config).forEach(([key, value]) => {
      cmd += ` ${key}`;
      if (value !== null) cmd += ` ${value}`;
    });
    this.process.execute(`position fen ${position.fen}`);
    this.process.execute(cmd);
  }

  /**
   * @public
   * @method
   * @param {Function} callback
   * @return {void}
   */
  public getOptions(callback: (options: IEngineOption[], id: Record<string, string>) => void): void {
    this.options = [];
    this.id = {};
    this.process.execute("uci");

    const removeIdListener = this.on("engineid", (event: Event) => {
      const idEvent = event as IdEvent;
      const id = idEvent.getId();
      this.id[id.name] = id.value;
    });

    const removeOptionListener = this.on("option", (event: Event) => {
      const optEvent = event as OptionEvent;
      this.options.push(optEvent.getOption());
    });

    this.once("uciok", () => {
      callback(this.options, this.id);
      removeOptionListener();
      removeIdListener();
    });
  }

  /**
   * @public
   * @method
   * @param {string} name
   * @param {Function} callback
   * @return {Function} removeListener
   */
  public on(name: string, callback: EventCallback): () => void {
    this.handler.on(name, callback);
    return () => this.handler.removeListener(name, callback);
  }

  /**
   * @public
   * @method
   * @param {string} name
   * @param {Function} callback
   * @return {void}
   */
  public once(name: string, callback: EventCallback): void {
    this.handler.once(name, callback);
  }

  /**
   * @public
   * @method
   * @return {void}
   */
  public ponderhit(): void {
    this.process.execute("ponderhit");
  }

  /**
   * @public
   * @method
   * @return {void}
   */
  public setOptions(config: Record<string, string>) {
    Object.entries(config).forEach(
      ([key, value]) => this.process.execute(`setoption name ${key} value ${value}`)
    );
  }

  /**
   * @public
   * @method
   * @param {Function} callback
   * @return {void}
   */
  public start(callback: (options: IEngineOption[], id: Record<string, string>) => void, config?: Record<string, string>): void {
    if (this.isStarted) {
      return callback(this.options, this.id);
    }
    this.once("ready", () => {
      this.isStarted = true;
      callback(this.options, this.id);
    });

    this.getOptions(() => {
      if (config) this.setOptions(config);
      this.process.execute("isready");
    });
  }

  /**
   * @public
   * @method
   * @return {void}
   */
  public stop(): void {
    this.process.execute("stop");
  }

  /**
   * @public
   * @method
   * @return {void}
   */
  public quit(): void {
    this.process.execute("quit");
  }

  /**
   * @public
   * @method
   * @return {void}
   */
  public destroy(): void {
    this.process.kill();
    this.handler.removeAllListeners();
  }
}
