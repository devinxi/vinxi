import solidPlugin from "@vinxi/vite-plugin-solid";
import { HTMLElements, SVGElements } from "./elements";
import { PluginOption } from "vite";

let solidConfig = {
  moduleName: "solid-js/web",
  // @ts-ignore
  generate: "dynamic",
  renderers: [
    {
      name: "dom",
      moduleName: "solid-js/web",
      elements: [...HTMLElements, ...SVGElements]
    },
    {
      name: "universal",
      moduleName: "solid-three",
      elements: []
    }
  ]
};

export default ({
  solid = {},
  babel = {
    plugins: []
  },
  ...config
} = {}) => {
  return solidPlugin({
    ...config,
    solid: { ...solidConfig, ...solid } as any,
    babel: {
      ...babel,
      plugins: [...babel.plugins, require("babel-plugin-solid-labels")]
    }
  }) as PluginOption;
};
