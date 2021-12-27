import { folder as levaFolder } from "solid-leva";
import type { FolderInput, FolderSettings, Schema, SchemaToValues } from "solid-leva";
import { createControls } from "solid-leva";

declare type HookSettings = {
  store?: any;
};
declare type SchemaOrFn<S extends Schema = Schema> = S | (() => S);
declare type FunctionReturnType<S extends Schema> = [
  SchemaToValues<S>,
  (value: {
    [K in keyof Partial<SchemaToValues<S, true>>]: any;
  }) => void
];
declare type ReturnType<F extends SchemaOrFn> = F extends SchemaOrFn<infer S>
  ? F extends Function
    ? FunctionReturnType<S>
    : SchemaToValues<S>
  : never;

export function useControls<S extends Schema, F extends string, G extends SchemaOrFn<S>>(
  folderName: F,
  schema?: G,
  settings?: HookSettings | FolderSettings
) {
  return createControls(folderName, schema, { collapsed: true, ...settings });
}

export function folder<S extends Schema>(
  schema: S,
  settings?: FolderSettings
): FolderInput<SchemaToValues<S>> {
  return levaFolder(schema, { collapsed: true, ...settings });
}
