import type { Logger } from "react-query/core";

export const logger: Logger = {
  log: console.log,
  warn: console.warn,
  error: console.warn
};
