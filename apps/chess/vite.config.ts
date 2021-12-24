import { defineConfig } from "vite";
import solid from "vite-preset-solid";
import windiCSS from "vite-plugin-windicss";
import tsconfigPaths from "vite-tsconfig-paths";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import icons from "unplugin-icons/vite";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
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
