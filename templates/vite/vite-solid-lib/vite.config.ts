import { build, defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import dts from "vite-dts";
// import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
// import { HTMLElements } from "./src/solid-three/html-elements";
// import { SVGElements } from "./src/solid-three/constants";
// import { babel } from "@rollup/plugin-babel";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.tsx",
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: ["solid-js", "solid-js/web", "solid-js/store"],
    },
    polyfillDynamicImport: false,
  },
  plugins: [solidPlugin(), dts()],
});
