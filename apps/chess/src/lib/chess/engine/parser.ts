import { IScore } from "./analysis";
import { IEngineOption, IEngineId } from ".";

/**
 * @class Parser {
 * @module Parser {
 */
export class Parser {
  /**
   * @public
   * @static
   * @method
   * @param {string} output
   * @return {boolean}
   */
  public static parseUciOk(output: string): boolean {
    return output === "uciok";
  }

  /**
   * @public
   * @static
   * @method
   * @param {string} output
   * @return {boolean}
   */
  public static parseIsReady(output: string): boolean {
    return output === "readyok";
  }

  /**
   * @public
   * @static
   * @method
   * @param {string} output
   * @return {string[]|null}
   */
  public static parseMoves(output: string): string[] | null {
    const matches = output.match(/info.*pv\s([a-hqnr1-8\s]+)$/)

    if (matches !== null) {
      let moves: string[] = [];
      const parts = matches[1].split(" ");
      for (let i = 0, length = parts.length; i < length; i++) {
        moves.push(parts[i]);
      }
      return moves;
    }

    return null;
  }

  /**
   * @public
   * @static
   * @method
   * @param {string} output
   * @return {Score|null}
   */
  public static parseScore(output: string): IScore | null {
    const matches = output.match(/score\s(\w+)\s([-\d+]+)/);

    if (matches !== null) {
      return {
        type: matches[1],
        value: parseInt(matches[2]),
      };
    }

    return null;
  }

  /**
   * @public
   * @staticp
   * @method
   * @param {string} output
   * @return {string|null}
   */
  public static parseBestMove(output: string): [string, string | null] | null {
    const matches = output.match(/^bestmove\s([a-h][1-8][a-h][1-8])(?:\sponder\s([a-h][1-8][a-h][1-8]))?/);

    if (matches !== null) {
      return [matches[1], matches[2] || null];
    }

    return null;
  }

  /**
   * @public
   * @staticp
   * @method
   * @param {string} output
   * @return {string|null}
   */
  public static parseCurrmove(output: string): string | null {
    const matches = output.match(/currmove\s([a-h][1-8][a-h][1-8])/);

    if (matches !== null) {
      return matches[1];
    }

    return null;
  }

  /**
   * @public
   * @static
   * @method
   * @param {string} output
   * @return {number|null}
   */
  public static parseCurrmoveNumber(output: string): number | null {
    const matches = output.match(/currmovenumber\s(\d+)/)

    if (matches !== null) {
      return parseInt(matches[1]);
    }

    return null;
  }

  /**
   * @public
   * @static
   * @method
   * @param {string} output
   * @return {number|null}
   */
  public static parseDepth(output: string): number | null {
    const matches = output.match(/^info\sdepth\s(\d+)/)

    if (matches !== null) {
      return parseInt(matches[1]);
    }

    return null;
  }

  /**
   * @public
   * @static
   * @method
   * @param {string} output
   * @return {number|null}
   */
  public static parseHashfull(output: string): number | null {
    const matches = output.match(/hashfull\s(\d+)/)

    if (matches !== null) {
      return parseInt(matches[1]);
    }

    return null;
  }

  /**
   * @public
   * @static
   * @method
   * @param {string} output
   * @return {IEngineId|null}
   */
  public static parseId(output: string): IEngineId | null {
    const matches = output.match(/^id\s(\S+)\s(.+)/)

    if (matches !== null) {
      return {
        name: matches[1],
        value: matches[2]
      };
    }

    return null;
  }

  /**
   * @public
   * @static
   * @method
   * @param {string} output
   * @return {number|null}
   */
  public static parseMultiPv(output: string): number | null {
    const matches = output.match(/multipv\s(\d+)/)

    if (matches !== null) {
      return parseInt(matches[1]);
    }

    return null;
  }

  /**
   * @public
   * @static
   * @method
   * @param {string} output
   * @return {number|null}
   */
  public static parseNodes(output: string): number | null {
    const matches = output.match(/nodes\s(\d+)/)

    if (matches !== null) {
      return parseInt(matches[1]);
    }

    return null;
  }

  /**
   * @public
   * @static
   * @method
   * @param {string} output
   * @return {number|null}
   */
  public static parseNps(output: string): number | null {
    const matches = output.match(/nps\s(\d+)/)

    if (matches !== null) {
      return parseInt(matches[1]);
    }

    return null;
  }

  /**
   * @public
   * @static
   * @method
   * @param {string} output
   * @return {number|null}
   */
  public static parseSeldepth(output: string): number | null {
    const matches = output.match(/seldepth\s(\d+)/)

    if (matches !== null) {
      return parseInt(matches[1]);
    }

    return null;
  }

  /**
   * @public
   * @static
   * @method
   * @param {string} output
   * @return {number|null}
   */
  public static parseTime(output: string): number | null {
    const matches = output.match(/time\s(\d+)/)

    if (matches !== null) {
      return parseInt(matches[1]);
    }

    return null;
  }

  /**
   * @public
   * @static
   * @method
   * @param {string} output
   * @return {IEngineOption|null}
   */
  public static parseOption(output: string): IEngineOption | null {
    const matches = output.match(/option\sname\s(.+)\stype\s(\S+)(?:\sdefault\s(\S+)?)?(?:\smin\s(\S+))?(?:\smax\s(\S+))?/);
    const vars = [...output.matchAll(/(?:\svar\s(\S+))/g)].map((match) => match[1]);

    if (matches !== null) {
      return {
        name: matches[1],
        type: matches[2],
        default: matches[3] || null,
        vars: vars.length ? vars : null,
        min: matches[4] || null,
        max: matches[5] || null,
      };
    }

    return null;
  }
}
