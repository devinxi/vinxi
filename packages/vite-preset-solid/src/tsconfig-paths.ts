import tsconfigPaths from "vite-tsconfig-paths";
import { PluginOption } from "vite";
export default (...options: any) => tsconfigPaths(...options) as PluginOption;
