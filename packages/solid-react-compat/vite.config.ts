import { defineConfig } from "vite";

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
      ],
    },
    polyfillDynamicImport: false,
  },
});
