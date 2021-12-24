import { HTMLElements, SVGElements } from "./elements";
import solidPlugin from "vite-plugin-solid";
import inspect from "vite-plugin-inspect";

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
    solidPlugin({
      solid: config,
    }),
    inspect(),
  ];
};

export default plugin;
