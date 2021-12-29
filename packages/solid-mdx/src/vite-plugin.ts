import { readFileSync } from "fs";
import path from "path";
import resolve from "resolve";
import type { Plugin } from "vite";
export default (): Plugin => {
  return {
    name: "mdx",
    resolveId: (id, importer) => {
      if (path.isAbsolute(id)) {
      } else {
        let [filePath, params] = id.split("?");
        if (params?.includes("mdx")) {
          return {
            id:
              process.cwd() +
              resolve.sync(filePath, {
                basedir: path.dirname(importer!),
                extensions: [".mdx", ".md"]
              }) +
              ".tsx?mdx"
          };
        }
      }
    },
    load: async id => {
      let [filePath, params] = id.split("?");

      if (filePath.endsWith(".tsx") && params?.includes("mdx")) {
        return readFileSync(filePath.replace(".tsx", ""), "utf-8");
      }
    },
    transform: async (code, id) => {
      const { compile } = await import("xdm");
      let [filePath, params] = id.split("?");
      if (filePath.endsWith(".tsx") && params?.includes("mdx")) {
        return {
          code: (
            await compile(code, {
              jsx: true,
              development: true,
              jsxImportSource: "solid-js",
              providerImportSource: "solid-mdx"
            })
          ).value as string
        };
      }
    },
    enforce: "pre"
  };
};
