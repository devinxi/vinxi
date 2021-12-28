// ../../node_modules/.pnpm/viteflare@0.2.0_vite@2.7.7/node_modules/viteflare/dist/viteflare.js
var defineWorker = (worker) => worker;

// worker.js
var DurableObjectExample = class {
  constructor(state, env) {
    console.log("heree");
  }
  async fetch(request) {
    return new Response("Hello World");
  }
};
var worker_default = defineWorker({
  fetch(request, bindings, context) {
    console.log(request);
    console.log(bindings);
    return Promise.resolve(new Response("hello world"));
  }
});
export {
  DurableObjectExample,
  worker_default as default
};
