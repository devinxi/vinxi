import { defineConfig } from "vite";
import solid from "vite-preset-solid";

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
        "zustand",
        "zustand/vanilla",
        "solid-react-compat",
        "solid-three",
        "solid-colorful",
        "v8n",
        "dequal/lite",
      ],
    },
    polyfillDynamicImport: false,
  },
  plugins: [
    // for the playground, we need to be able to use the solid-three package itself
    solid(),
  ],
});
