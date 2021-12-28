// Adapted https://github.com/cloudflare/workers-chat-demo (BSD-3 licensed)
import { Env } from "../../environment";

// RateLimiter implements a Durable Object that tracks the frequency of messages from a particular
// source and decides when messages should be dropped because the source is sending too many
// messages.
export class RateLimiterDurableObject {
  nextAllowedTime: number;
  constructor(_state: DurableObjectState, env: Env) {
    // Timestamp at which this IP will next be allowed to send a message. Start in the distant
    // past, i.e. the IP can send a message now.
    this.nextAllowedTime = 0;
  }

  // Our protocol is: POST when the IP performs an action, or GET to simply read the current limit.
  // Either way, the result is the number of seconds to wait before allowing the IP to perform its
  // next action.
  async fetch(request: Request) {
    let now = Date.now() / 1000;

    this.nextAllowedTime = Math.max(now, this.nextAllowedTime);

    if (request.method === "POST") {
      const timeBetweenRequests = parseFloat(await request.text());
      this.nextAllowedTime += timeBetweenRequests;
    }

    // Return the number of seconds that the client needs to wait.
    let cooldown = Math.max(0, this.nextAllowedTime - now);
    return new Response(cooldown.toString());
  }
}