import { Router } from "sunder";
import { Env } from "./environment";
// import { homeHandler } from "./handlers/home";
import { joinRoomAsHost, joinRoomAsPeer } from "./handlers/join";
import { getRoom, requestRoom } from "./handlers/matchMaking";

export function registerRoutes(router: Router<Env>) {
  console.log("hello");
  // router.get("/", homeHandler);

  // router.get("/v1/requestRoom", requestRoom);

  // router.get("/v1/room/:roomCode/info", getRoom);

  // router.get("/v1/room/:roomCode/ws/host/:clientId", joinRoomAsHost);
  // router.get("/v1/room/:roomCode/ws/peer/:clientId", joinRoomAsPeer);

  router.get("/robots.txt", ctx => {
    // This disallows all bots/scrapers
    ctx.response.body = `Agent: *\nDisallow: /`;
  });
}
