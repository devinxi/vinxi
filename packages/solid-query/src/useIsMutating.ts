import { notifyManager } from "react-query/core";
import { QueryKey } from "react-query/core";
import { MutationFilters, parseMutationFilterArgs } from "./utils";
import { useQueryClient } from "./QueryClientProvider";
import { useRef } from "solid-react-compat";
import { Accessor, createEffect, createSignal } from "solid-js";

export function useIsMutating(filters?: MutationFilters): Accessor<number>;
export function useIsMutating(queryKey?: QueryKey, filters?: MutationFilters): Accessor<number>;
export function useIsMutating(
  arg1?: QueryKey | MutationFilters,
  arg2?: MutationFilters
): Accessor<number> {
  const mountedRef = useRef(false);
  const filters = parseMutationFilterArgs(arg1, arg2);

  const queryClient = useQueryClient();

  const [isMutating, setIsMutating] = createSignal(queryClient.isMutating(filters));

  createEffect(() => {
    mountedRef.current = true;

    const unsubscribe = queryClient.getMutationCache().subscribe(
      notifyManager.batchCalls(() => {
        if (mountedRef.current) {
          const newIsMutating = queryClient.isMutating(filters);
          if (isMutating() !== newIsMutating) {
            setIsMutating(newIsMutating);
          }
        }
      })
    );

    return () => {
      mountedRef.current = false;
      unsubscribe();
    };
  }, [queryClient]);

  return isMutating;
}
