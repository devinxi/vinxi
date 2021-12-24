import { createEffect, createSignal } from "solid-js";
import shallow from "zustand/shallow";
import { useStoreContext } from "../context";
import type { Data, DataItem } from "../types";

const getInputAtPath = (data: Data, path: string) => {
  if (!data[path]) return null;
  const { __refCount, ...input } = data[path];
  return input;
};

type Input = Omit<DataItem, "__refCount">;

/**
 * Return all input (value and settings) properties at a given path.
 *
 * @param path
 */
export function useInput(path: string) {
  const store = useStoreContext();

  const [state, setState] = createSignal<Input | null>(
    getInputAtPath(store.getData(), path)
  );

  const set = (value) => store.setValueAtPath(path, value, true);
  const setSettings = (settings) => store.setSettingsAtPath(path, settings);
  const disable = (flag) => store.disableInputAtPath(path, flag);
  const emitOnEditStart = () => store.emitOnEditStart(path);
  const emitOnEditEnd = () => store.emitOnEditEnd(path);

  createEffect(() => {
    setState(getInputAtPath(store.getData(), path));

    const unsub = store.useStore.subscribe(
      (s) => getInputAtPath(s.data, path),
      setState,
      shallow
    );
    return () => unsub();
  }, [store, path]);

  return [
    state,
    {
      set,
      setSettings,
      disable,
      storeId: store.storeId,
      emitOnEditStart,
      emitOnEditEnd,
    },
  ] as const;
}
