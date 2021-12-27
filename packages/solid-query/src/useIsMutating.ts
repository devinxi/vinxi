import { notifyManager } from "react-query/core";
import { QueryKey } from "react-query/core";
import { MutationFilters, parseMutationFilterArgs } from "./utils";
import { useQueryClient } from "./QueryClientProvider";

export function useIsMutating(filters?: MutationFilters): number;
export function useIsMutating(queryKey?: QueryKey, filters?: MutationFilters): number;
export function useIsMutating(arg1?: QueryKey | MutationFilters, arg2?: MutationFilters): number {
  const mountedRef = useRef(false);
  const filters = parseMutationFilterArgs(arg1, arg2);

  const queryClient = useQueryClient();

  const [isMutating, setIsMutating] = React.useState(queryClient.isMutating(filters));

  const filtersRef = useRef(filters);
  filtersRef.current = filters;
  const isMutatingRef = useRef(isMutating);
  isMutatingRef.current = isMutating;

  createEffect(() => {
    mountedRef.current = true;

    const unsubscribe = queryClient.getMutationCache().subscribe(
      notifyManager.batchCalls(() => {
        if (mountedRef.current) {
          const newIsMutating = queryClient.isMutating(filtersRef.current);
          if (isMutatingRef.current !== newIsMutating) {
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
