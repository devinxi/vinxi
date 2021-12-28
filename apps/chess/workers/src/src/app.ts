import { Router, Sunder } from "sunder";
import { renderErrorsAsJSON } from "sunder/middleware/render";
import { registerRoutes } from "./routes";
import { renderErrorsAsHTML } from "./middleware/htmlErrors";
import { Env } from "./environment";
import { cors } from "./middleware/cors";

export { RoomDurableObject } from "./durableObjects/room/room";

export function createApp() {
    const app = new Sunder<Env>();
    const router = new Router<Env>();
    registerRoutes(router);
    
    app.use(cors());
    app.use(renderErrorsAsHTML);
    app.use(renderErrorsAsJSON);

    app.use(router.middleware);

    return app;
}