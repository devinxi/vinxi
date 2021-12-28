import { createApp } from "./app";
import { Env } from "./environment";
export { RoomDurableObject } from "./durableObjects/room/room";
export { RoomHubDurableObject } from "./durableObjects/hub/roomHub";
export { RateLimiterDurableObject } from "./durableObjects/ratelimit/ratelimiter";

const app = createApp();

// addEventListener("fetch", (event) => {
//     const fetchEvent = event as FetchEvent;
//     const response = app.handle(fetchEvent);

//     fetchEvent.respondWith(response);
// })

export default {
  fetch(req: Request, env: Env, ctx: any) {
    const resp = app.fetch(req, env, ctx);
    return resp;
  }
};
