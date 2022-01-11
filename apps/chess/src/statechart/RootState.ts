import { App } from "../game";
import { BaseState } from "./BaseState";

class WaitinState extends BaseState {
  name = "waiting";
  constructor(app?: App, parent?: BaseState) {
    super(app, parent);
    this.name = "waiting";
  }
}

export class RootState extends BaseState {
  name = "root";

  constructor() {
    super();
    this.registerState(new WaitinState());
    // register states...
    this.enter();
  }

  send(event: `on${any}`, payload: any) {
    this.handleEvent(event, payload);
  }
}
