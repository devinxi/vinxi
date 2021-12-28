import { buildRoomLookupUrl, REQUEST_ROOM_ENDPOINT } from "../durableObjects/hub/roomHub";
import { Env } from "../environment";
import { MaybePromise } from "./result";

export interface RoomData {
  roomCode: string;
  createdAt: number;
  durableObjectId: string;
}

export interface RoomInfoResponse {
  room: RoomData;
}

export class RoomHubClient {
  private env: Env;

  constructor(env: Env) {
    this.env = env;
    console.log(this.env);
  }

  private getStub() {
    const id = this.env.ROOM_HUB_DURABLE_OBJECT.idFromName("room_hub_v2");
    return this.env.ROOM_HUB_DURABLE_OBJECT.get(id);
  }

  async createRoom(): MaybePromise<RoomInfoResponse> {
    const id = this.env.ROOM_DURABLE_OBJECT.newUniqueId();
    const hub = this.getStub();
    const resp = await hub.fetch("https://example.com" + REQUEST_ROOM_ENDPOINT, {
      body: JSON.stringify({ durableObjectId: id.toString() }),
      method: "POST"
    });
    const r = await resp.json();
    return {
      ok: true,
      data: r
    };
  }

  async getRoomInfo(roomCode: string): MaybePromise<RoomInfoResponse> {
    const hub = this.getStub();
    const resp = await hub.fetch("https://example.com" + buildRoomLookupUrl(roomCode), {
      method: "GET"
    });
    if (resp.status !== 200) {
      return { ok: false, status: resp.status, error: resp.json() };
    }

    const r = await resp.json();
    return {
      ok: true,
      data: r
    };
  }
}
