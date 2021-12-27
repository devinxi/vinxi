let WORKER_IDS = 0;
let WORK_IDS = 0;

class WorkerThread<T> {
  worker: Worker;
  resolvers: { [key: string]: (data: any) => void; } = {};
  id: number;

  constructor(s: Worker) {
    this.worker = s;
    this.worker.onmessage = (e) => {
      this.onMessage(e);
    };
    this.id = WORKER_IDS++;
  }

  onMessage(e: MessageEvent<any>) {
    const id = e.data.id;
    const resolve = this.resolvers[id];
    delete this.resolvers[id];
    resolve(e.data.result);
  }

  postMessage(s: WorkItem, resolve: (data: any) => void) {
    let id = WORK_IDS++;
    this.resolvers[id] = resolve;
    this.worker.postMessage({
      id,
      ...s
    });
  }
}

interface WorkItem {
  name: string;
  params: any;
}


export class WorkerThreadPool<T extends { [key: string]: (...args: any[]) => any }> {
  workers: WorkerThread<T>[];
  free: WorkerThread<T>[];
  _busy: { [id: number]: WorkerThread<T>; };
  queue: [WorkItem, (data: any) => void][];
  constructor(size: number, worker: () => Worker) {
    this.workers = [...Array(size)].map((_) => new WorkerThread(worker()));
    this.free = [...this.workers];
    this._busy = {};
    this.queue = [];
  }

  get length() {
    return this.workers.length;
  }

  get busy() {
    return this.queue.length > 0 || Object.keys(this._busy).length > 0;
  }

  enqueue<K extends keyof T & string>(name: K, params: Parameters<T[K]>[0], resolve: (data: any) => void) {
    this.queue.push([{ name, params }, resolve]);
    this.pumpQueue();
  }

  pumpQueue() {
    while (this.free.length > 0 && this.queue.length > 0) {
      const w = this.free.pop()!;
      this._busy[w.id] = w;

      const [workItem, workResolve] = this.queue.shift()!;

      w.postMessage(workItem, (v: any) => {
        delete this._busy[w.id];
        this.free.push(w);
        workResolve(v);
        this.pumpQueue();
      });
    }
  }
}


export function expose<T extends { [key: string]: (data: any) => any }>(worker: T) {
  addEventListener('message', (msg) => {
    if (msg.data.name in worker) {
      const result = worker[msg.data.name as keyof T](msg.data.params)
      self.postMessage({ id: msg.data.id, result })
    }
    else {
      console.error("worker: unknown message", msg.data)
    }
  });
}



