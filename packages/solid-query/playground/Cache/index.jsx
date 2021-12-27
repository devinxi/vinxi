import { createContext, useContext, createResource, onCleanup } from "solid-js";

// 10 seconds default
const CACHE_TIME = 10000;
const CacheContext = createContext({ data: {}, timeout: CACHE_TIME });

function fetch(cache, fn, key, info) {
  const value = fn(key, info);
  const cached = (cache[key] = { value, time: Date.now() });
  if ("then" in value) {
    value.then((v) => (cached.value = v));
  }
  return value;
}

export function Cache(props) {
  return (
    <CacheContext.Provider
      value={{ data: {}, timeout: props.timeoutMs || CACHE_TIME }}
    >
      {props.children}
    </CacheContext.Provider>
  );
}

export function createQuery(src, fn, options) {
  const { data: cache, timeout } = useContext(CacheContext);
  return createResource(
    src,
    (key, info) => {
      const cached = cache[key];
      if (
        cached &&
        cached.time + timeout > Date.now() &&
        info.refetching !== true &&
        info.refetching !== key
      ) {
        return cached.value;
      }

      return fetch(cache, fn, key, info);
    },
    options
  );
}
