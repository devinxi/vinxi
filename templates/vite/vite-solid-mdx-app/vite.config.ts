import solid from "@vinxi/vite-preset-solid";
import mdx from "solid-mdx/vite-plugin";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [mdx(), solid()]
});
