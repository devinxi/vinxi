import { Context } from "sunder";
import { Env } from "../../environment";

interface Session {
    webSocket: CloudflareWebsocket;
    role: "host" | "peer";
    clientId: string;
    quit: boolean;
    name?: string;
    blockedMessages: string[];
}

interface SessionConfig {
    roomCode: string, role: "host" | "peer", clientId: string
}

export class RoomHandler {
    private hostConnections: Session[] = [];
    private peerConnections: Session[] = [];

    constructor(env: Env) {
        
    }

    joinWebSocketAsHost(ctx: Context<Env, {roomCode: string, clientId: string}>) {
        return this.joinWebSocket(ctx, "host");
    }

    joinWebSocketAsPeer(ctx: Context<Env, {roomCode: string, clientId: string}>) {
        return this.joinWebSocket(ctx, "peer");
    }

    private async joinWebSocket(ctx: Context<Env, {roomCode: string, clientId: string}>, role: "host" | "peer") {
        if (ctx.request.get("Upgrade") != "websocket") {
            ctx.throw(400, "expected websocket");
            return;
        }
        const {0: client, 1: server} = new WebSocketPair();

        const p: SessionConfig = {
            ...ctx.params,
            role
        }
        await this.handleWebSocketSession(server, p);

        ctx.response.webSocket = client;
        ctx.response.status = 101;
    }

    private async handleWebSocketSession(webSocket: CloudflareWebsocket, config: {roomCode: string, role: "host" | "peer", clientId: string}) {
        webSocket.accept();

        const session: Session = {
            webSocket,
            role: config.role,
            clientId: config.clientId,
            quit: false,
            blockedMessages: []
        }

        if (config.role === "peer") {
            this.peerConnections.push(session);
        } else if (config.role === "host") {
            this.hostConnections.push(session);
        }

        let receivedUserInfo = false;
        webSocket.addEventListener("message", async msg => {
        try {
            if (session.quit) {
            // Whoops, when trying to send to this WebSocket in the past, it threw an exception and
            // we marked it broken. But somehow we got another message? I guess try sending a
            // close(), which might throw, in which case we'll try to send an error, which will also
            // throw, and whatever, at least we won't accept the message. (This probably can't
            // actually happen. This is defensive coding.)
            webSocket.close(1011, "WebSocket broken.");
            return;
            }

            

            if (!receivedUserInfo) {
                let data = JSON.parse(msg.data);
                // The first message the client sends is the user info message with their name. Save it
                // into their session object.
                session.name = "" + (data.name || "anonymous");

                // Don't let people use ridiculously long names. (This is also enforced on the client,
                // so if they get here they are not using the intended client.)
                if (session.name.length > 12) {
                    webSocket.send(JSON.stringify({error: "Name too long."}));
                    webSocket.close(1009, "Name too long.");
                    return;
                }

                // Deliver all the messages we queued up since the user connected.
                session.blockedMessages.forEach(queued => {
                    webSocket.send(queued);
                });
                session.blockedMessages = [];

                // Broadcast to all the host that this user has joined.
                this.broadcast("host", JSON.stringify({joined: session.name}));
                webSocket.send(JSON.stringify({ready: true}));

                // Note that we've now received the user info message.
                receivedUserInfo = true;
                return;
            }

            // Block people from sending overly long messages. This is also enforced on the client,
            // so to trigger this the user must be bypassing the client code.
            if (msg.data > 256) {
                webSocket.send(JSON.stringify({error: "Message too long."}));
                return;
            }

            // Broadcast the message to all other WebSockets.
            let dataStr = msg.data;

            if (config.role === "peer") {
                this.broadcast("host", dataStr)
            } else {
                this.broadcast("peer", dataStr)
            }
        } catch (err) {
            // Report any exceptions directly back to the client. As with our handleErrors() this
            // probably isn't what you'd want to do in production, but it's convenient when testing.
            webSocket.send(JSON.stringify({error: err.stack}));
        }
        });

        // On "close" and "error" events, remove the WebSocket from the sessions list and broadcast
        // a quit message.
        let closeOrErrorHandler = (_evt: any/*{code?: number | undefined, reason?: string | undefined}*/) => {
            session.quit = true;

            if (config.role === "host") {
                this.hostConnections = this.hostConnections.filter(m => m !== session);
            } else if (config.role === "peer") {
                this.peerConnections = this.peerConnections.filter(m => m !== session);
                if (session.name) {
                    this.broadcast("host", JSON.stringify({quit: session.name}));
                }
            }
            
        };
        webSocket.addEventListener("close", closeOrErrorHandler);
        webSocket.addEventListener("error", closeOrErrorHandler);
        }

    private broadcast(toRole: "host" | "peer", message: string) {        
        // Iterate over all the sessions sending them messages.
        let quitters: Session[] = [];

        const sessions = toRole === "host" ? this.hostConnections : this.peerConnections

        const filteredSessions = sessions.filter(session => {
        if (session.name) {
            try {
                session.webSocket.send(message);
            return true;
            } catch (err) {
            // Whoops, this connection is dead. Remove it from the list and arrange to notify
            // everyone below.
            session.quit = true;
            quitters.push(session);
            return false;
            }
        } else {
            // This session hasn't sent the initial user info message yet, so we're not sending them
            // messages yet (no secret lurking!). Queue the message to be sent later.
            session.blockedMessages.push(message);
            return true;
        }
        });

        if (toRole === "host") {
            this.hostConnections = filteredSessions;
        } else {
            this.peerConnections = filteredSessions;
        }

        quitters.forEach(quitter => {
        if (quitter.name) {
            this.broadcast("host", JSON.stringify({quit: quitter.name}));
        }
        });
    }
}

