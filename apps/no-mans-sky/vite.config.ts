import solid from "@vinxi/vite-preset-solid";

import { defineConfig } from "vite";

export default defineConfig({
  plugins: [solid()],
  resolve: {
    alias: {
      "@/**/*": "src/"
    }
  }
});
