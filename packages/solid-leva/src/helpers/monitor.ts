import { SpecialInputs } from "../types";
import type { MonitorInput, MonitorSettings } from "../types";
import { RefObject } from "solid-react-compat";

const defaultSettings = { graph: false, interval: 100 };

export function monitor(
  objectOrFn: RefObject<any> | Function,
  settings?: MonitorSettings
): MonitorInput {
  return {
    type: SpecialInputs.MONITOR,
    objectOrFn,
    settings: { ...defaultSettings, ...settings },
  };
}
