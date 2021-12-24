import { defineConfig } from "vite";
import solid from "@vinxi/vite-preset-solid";
import windiCSS from "vite-plugin-windicss";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import icons from "unplugin-icons/vite";

export default defineConfig({
  plugins: [
    solid(),
    vanillaExtractPlugin(),
    icons({ compiler: "solid" }),
    windiCSS({
      scan: {
        fileExtensions: ["html", "js", "ts", "jsx", "tsx"],
      },
    }),
  ],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});
