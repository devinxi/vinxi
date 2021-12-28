import type { MaybePromise } from "./result";

const CLIENT_ID = "js-0.0.1";

export interface RoomInfoResponse {
  room: RoomData;
}

export interface RoomData {
  roomCode: string;
  createdAt: number;
}

export class BeamerClient {
  private apiUrl: string;
  private role: "peer" | "host";
  private currentWebSocket?: WebSocket;

  public onMessage?: (msg) => any;

  constructor(apiUrl: string, role: "peer" | "host") {
    this.apiUrl = apiUrl;
    this.role = role;
  }

  private fetch(path: string, init: RequestInit = {}) {
    if (init.headers === undefined) {
      init.headers = new Headers();
    }
    (init.headers as Headers).set("beamer-client", CLIENT_ID);

    return fetch(this.apiUrl + path, init);
  }

  /**
   * Request a new room to be created.
   */
  async requestRoom(): MaybePromise<RoomInfoResponse> {
    const resp = await this.fetch("/v1/requestRoom");

    if (resp.status === 429) {
      console.log(resp.status);
      alert("You are being rate limited :(. Wait a bit and try again");
      return { ok: false, error: await resp.text(), status: resp.status };
    }

    const roomInfo = (await resp.json()) as any;

    console.log("Requested room:", roomInfo, resp.status);
    return { ok: true, data: roomInfo };
  }

  async joinRoom(username: string, roomCode: string, clientId: string): MaybePromise<WebSocket> {
    const ws = new WebSocket(
      `${this.apiUrl.replace("https", "wss").replace("http", "ws")}/v1/room/${roomCode}/ws/${
        this.role
      }/${clientId}`
    );
    let rejoined = false;
    let startTime = Date.now();

    let rejoin = async () => {
      if (!rejoined) {
        rejoined = true;
        this.currentWebSocket = null;

        // Don't try to reconnect too rapidly.
        let timeSinceLastJoin = Date.now() - startTime;
        if (timeSinceLastJoin < 4000) {
          // Less than 4 seconds elapsed since last join. Pause a bit.
          await new Promise(resolve => setTimeout(resolve, 4000 - timeSinceLastJoin));
        }

        // OK, reconnect now!
        this.joinRoom(username, roomCode, clientId);
      }
    };

    ws.addEventListener("open", event => {
      this.currentWebSocket = ws;
      // Send user info message.
      ws.send(JSON.stringify({ name: username }));
    });

    ws.addEventListener("message", event => {
      let data = JSON.parse(event.data);

      if (this.onMessage) {
        this.onMessage(data);
      } else {
        console.log("Received msg:", data);
      }
    });

    ws.addEventListener("close", event => {
      console.log("WebSocket closed, reconnecting:", event.code, event.reason);
      rejoin();
    });

    return { ok: true, data: ws };
  }

  sendJson(data: any) {
    if (this.currentWebSocket) {
      this.currentWebSocket.send(JSON.stringify(data));
    }
  }
}
