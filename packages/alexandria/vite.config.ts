import { defineConfig } from "vite";
import solidPlugin from "@vinxi/vite-plugin-solid";
import inspect from "vite-plugin-inspect";
import { HTMLElements, SVGElements } from "./elements";
import mdx from "solid-mdx/vite-plugin";
import windiCSS from "vite-plugin-windicss";
import http from "http";
import net from "net";
let s;
export default defineConfig(async () => ({
  build: {
    lib: {
      entry: "./src/index.tsx",
      formats: ["es", "cjs", "umd"],
      fileName: "index",
      name: "SolidThree"
    },
    rollupOptions: {
      external: [
        "solid-js",
        "solid-js/web",
        "solid-js/store",
        "three",
        "zustand",
        "zustand/vanilla"
      ]
    },
    polyfillDynamicImport: false
  },
  server: {
    // middlewareMode: true
  },
  plugins: [
    {
      configureServer: server => {
        // s = server.httpServer = http.createServer(server.middlewares);
        // let close = server.close.bind(server);
        // server.close = async () => {
        //   await close();
        //   await s.close();
        // };

        server.middlewares.use((req, res, next) => {
          console.log(req.url);
          if (req.url === "/") {
            res.end(`<body>
            <div id="root"></div>
            <script src="./playground/main.tsx" type="module"></script>
          </body>`);
          } else {
            next();
          }
          try {
            // if (req.url === "/favicon.ico") return;
            // const { render, renderActions } = await server.ssrLoadModule(
            //   path.join(path.dirname(fileURLToPath(import.meta.url)), "entries", "devServer.tsx")
            // );
            // if (req.method === "POST") {
            //   let e;
            //   const body = await getBody(req);
            //   if ((e = await renderActions(req.url, body))) {
            //     res.statusCode = e.status;
            //     res.write(e.body);
            //     res.end();
            //     return;
            //   }
            // }
            // res.statusCode = 200;
            // res.setHeader("content-type", "text/html");
            // render({ url: req.url, writable: res });
          } catch (e) {
            // server && server.ssrFixStacktrace(e);
            // console.log(e.stack);
            // res.statusCode = 500;
            // res.end(e.stack);
          }
        });
      },
      // server: () => {
      // let hasListened = false;
      // const openSockets = new Set<net.Socket>();
      // s.httpServer.on("connection", socket => {
      //   openSockets.add(socket);
      //   socket.on("close", () => {
      //     openSockets.delete(socket);
      //   });
      // });
      // s.once("listening", () => {
      //   hasListened = true;
      // });
      // openSockets.forEach(s => s.destroy());
      // s.close(err => {});
      // },
      enforce: "pre"
    },
    mdx({
      transformMDX: code => {
        return code.replace(/<\!--[a-zA-Z\.\s]+-->/g, ` `);
      },
      xdm: {
        remarkPlugins: [(await import("remark-gfm")).default]
      }
    }),
    // for the playground, we need to be able to use the solid-three package itself
    solidPlugin({
      solid: {
        moduleName: "solid-js/web",
        // @ts-ignore
        generate: "dynamic",
        renderers: [
          {
            name: "dom",
            moduleName: "solid-js/web",
            elements: [...HTMLElements, ...SVGElements]
          },
          {
            name: "universal",
            moduleName: "/src/renderer.tsx",
            elements: []
          }
        ]
      }
    }),
    windiCSS({
      scan: {
        fileExtensions: ["html", "js", "ts", "md", "mdx", "jsx", "tsx"]
      }
    }),
    inspect(),
    {
      config: config => {
        config.server.middlewareMode = false;
      },
      enforce: "post"
    }
  ]
}));
