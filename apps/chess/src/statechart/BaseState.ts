import { makeObservable, observable } from "../mobx";
import { App } from "../game";

export class BaseState {
  constructor(app?: App, parent?: BaseState) {
    this.app = app ?? ({} as App);
    this.parent = parent;
    makeObservable(this);
  }

  name: string = "state";

  app: App;

  parent?: BaseState;

  private _isActive = false;

  // States

  initial?: string;

  @observable currentState?: BaseState;

  prevState?: BaseState;

  states = new Map<string, BaseState>();

  registerState(state: BaseState) {
    this.states.set(state.name, state);
  }

  exit = (payload?: any) => {
    if (this.currentState) {
      this.currentState.exit(payload);
    }
    this.onEnter?.(payload);
  };

  enter = (payload?: any) => {
    if (this.initial) {
      const next = this.states.get(this.initial);
      if (!next) throw Error(`No state found named ${this.initial}`);
      this.currentState = next;
      this.currentState.enter(payload);
    }
  };

  onEnter?: (payload?: any) => void;

  onExit?: (payload?: any) => void;

  // Events

  events = new Map<string, (payload: any) => void>();

  registerEvent = (name: string, cb: (payload: any) => void) => {
    this.events.set(name, cb);
  };

  handleEvent = (name: `on${any}`, payload: any) => {
    const eventHandler = this[name as keyof this];
    if (eventHandler && "call" in eventHandler)
      (eventHandler as unknown as (payload: any) => void)(payload);
    this.currentState?.handleEvent(name, payload);
  };

  // Transitions

  transition(name: string) {
    const next = this.states.get(name);
    if (!name) throw Error(`No state found named ${name}`);
    const prev = this.currentState;
    if (prev) {
      this.prevState = prev;
      prev.exit?.();
    }
    next?.enter();
  }

  // Helpers

  isIn = (path: string) => {
    const ids = path.split(".").reverse();
    let state: BaseState = this;
    while (ids.length > 0) {
      const name = ids.pop();
      if (!name) return true;
      if (state.currentState?.name === name) {
        if (ids.length === 0) return true;
        state = state.currentState;
        continue;
      } else return false;
    }
    return false;
  };

  isInAny = (...paths: string[]) => {
    return paths.some(this.isIn);
  };

  // Properties

  get isActive() {
    return this._isActive;
  }

  get type() {
    if (!this.parent) return "root";
    if (this.states.size === 0) return "leaf";
    return "branch";
  }
}
