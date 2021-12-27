import { useRef } from "solid-react-compat";
import { hydrate, HydrateOptions } from "react-query/core";
import { Component, createMemo } from "solid-js";
import { useQueryClient } from "./QueryClientProvider";

export function useHydrate(state: unknown, options?: HydrateOptions) {
  const queryClient = useQueryClient();

  const optionsRef = useRef(options);
  optionsRef.current = options!;

  // Running hydrate again with the same queries is safe,
  // it wont overwrite or initialize existing queries,
  // relying on useMemo here is only a performance optimization.
  // hydrate can and should be run *during* render here for SSR to work properly
  createMemo(() => {
    if (state) {
      hydrate(queryClient, state, optionsRef.current!);
    }
  }, [queryClient, state]);
}

export interface HydrateProps {
  state?: unknown;
  options?: HydrateOptions;
}

export const Hydrate: Component<HydrateProps> = ({ children, options, state }) => {
  useHydrate(state, options);
  return <>{children}</>;
};
