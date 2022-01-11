import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";

export function makeObservable(t) {}

export function observable(obj: any, prop: string): any;
export function observable(obj: any, prop: string, desc?: any): any {
  const [signal, setSignal] = createSignal(desc.initializer?.());
  console.log(obj, prop, desc);
  return {
    enumerable: false,
    configurable: true,
    get: () => {
      return signal();
    },
    set: (newVal: any) => {
      setSignal(() => newVal);
    }
  };
}

export function store(obj: any, prop: string, desc?: any): any {
  const [signal, setSignal] = createStore(desc.initializer?.());
  console.log(obj, prop, desc);
  return {
    enumerable: false,
    configurable: true,
    get: () => {
      return signal;
    },
    set: (newVal: any) => {
      setSignal(() => newVal);
    }
  };
}

export function computed(obj: any, prop: string, val): any {
  const [signal, setSignal] = createSignal();
  console.log(obj, prop, val);
  return {
    enumerable: false,
    configurable: true,
    get: () => {
      return signal();
    },
    set: (newVal: any) => {
      setSignal(() => newVal);
    }
  };
}
