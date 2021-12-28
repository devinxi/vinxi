import miniflare from "miniflare";

const mf = new miniflare.Miniflare({
  modules: true,
  durableObjects: {
    EXAMPLE_CLASS: {
      className: "DurableObjectExample"
    }
  },
  scriptPath: "./worker.js"
});

console.log(mf);
