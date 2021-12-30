import { defineConfig } from "vite";
import solidPlugin from "@vinxi/vite-plugin-solid";
import inspect from "vite-plugin-inspect";
import { HTMLElements, SVGElements } from "./elements";
import mdx from "solid-mdx/vite-plugin";

export default defineConfig(async () => ({
  build: {
    lib: {
      entry: "./src/index.tsx",
      formats: ["es", "cjs", "umd"],
      fileName: "index",
      name: "SolidThree"
    },
    rollupOptions: {
      external: [
        "solid-js",
        "solid-js/web",
        "solid-js/store",
        "three",
        "zustand",
        "zustand/vanilla"
      ]
    },
    polyfillDynamicImport: false
  },
  plugins: [
    mdx({
      transformMDX: code => {
        return code.replace(/<\!--[a-zA-Z\.\s]+-->/g, ` `);
      },
      xdm: {
        remarkPlugins: [(await import("remark-gfm")).default]
      }
    }),
    // for the playground, we need to be able to use the solid-three package itself
    solidPlugin({
      solid: {
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
            moduleName: "/src/renderer.tsx",
            elements: []
          }
        ]
      }
    }),
    inspect()
  ]
}));
