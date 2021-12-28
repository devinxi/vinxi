export default function (
  options?: {
    tsconfigPaths?: Parameters<typeof import("vite-tsconfig-paths")["default"]>[0];
    inspect?: Parameters<typeof import("vite-plugin-inspect")["default"]>[0];
  } & Partial<import("@vinxi/vite-plugin-solid").Options>
): any;
