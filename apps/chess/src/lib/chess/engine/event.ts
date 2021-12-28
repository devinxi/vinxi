import { IAnalysis } from "./analysis";
import { IEngineId, IEngineOption } from ".";

// /**
//  * @abstract
//  * @class Event
//  * @module Event
//  */
// export abstract class Event {
//   /**
//    * @constructor
//    * @param {string} name
//    */
//   constructor(protected name: string) {
//     this.name = name;
//   }

//   /**
//    * @public
//    * @method
//    * @return {string}
//    */
//   public getName(): string {
//     return this.name;
//   }
// }

/**
 * @class EvaluationEvent
 * @extends Event
 * @module EvaluationEvent
 */
export class EvaluationEvent extends Event {
  /**
   * @constructor
   * @param {Analysis} analysis
   */
  constructor(protected analysis: IAnalysis) {
    super("evaluation");

    this.analysis = analysis;
  }

  /**
   * @public
   * @method
   * @return {IAnalysis}
   */
  public getAnalysis(): IAnalysis {
    return this.analysis;
  }
}

/**
 * @class BestMoveEvent
 * @extends Event
 * @module BestMoveEvent
 */
export class BestMoveEvent extends Event {
  /**
   * @constructor
   * @param {string} bestMove
   * @param {string | null} ponder
   */
  constructor(protected bestMove: string, protected ponder: string | null) {
    super("bestmove");

    this.bestMove = bestMove;
    this.ponder = ponder;
  }

  /**
   * @public
   * @method
   * @return {string}
   */
  public getBestMove(): string {
    return this.bestMove;
  }

  /**
   * @public
   * @method
   * @return {string}
   */
  public getPonder(): string | null {
    return this.ponder;
  }
}

/**
 * @class OptionEvent
 * @extends Event
 * @module OptionEvent
 */
export class OptionEvent extends Event {
  /**
   * @constructor
   * @param {IEngineOption} option
   */
  constructor(protected option: IEngineOption) {
    super("option");

    this.option = option;
  }

  /**
   * @public
   * @method
   * @return {IEngineOption}
   */
  public getOption(): IEngineOption {
    return this.option;
  }
}

/**
 * @class OutputEvent
 * @extends Event
 * @module OutputEvent
 */
export class OutputEvent extends Event {
  /**
   * @constructor
   * @param {string} output
   */
  constructor(protected output: string) {
    super("output");

    this.output = output;
  }

  /**
   * @public
   * @method
   * @return {string}
   */
  public getOutput(): string {
    return this.output;
  }
}

/**
 * @class ReadyEvent
 * @extends Event
 * @module ReadyEvent
 */
export class ReadyEvent extends Event {
  /**
   * @constructor
   */
  constructor() {
    super("ready");
  }
}

/**
 * @class UciOkEvent
 * @extends Event
 * @module UciOkEvent
 */
export class UciOkEvent extends Event {
  /**
   * @constructor
   */
  constructor() {
    super("uciok");
  }
}

/**
 * @class IdEvent
 * @extends Event
 * @module IdEvent
 */
export class IdEvent extends Event {
  /**
   * @constructor
   * @param {string} option
   */
  constructor(protected id: IEngineId) {
    super("engineid");

    this.id = id;
  }

  /**
   * @public
   * @method
   * @return {string}
   */
  public getId(): IEngineId {
    return this.id;
  }
}
