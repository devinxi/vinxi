export class DurableObjectExample {
  constructor(state, env) {
    console.log("heree");
  }

  async fetch(request) {
    return new Response("Hello World 65");
  }
}

export default {
  fetch: async (request, bindings) => {
    console.log(request, bindings.EXAMPLE_CLASS);
    let id = bindings.EXAMPLE_CLASS.idFromName(new URL(request.url).pathname);

    // Construct the stub for the Durable Object using the ID. A "stub" is a
    // client object used to send messages to the Durable Object.
    let stub = bindings.EXAMPLE_CLASS.get(id);
    // console.log(bindings);
    return Promise.resolve(
      new Response(JSON.stringify({ json: await (await stub.fetch(request)).text() }), {
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      })
    );
  }
};
