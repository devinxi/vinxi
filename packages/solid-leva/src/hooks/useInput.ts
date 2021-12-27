import { createEffect, createSignal, Accessor, onCleanup } from "solid-js";
import shallow from "zustand/shallow";
import { useStoreContext } from "../context";
import type { Data, DataItem } from "../types";

const getInputAtPath = (data: Data, path: string) => {
  if (!data[path]) return null;
  const { __refCount, ...input } = data[path];
  return input;
};

export type Input = Omit<DataItem, "__refCount">;

/**
 * Return all input (value and settings) properties at a given path.
 *
 * @param path
 */
export function useInput(path: string) {
  const store = useStoreContext();

  const [state, setState] = createSignal<Input | null>(getInputAtPath(store.getData(), path));

  const set = value => store.setValueAtPath(path, value, true);
  const setSettings = settings => store.setSettingsAtPath(path, settings);
  const disable = flag => store.disableInputAtPath(path, flag);
  const emitOnEditStart = () => store.emitOnEditStart(path);
  const emitOnEditEnd = () => store.emitOnEditEnd(path);

  createEffect(() => {
    setState(getInputAtPath(store.getData(), path) as any);

    const unsub = store.useStore.subscribe(
      (s: any) => getInputAtPath(s.data, path),
      (v: any) => setState(v),
      shallow
    );
    onCleanup(() => unsub());
  });

  return [
    state,
    {
      set,
      setSettings,
      disable,
      storeId: store.storeId,
      emitOnEditStart,
      emitOnEditEnd
    }
  ] as const;
}
