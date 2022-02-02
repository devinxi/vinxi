import solidPlugin from "vite-plugin-solid";
import { defineConfig } from "vite";

console.log(process.env.MODE);
export default defineConfig({
  plugins: [
    solidPlugin(
      process.env.MODE === "solid-ink"
        ? {
            solid: {
              moduleName: "solid-ink",
              generate: "universal" as any
            }
          }
        : {}
    )
  ]
});
