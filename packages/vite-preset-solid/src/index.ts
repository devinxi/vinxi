import solidPlugin from "./solid";
import undestructurePlugin from "./solid-undestructure";
import tsconfigPaths from "./tsconfig-paths";
import inspect from "./inspect";
import { PluginOption } from "vite";

let plugin = ({
  tsconfigPaths: tsconfigPathsOptions = {},
  inspect: inspectOptions = { enabled: true },
  ...config
}: {
  tsconfigPaths?: any;
  inspect?: any;
  babel?: any;
} = {}) => {
  return [
    tsconfigPaths(tsconfigPathsOptions),
    undestructurePlugin("ts", config.babel ?? {}),
    solidPlugin(config),
    inspect(inspectOptions)
  ] as PluginOption[];
};

export default plugin;
