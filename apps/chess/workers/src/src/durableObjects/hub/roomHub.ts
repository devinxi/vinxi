import { Router, Sunder } from "sunder";
import { renderErrorsAsJSON } from "sunder/middleware/render";
import { Env } from "../../environment";
import { handleRoomLookup, handleRoomRequest } from "./handler";

export const REQUEST_ROOM_ENDPOINT = "/hub/room/request";
export const buildRoomLookupUrl = (roomCode: string) => "/hub/room/lookup/" + roomCode;
export const LOOKUP_ROOM_ENDPOINT = "/hub/room/lookup/:roomCode";

/**
 * Responsible for extending 
 */
export class RoomHubDurableObject {
    private env: Env;
    private app: Sunder<Env>;

    constructor(state: DurableObjectState, env: Env) {
        this.env = env;

        this.app = new Sunder<Env>({state});

        const router = new Router<Env>();
        router.post(REQUEST_ROOM_ENDPOINT, handleRoomRequest);
        router.get(LOOKUP_ROOM_ENDPOINT, handleRoomLookup);

        this.app.use(renderErrorsAsJSON);
        this.app.use(router.middleware);
    }

    fetch(request: Request) {
        return this.app.fetch(request, this.env, {waitUntil: () => 0});
    }
}