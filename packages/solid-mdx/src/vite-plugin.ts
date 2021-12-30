import { readFileSync } from "fs";
import path from "path";
import resolve from "resolve";
import type { PluginOption, UserConfig } from "vite";

function isMDX(id: string) {
  let [filePath, params] = id.split("?");
  return (/\.mdx?(.tsx)?/.test(filePath) || params?.includes("mdx")) && !id.includes("raw");
}

function makeMDXPath(id: string) {
  let [filePath, params] = id.split("?");
  return id.replace("?mdx", "").replace(".tsx", "") + ".tsx?mdx";
}
export default ({
  transformMDX = (mdx, { id }) => mdx,
  transformTSX = (tsx, { id }) => tsx,
  xdm = {}
}: {
  transformMDX?: (file: string, props: { id: string }) => string;
  transformTSX?: (file: string, props: { id: string }) => string;
  xdm?: Partial<Parameters<typeof import("xdm")["compile"]>>[1];
} = {}): PluginOption => {
  console.log(xdm);
  let resolvedConfig: UserConfig;
  return {
    name: "mdx",
    // configureServer: server => {
    //   server.watcher.add(process.cwd() + "**/*.mdx?");
    // },
    configResolved: config => {
      resolvedConfig = config as any;
    },
    resolveId: (id, importer) => {
      if (path.isAbsolute(id)) {
        console.log("resolve absolute", id);
        if (isMDX(id)) {
          let resolvedPath = makeMDXPath(id);
          let root = resolvedConfig.root?.length ? resolvedConfig.root : process.cwd();
          return {
            id: resolvedPath.startsWith(root) ? resolvedPath : root + resolvedPath
          };
        }
      } else {
        let [filePath, params] = id.split("?");
        if (isMDX(id)) {
          let resolvedPath = makeMDXPath(
            resolve.sync(filePath, {
              basedir: path.dirname(importer!),
              extensions: [".mdx", ".md"]
            })
          );
          let root = resolvedConfig.root?.length ? resolvedConfig.root : process.cwd();
          return {
            id: resolvedPath.startsWith(root) ? resolvedPath : root + resolvedPath
          };
        }
      }
    },
    load: async id => {
      let [filePath, params] = id.split("?");
      console.log("load", filePath, isMDX(id));

      if (isMDX(id)) {
        return transformMDX(
          `import "${filePath.replace(".tsx", "")}?raw"\n\n` +
            readFileSync(filePath.replace(".tsx", ""), "utf-8"),
          {
            id
          }
        );
      }
    },
    transform: async (code, id) => {
      const { compile } = await import("xdm");
      let [filePath, params] = id.split("?");
      if (filePath.endsWith(".tsx") && params?.includes("mdx")) {
        // console.log("original", code);
        let transformedCode = (
          await compile(code, {
            jsx: true,
            development: true,
            jsxImportSource: "solid-js",
            providerImportSource: "solid-mdx",
            ...xdm
          })
        ).value as string;
        // console.log("transformed", transformedCode);
        return {
          code: transformTSX(transformedCode, { id })
        };
      }
    },
    enforce: "pre"
  };
};
