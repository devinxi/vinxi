import { defineConfig } from "vite";
import solid from "@vinxi/vite-preset-solid";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      formats: ["es", "cjs", "umd"],
      fileName: "index",
      name: "Leva"
    },
    rollupOptions: {
      external: ["solid-js", "solid-js/web", "solid-js/store"]
    },
    polyfillDynamicImport: false
  },
  plugins: [
    // for the playground, we need to be able to use the solid-three package itself
    solid(),
    {
      configureServer: server => {
        server.middlewares.use("/api/users", (req, res, next) => {
          res.write(
            JSON.stringify({
              1: {
                id: 1,
                name: "Joey"
              },
              2: {
                id: 2,
                name: "Jamie"
              }
            }),
            "utf-8"
          );
          res.end();
        });
      }
    }
  ]
});
