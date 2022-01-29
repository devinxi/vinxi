import { dirname, relative } from "path";
import { defineConfig, UserConfig } from "vite";
import Icons from "unplugin-icons/vite";
import WindiCSS from "vite-plugin-windicss";
import Solid from "vite-plugin-solid";
import windiConfig from "./windi.config";
import { r, port, isDev } from "./scripts/utils";

export const sharedConfig: UserConfig = {
  root: r("src"),
  resolve: {
    alias: {
      // "~/options/solid/src/lib": `${r("src/options/solid/src/lib/index.ts")}`,
      // "~/options/solid/src/components/*": `${r("src/options/solid/src/components/*")}`,
      // "~/options/solid/src/components": `${r("src/options/solid/src/components/index.ts")}`,
      // "~/options/solid/src/hooks": `${r("src/options/solid/src/hooks/index")}`,
      // "~/options/solid/src/types": `${r("src/options/solid/src/types/")}`,
      mobx: `${r("src/logic/mobx")}`,
      "~/": `${r("src")}/`
    }
  },
  define: {
    __DEV__: isDev
  },
  plugins: [
    Solid({
      dev: isDev
    }),

    // https://github.com/antfu/unplugin-icons
    Icons({
      compiler: "solid"
    }),

    // rewrite assets to use relative path
    {
      name: "assets-rewrite",
      enforce: "post",
      apply: "build",
      transformIndexHtml(html, { path }) {
        return html.replace(/"\/assets\//g, `"${relative(dirname(path), "/assets")}/`);
      }
    }
  ]
};

export default defineConfig(({ command }) => ({
  ...sharedConfig,
  base: command === "serve" ? `http://localhost:${port}/` : "/dist/",
  server: {
    port,
    hmr: {
      host: "localhost"
    }
  },
  build: {
    outDir: r("extension/dist"),
    emptyOutDir: false,
    sourcemap: isDev ? "inline" : false,
    // https://developer.chrome.com/docs/webstore/program_policies/#:~:text=Code%20Readability%20Requirements
    terserOptions: {
      mangle: false
    },
    rollupOptions: {
      input: {
        background: r("src/background/index.html"),
        options: r("src/options/index.html"),
        popup: r("src/popup/index.html")
      }
    }
  },
  plugins: [
    ...sharedConfig.plugins!,

    // https://github.com/antfu/vite-plugin-windicss
    WindiCSS({
      config: windiConfig
    })
  ]
}));
