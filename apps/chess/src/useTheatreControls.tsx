import { createEffect } from "solid-js";
import { useTheatre } from "./App";
import { createStore } from "solid-js/store";


export function useTheatreControls<T>(name: string, data: T): T {
  const sheet = useTheatre();
  let object = sheet.object(
    // The object's key is "Fist object"
    name,
    // These are the object's default values (and as we'll later learn, its props types)
    data
  );

  const [store, setStore] = createStore(object.data);

  createEffect(() => {
    object.onValuesChange(function callback(newValue) {
      setStore(newValue);
    });
  });

  return store;
}
