import { Router, Sunder } from "sunder";
import { renderErrorsAsJSON } from "sunder/middleware/render";
import { Env } from "../../environment";
import { RoomHandler } from "./handler";

export class RoomDurableObject {
  private env: Env;
  private app: Sunder<Env>;

  constructor(state: DurableObjectState, env: Env) {
    this.env = env;
    this.app = new Sunder<Env>({ state });

    const router = new Router<Env>();

    this.app.use(renderErrorsAsJSON);

    const handler = new RoomHandler(env);
    router.get("/room/:roomCode/ws/:role/:clientId", ctx => handler.joinWebSocket(ctx));

    this.app.use(router.middleware);
  }

  async fetch(request: Request) {
    const resp = await this.app.fetch(request, this.env, { waitUntil: () => 0 });
    return resp;
  }
}
