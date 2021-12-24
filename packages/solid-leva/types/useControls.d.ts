import type { FolderSettings, Schema, SchemaToValues, StoreType } from "./types";
import { Accessor } from "solid-js";
declare type HookSettings = {
    store?: StoreType;
};
declare type SchemaOrFn<S extends Schema = Schema> = S | (() => S);
declare type FunctionReturnType<S extends Schema> = [
    Accessor<SchemaToValues<S>>,
    (value: {
        [K in keyof Partial<SchemaToValues<S, true>>]: any;
    }) => void
];
declare type ReturnType<F extends SchemaOrFn> = F extends SchemaOrFn<infer S> ? F extends Function ? FunctionReturnType<S> : FunctionReturnType<S> : never;
declare type HookReturnType<F extends SchemaOrFn | string, G extends SchemaOrFn> = F extends SchemaOrFn ? ReturnType<F> : ReturnType<G>;
/**
 *
 * @param schemaOrFolderName
 * @param settingsOrDepsOrSchema
 * @param folderSettingsOrDeps
 * @param depsOrUndefined
 */
export declare function createControls<S extends Schema, F extends SchemaOrFn<S> | string, G extends SchemaOrFn<S>>(schemaOrFolderName: F, settingsOrDepsOrSchema?: HookSettings | G, depsOrSettingsOrFolderSettings?: HookSettings | FolderSettings, depsOrSettings?: HookSettings): HookReturnType<F, G>;
export {};
//# sourceMappingURL=useControls.d.ts.map