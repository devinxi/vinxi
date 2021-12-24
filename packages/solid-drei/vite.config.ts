import { defineConfig } from "vite";
import solid from "@vinxi/vite-preset-solid";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      formats: ["es", "cjs", "umd"],
      fileName: "index",
      name: "Leva",
    },
    rollupOptions: {
      external: [
        "solid-js",
        "solid-js/web",
        "solid-js/store",
        "three",
        "solid-react-compat",
        "solid-three",
        "three-stdlib",
      ],
    },
    polyfillDynamicImport: false,
  },
  plugins: [
    // for the playground, we need to be able to use the solid-three package itself
    solid(),
  ],
});
