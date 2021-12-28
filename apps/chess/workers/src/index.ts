import { createApp } from "./src/app";
import { Env } from "./src/environment";
export { RoomDurableObject } from "./src/durableObjects/room/room";
export { RoomHubDurableObject } from "./src/durableObjects/hub/roomHub";
export { RateLimiterDurableObject } from "./src/durableObjects/ratelimit/ratelimiter";

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
