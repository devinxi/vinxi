import { defineConfig } from "vite";
import solid from "@vinxi/vite-preset-solid";
import windiCSS from "vite-plugin-windicss";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import icons from "unplugin-icons/vite";
import { babelPluginSyntaxMdx } from "./babel.mdx.js";

export default defineConfig({
  plugins: [
    solid({
      babel: {
        plugins: [babelPluginSyntaxMdx]
      }
    }),
    vanillaExtractPlugin(),
    icons({ compiler: "solid" }),
    windiCSS({
      scan: {
        fileExtensions: ["html", "js", "ts", "jsx", "tsx"]
      }
    }),
    {
      configResolved: config => {}
    }
  ],

  build: {
    target: "esnext",
    polyfillDynamicImport: false
  }
});
