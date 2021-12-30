import { Context, HttpStatus } from "sunder";
import { Env } from "../environment";

function setHeaders(ctx: Context) {
    ctx.response.set("Access-Control-Allow-Origin", "*");
    ctx.response.set("Access-Control-Allow-Methods", "GET, HEAD, POST, OPTIONS");
    ctx.response.set("Access-Control-Allow-Headers", "Content-type, Beamer-Client");
    ctx.response.set("Access-Control-Max-Age", "7200");
    ctx.response.set("Vary", "Origin");
}

export function cors() {
    return async (ctx: Context<Env>, next: Function) => {

        
        try {
            if (ctx.request.method === "OPTIONS") {
                setHeaders(ctx);
                return HttpStatus.Ok;
            }
            await next();
            setHeaders(ctx);
        } catch (e) {
            setHeaders(ctx);
            throw e;
        }
    }
}
