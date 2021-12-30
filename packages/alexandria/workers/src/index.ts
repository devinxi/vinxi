import { createApp } from "./app";
import { Env } from "./environment";
// export { RoomDurableObject } from "./durableObjects/room/room";
// export { RoomHubDurableObject } from "./durableObjects/hub/roomHub";
// export { RateLimiterDurableObject } from "./durableObjects/ratelimit/ratelimiter";
import { ApiModel, ApiPackage } from "@microsoft/api-extractor-model";

const apiModel: ApiModel = new ApiModel();
const apiPackage: ApiPackage = apiModel.tryGetPackageByName("solid-three");

console.log(apiPackage);
// console.log(apiPackage.name);
for (const member of apiPackage.entryPoints) {
  for (var m of member.members) {
    console.log(m.displayName);
  }
}

const app = createApp();

// addEventListener("fetch", (event) => {
//     const fetchEvent = event as FetchEvent;
//     const response = app.handle(fetchEvent);

//     fetchEvent.respondWith(response);
// })

export default {
  fetch(req: Request, env: Env, ctx: any) {
    return fetch(
      "https://raw.githubusercontent.com/devinxi/vinxi/mdx/packages/alexandria/public/solid-three.api.json"
    );
  }
};
