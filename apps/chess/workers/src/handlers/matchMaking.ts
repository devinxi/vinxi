import { Context } from "sunder";

import { Env } from "../environment";
import { RoomHubClient } from "../lib/hub";

export async function getRoom(ctx: Context<Env, {roomCode: string}>) {

    const client = new RoomHubClient(ctx.env);
    const res = await client.getRoomInfo(ctx.params.roomCode);

    if (res.ok) {
       ctx.response.body = res.data;
    } else {
        ctx.response.status = res.status;
        ctx.response.body = res.error;
    }
}

export async function requestRoom(ctx: Context<Env>) {
    const client = new RoomHubClient(ctx.env);
    const res = await client.createRoom();

    if (res.ok) {
        ctx.response.body = res.data;
    } else {
        ctx.response.status = res.status;
        ctx.response.body = res.error;
    }
}
