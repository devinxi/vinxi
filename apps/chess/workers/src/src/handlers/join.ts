import { Context, HttpStatus } from "sunder";
import { Env } from "../environment";
import { RoomHubClient } from "../lib/hub";

async function joinRoom(ctx: Context<Env, {roomCode: string, clientId: string}>, role: "host" | "peer") {
    const client = new RoomHubClient(ctx.env);
    let roomCode = ctx.params.roomCode.toUpperCase();

    if (roomCode.length !== 4) {
        ctx.throw(HttpStatus.BadRequest, "A room code must be 4 characters")
        return;
    }

    if (ctx.params.clientId.length < 4 || ctx.params.clientId.length > 64) {
        ctx.throw(HttpStatus.BadRequest, "Invalid client ID length")
        return;
    }

    const rinfo = await client.getRoomInfo(roomCode);
    if (!rinfo.ok) {
        ctx.throw(rinfo.status, rinfo.error);
        return;
    }

    const id = ctx.env.ROOM_DURABLE_OBJECT.idFromString(rinfo.data.room.durableObjectId);
    const roomStub = ctx.env.ROOM_DURABLE_OBJECT.get(id);

    ///                                                  room/:roomCode/ws/host/:clientId
    const resp = await roomStub.fetch(`wss://example.com/room/${roomCode}/ws/${role}/${ctx.params.clientId}`, {
        method: "GET",
        headers: ctx.request.headers
    });

    if (resp.status !== HttpStatus.SwitchingProtocols) {
        ctx.throw(resp.status, await resp.text())
        return;
    }

    ctx.response.webSocket = (resp as any).webSocket;
    ctx.response.body = resp.body!;
    ctx.response.status = resp.status;
}


export async function joinRoomAsHost(ctx: Context<Env, {roomCode: string, clientId: string}>) {
    return joinRoom(ctx, "host")
}

export async function joinRoomAsPeer(ctx: Context<Env, {roomCode: string, clientId: string}>) {
    return joinRoom(ctx, "peer")
}
