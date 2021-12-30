import inspect from "vite-plugin-inspect";
import { PluginOption } from "vite";

export default (options?: { enabled: boolean }) => inspect(options) as PluginOption;
