
// /**
//  * @class Process
//  * @module Process
//  */
// export class Process {
//   /**
//    * @protected
//    * @type {ChildProcess}
//    */

//   protected _error: Error | null = null;

//   /**
//    * @constructor
//    * @param {string} path
//    */
//   constructor(path: string) {
//     this.child = spawn(path);
//     this.child.on("error", (err) => {
//       this._error = err;
//     });
//   }

//   public get isRunning(): boolean {
//     return !!(this.child.pid && this.child.exitCode == null);
//   }

//   public get error(): Error | null {
//     return this._error;
//   }

//   /**
//    * @public
//    * @method
//    * @param {string} command
//    * @param {string[]} options
//    * @return {void}
//    */
//   public execute(command: string, ...options: string[]): void {
//     if (options.length > 0) {
//       this.child.stdin?.write(`${command} ${options.join(" ")}${EOL}`);
//     } else {
//       this.child.stdin?.write(`${command}${EOL}`);
//     }
//   }

//   /**
//    * @public
//    * @method
//    * @param {Function} callback
//    * @return {void}
//    */
//   public listen(callback: (output: string) => void): void {
//     this.child.stdout?.on("data", function (this: Process, data: string[]): void {
//       const output: string[] = data.toString().split(EOL).filter(x => x);

//       for (let i = 0, length = output.length; i < length; i++) {
//         callback(output[i]);
//       }
//     });
//   }

//   /**
//    * @public
//    * @method
//    * @return {void}
//    */
//   public kill(): void {
//     this.child.kill();
//   }
// }


/**
 * @class Process
 * @module Process
 */
export class StockfishProcess {
  /**
   * @protected
   * @type {ChildProcess}
   */
  protected worker: Worker;

  protected _error: Error | null = null;

  /**
   * @constructor
   */
  constructor() {
    var wasmSupported =
      typeof WebAssembly === "object" &&
      WebAssembly.validate(
        Uint8Array.of(0x0, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00)
      );

    this.worker = new Worker(
      wasmSupported ? "/stockfish/stockfish.wasm.js" : "/stockfish/stockfish.js"
    );
  }

  public get isRunning(): boolean {
    return !!this.worker;
  }

  public get error(): Error | null {
    return this._error;
  }

  /**
   * @public
   * @method
   * @param {string} command
   * @param {string[]} options
   * @return {void}
   */
  public execute(command: string, ...options: string[]): void {
    if (options.length > 0) {
      this.worker.postMessage(`${command} ${options.join(" ")}`);
    } else {
      this.worker.postMessage(`${command}`);
    }
  }

  /**
   * @public
   * @method
   * @param {Function} callback
   * @return {void}
   */
  public listen(callback: (output: string) => void): void {
    this.worker.addEventListener("message", function (e) {
      const output: string[] = [e.data]

      for (let i = 0, length = output.length; i < length; i++) {
        callback(output[i]);
      }
    });


  }

  /**
   * @public
   * @method
   * @return {void}
   */
  public kill(): void {
    this.worker.terminate()
  }
}
