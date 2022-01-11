import { defineConfig } from "vite";
import solid from "@vinxi/vite-preset-solid";
import windiCSS from "vite-plugin-windicss";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import icons from "unplugin-icons/vite";

export default defineConfig({
  plugins: [
    solid({
      babel: {
        plugins: [
          [
            "@babel/plugin-proposal-decorators",
            {
              legacy: true
            }
          ],
          ["@babel/plugin-proposal-class-properties"]
        ]
      }
    }),
    vanillaExtractPlugin(),
    icons({ compiler: "solid" }),
    windiCSS({
      scan: {
        fileExtensions: ["html", "js", "ts", "md", "mdx", "jsx", "tsx"]
      }
    })
  ],

  build: {
    target: "esnext",
    polyfillDynamicImport: false
  }
});
