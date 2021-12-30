import solidPlugin from "./solid";
import undestructurePlugin from "./solid-undestructure";
import tsconfigPaths from "./tsconfig-paths";
import inspect from "./inspect";
import { PluginOption } from "vite";

let plugin = ({
  tsconfigPaths: tsconfigPathsOptions = {},
  inspect: inspectOptions = { enabled: true },
  ...config
} = {}) => {
  return [
    tsconfigPaths(tsconfigPathsOptions),
    undestructurePlugin(),
    solidPlugin(config),
    inspect(inspectOptions)
  ] as PluginOption[];
};

export default plugin;
