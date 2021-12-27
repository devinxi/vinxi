import { notifyManager } from "react-query/core";
import { QueryKey } from "react-query/core";
import { parseFilterArgs, QueryFilters } from "./utils";
import { useQueryClient } from "./QueryClientProvider";
import { useRef } from "solid-react-compat";
import { Accessor, createEffect, createSignal } from "solid-js";

export function useIsFetching(filters?: QueryFilters): Accessor<number>;
export function useIsFetching(queryKey?: QueryKey, filters?: QueryFilters): Accessor<number>;
export function useIsFetching(
  arg1?: QueryKey | QueryFilters,
  arg2?: QueryFilters
): Accessor<number> {
  const mountedRef = useRef(false);

  const queryClient = useQueryClient();

  const [filters] = parseFilterArgs(arg1, arg2);
  const [isFetching, setIsFetching] = createSignal(queryClient.isFetching(filters));

  createEffect(() => {
    mountedRef.current = true;

    const unsubscribe = queryClient.getQueryCache().subscribe(
      notifyManager.batchCalls(() => {
        if (mountedRef.current) {
          const newIsFetching = queryClient.isFetching(filters);
          if (isFetching() !== newIsFetching) {
            setIsFetching(newIsFetching);
          }
        }
      })
    );

    return () => {
      mountedRef.current = false;
      unsubscribe();
    };
  }, [queryClient]);

  return isFetching;
}
