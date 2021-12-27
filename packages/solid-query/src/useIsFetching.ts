import { notifyManager } from "react-query/core";
import { QueryKey } from "react-query/core";
import { parseFilterArgs, QueryFilters } from "./utils";
import { useQueryClient } from "./QueryClientProvider";

export function useIsFetching(filters?: QueryFilters): number;
export function useIsFetching(queryKey?: QueryKey, filters?: QueryFilters): number;
export function useIsFetching(arg1?: QueryKey | QueryFilters, arg2?: QueryFilters): number {
  const mountedRef = useRef(false);

  const queryClient = useQueryClient();

  const [filters] = parseFilterArgs(arg1, arg2);
  const [isFetching, setIsFetching] = React.useState(queryClient.isFetching(filters));

  const filtersRef = useRef(filters);
  filtersRef.current = filters;
  const isFetchingRef = useRef(isFetching);
  isFetchingRef.current = isFetching;

  createEffect(() => {
    mountedRef.current = true;

    const unsubscribe = queryClient.getQueryCache().subscribe(
      notifyManager.batchCalls(() => {
        if (mountedRef.current) {
          const newIsFetching = queryClient.isFetching(filtersRef.current);
          if (isFetchingRef.current !== newIsFetching) {
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
