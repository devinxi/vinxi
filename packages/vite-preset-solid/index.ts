import { HTMLElements, SVGElements } from "./elements";
import solidPlugin from "vite-plugin-solid";
import inspect from "vite-plugin-inspect";
import { undestructurePlugin } from "./vite-plugin-solid-undestructure";
let config = {
  moduleName: "solid-js/web",
  // @ts-ignore
  generate: "dynamic",
  renderers: [
    {
      name: "dom",
      moduleName: "solid-js/web",
      elements: [...HTMLElements, ...SVGElements],
    },
    {
      name: "universal",
      moduleName: "solid-three",
      elements: [],
    },
  ],
};

let plugin = () => {
  return [
    undestructurePlugin("ts"),
    solidPlugin({
      solid: config as any,
      babel: {
        plugins: [require("babel-plugin-solid-labels")],
      },
    }),
    inspect(),
  ];
};

export default plugin;
