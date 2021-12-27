import { QueryFunction, QueriesObserver, notifyManager } from "react-query/core";

import { useQueryClient } from "./QueryClientProvider";
import { CreateQueryOptions, CreateQueryResult } from "./types";

// Avoid TS depth-limit error in case of large array literal
type MAXIMUM_DEPTH = 20;

type GetOptions<T extends any> =
  // Part 1: responsible for applying explicit type parameter to function arguments, if object { queryFnData: TQueryFnData, error: TError, data: TData }
  T extends {
    queryFnData: infer TQueryFnData;
    error?: infer TError;
    data: infer TData;
  }
    ? CreateQueryOptions<TQueryFnData, TError, TData>
    : T extends { queryFnData: infer TQueryFnData; error?: infer TError }
    ? CreateQueryOptions<TQueryFnData, TError>
    : T extends { data: infer TData; error?: infer TError }
    ? CreateQueryOptions<unknown, TError, TData>
    : // Part 2: responsible for applying explicit type parameter to function arguments, if tuple [TQueryFnData, TError, TData]
    T extends [infer TQueryFnData, infer TError, infer TData]
    ? CreateQueryOptions<TQueryFnData, TError, TData>
    : T extends [infer TQueryFnData, infer TError]
    ? CreateQueryOptions<TQueryFnData, TError>
    : T extends [infer TQueryFnData]
    ? CreateQueryOptions<TQueryFnData>
    : // Part 3: responsible for inferring and enforcing type if no explicit parameter was provided
    T extends {
        queryFn?: QueryFunction<infer TQueryFnData>;
        select: (data: any) => infer TData;
      }
    ? CreateQueryOptions<TQueryFnData, unknown, TData>
    : T extends { queryFn?: QueryFunction<infer TQueryFnData> }
    ? CreateQueryOptions<TQueryFnData>
    : // Fallback
      CreateQueryOptions;

type GetResults<T> =
  // Part 1: responsible for mapping explicit type parameter to function result, if object
  T extends { queryFnData: any; error?: infer TError; data: infer TData }
    ? CreateQueryResult<TData, TError>
    : T extends { queryFnData: infer TQueryFnData; error?: infer TError }
    ? CreateQueryResult<TQueryFnData, TError>
    : T extends { data: infer TData; error?: infer TError }
    ? CreateQueryResult<TData, TError>
    : // Part 2: responsible for mapping explicit type parameter to function result, if tuple
    T extends [any, infer TError, infer TData]
    ? CreateQueryResult<TData, TError>
    : T extends [infer TQueryFnData, infer TError]
    ? CreateQueryResult<TQueryFnData, TError>
    : T extends [infer TQueryFnData]
    ? CreateQueryResult<TQueryFnData>
    : // Part 3: responsible for mapping inferred type to results, if no explicit parameter was provided
    T extends {
        queryFn?: QueryFunction<any>;
        select: (data: any) => infer TData;
      }
    ? CreateQueryResult<TData>
    : T extends { queryFn?: QueryFunction<infer TQueryFnData> }
    ? CreateQueryResult<TQueryFnData>
    : // Fallback
      CreateQueryResult;

/**
 * QueriesOptions reducer recursively unwraps function arguments to infer/enforce type param
 */
type QueriesOptions<
  T extends any[],
  Result extends any[] = [],
  Depth extends ReadonlyArray<number> = []
> = Depth["length"] extends MAXIMUM_DEPTH
  ? CreateQueryOptions[]
  : T extends []
  ? []
  : T extends [infer Head]
  ? [...Result, GetOptions<Head>]
  : T extends [infer Head, ...infer Tail]
  ? QueriesOptions<[...Tail], [...Result, GetOptions<Head>], [...Depth, 1]>
  : unknown[] extends T
  ? T
  : // If T is *some* array but we couldn't assign unknown[] to it, then it must hold some known/homogenous type!
  // use this to infer the param types in the case of Array.map() argument
  T extends CreateQueryOptions<infer TQueryFnData, infer TError, infer TData>[]
  ? CreateQueryOptions<TQueryFnData, TError, TData>[]
  : // Fallback
    CreateQueryOptions[];

/**
 * QueriesResults reducer recursively maps type param to results
 */
type QueriesResults<
  T extends any[],
  Result extends any[] = [],
  Depth extends ReadonlyArray<number> = []
> = Depth["length"] extends MAXIMUM_DEPTH
  ? CreateQueryResult[]
  : T extends []
  ? []
  : T extends [infer Head]
  ? [...Result, GetResults<Head>]
  : T extends [infer Head, ...infer Tail]
  ? QueriesResults<[...Tail], [...Result, GetResults<Head>], [...Depth, 1]>
  : T extends CreateQueryOptions<infer TQueryFnData, infer TError, infer TData>[]
  ? // Dynamic-size (homogenous) UseQueryOptions array: map directly to array of results
    CreateQueryResult<unknown extends TData ? TQueryFnData : TData, TError>[]
  : // Fallback
    CreateQueryResult[];

export function useQueries<T extends any[]>(
  queries: readonly [...QueriesOptions<T>]
): QueriesResults<T> {
  const mountedRef = useRef(false);
  const [, forceUpdate] = React.useState(0);

  const queryClient = useQueryClient();

  const defaultedQueries = useMemo(
    () =>
      queries.map(options => {
        const defaultedOptions = queryClient.defaultQueryObserverOptions(options);

        // Make sure the results are already in fetching state before subscribing or updating options
        defaultedOptions.optimisticResults = true;

        return defaultedOptions;
      }),
    [queries, queryClient]
  );

  const [observer] = React.useState(() => new QueriesObserver(queryClient, defaultedQueries));

  const result = observer.getOptimisticResult(defaultedQueries);

  createEffect(() => {
    mountedRef.current = true;

    const unsubscribe = observer.subscribe(
      notifyManager.batchCalls(() => {
        if (mountedRef.current) {
          forceUpdate(x => x + 1);
        }
      })
    );

    return () => {
      mountedRef.current = false;
      unsubscribe();
    };
  }, [observer]);

  createEffect(() => {
    // Do not notify on updates because of changes in the options because
    // these changes should already be reflected in the optimistic result.
    observer.setQueries(defaultedQueries, { listeners: false });
  }, [defaultedQueries, observer]);

  return result as QueriesResults<T>;
}
