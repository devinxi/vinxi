import { QueryKey } from "react-query/core";
import { notifyManager } from "react-query/core";
import { QueryObserver } from "react-query/core";
import { useQueryErrorResetBoundary } from "./QueryErrorResetBoundary";
import { useQueryClient } from "./QueryClientProvider";
import { CreateBaseQueryOptions, QueryKeyOrSignal } from "./types";
import { useRef } from "solid-react-compat";
import {
  createComputed,
  createEffect,
  createMemo,
  createResource,
  createSignal,
  onCleanup,
  untrack
} from "solid-js";
import { createStore } from "solid-js/store";
import { CreateBaseQueryResult } from "./types";
import { ExtractQueryType } from ".";

export function createBaseQuery<
  TQueryFnData,
  TError,
  TData,
  TQueryData,
  TQueryKey extends QueryKeyOrSignal
>(
  options: CreateBaseQueryOptions<TQueryFnData, TError, TData, TQueryData, TQueryKey>,
  Observer: typeof QueryObserver
): CreateBaseQueryResult<TData, TError> {
  const mountedRef = useRef(false);

  const queryClient = useQueryClient();
  const errorResetBoundary = useQueryErrorResetBoundary();
  const [dOptions, setOptions] = createSignal(options);

  createComputed(() => {
    options.queryKey =
      typeof options.queryKeySignal === "function"
        ? options.queryKeySignal()
        : (options.queryKeySignal as any);

    console.log(options.queryKey);
    let defaultedOptions = queryClient.defaultQueryObserverOptions(options);
    // Make sure results are optimistically set in fetching state before subscribing or updating options
    defaultedOptions.optimisticResults = true;

    // Include callbacks in batch renders
    if (defaultedOptions.onError) {
      defaultedOptions.onError = notifyManager.batchCalls(defaultedOptions.onError);
    }

    if (defaultedOptions.onSuccess) {
      defaultedOptions.onSuccess = notifyManager.batchCalls(defaultedOptions.onSuccess);
    }

    if (defaultedOptions.onSettled) {
      defaultedOptions.onSettled = notifyManager.batchCalls(defaultedOptions.onSettled);
    }

    if (defaultedOptions.suspense) {
      // Always set stale time when using suspense to prevent
      // fetching again when directly mounting after suspending
      if (typeof defaultedOptions.staleTime !== "number") {
        defaultedOptions.staleTime = 1000;
      }

      // Set cache time to 1 if the option has been set to 0
      // when using suspense to prevent infinite loop of fetches
      if (defaultedOptions.cacheTime === 0) {
        defaultedOptions.cacheTime = 1;
      }
    }

    if (defaultedOptions.suspense || defaultedOptions.useErrorBoundary) {
      // Prevent retrying failed query if the error boundary has not been reset yet
      if (!errorResetBoundary.isReset()) {
        defaultedOptions.retryOnMount = false;
      }
    }

    setOptions(defaultedOptions as any);
  });

  const observer = createMemo(
    () =>
      new Observer<TQueryFnData, TError, TData, TQueryData, ExtractQueryType<TQueryKey>>(
        queryClient,
        dOptions()
      )
  );

  const getResult = () => observer().getOptimisticResult(dOptions());

  // const [result, setResult] = createStore();

  const [data, { refetch, mutate }] = createResource(
    () => dOptions().queryKey,
    () => {
      let currentResult = getResult();
      console.log("heree", currentResult);
      if (currentResult.data) {
        return currentResult.data;
      }
      let resolve;
      let reject;
      const promise = new Promise<TData>((res, rej) => {
        resolve = res;
        reject = rej;
      });

      let obs = observer();

      const unsubscribe = obs.subscribe(
        // () => {
        //   console.log("heree", observer.getOptimisticResult(defaultedOptions));
        //   setResult(observer.getOptimisticResult(defaultedOptions));
        // }
        () => {
          // if (mountedRef.current) {
          let result = untrack(() => obs.getOptimisticResult(dOptions()));
          // if (dOptions().notifyOnChangeProps === "tracked") {
          //   result = observer().trackResult(result, dOptions());
          // }
          console.log("hee", obs);

          console.log(result);

          if (result.error) {
            unsubscribe();
            reject(result.error);
          } else if (result.data) {
            unsubscribe();
            resolve(result.data);
          }
          // }
        }
      );

      return promise;
    }
  );

  // createEffect(() => {
  //   mountedRef.current = true;

  //   errorResetBoundary.clearReset();

  //   const unsubscribe = observer().subscribe(
  //     // () => {
  //     //   console.log("heree", observer.getOptimisticResult(defaultedOptions));
  //     //   setResult(observer.getOptimisticResult(defaultedOptions));
  //     // }
  //     notifyManager.batchCalls(() => {
  //       if (mountedRef.current) {
  //         let result = observer().getOptimisticResult(defaultedOptions());
  //         if (defaultedOptions().notifyOnChangeProps === "tracked") {
  //           result = observer().trackResult(result, defaultedOptions());
  //         }
  //         console.log("hereee", result);

  //         // mutate(result);
  //       }
  //     })
  //   );

  //   // Update result to make sure we did not miss any query updates
  //   // between creating the observer and subscribing to it.
  //   effect: {
  //     observer().updateResult();
  //   }

  //   onCleanup(() => {
  //     mountedRef.current = false;
  //     unsubscribe();
  //   });
  // });

  createEffect(() => {
    // Do not notify on updates because of changes in the options because
    // these changes should already be reflected in the optimistic result.
    observer().setOptions(dOptions(), { listeners: false });
  });

  // Handle suspense
  // if (defaultedOptions.suspense && result.isLoading) {
  //   throw observer
  //     .fetchOptimistic(defaultedOptions)
  //     .then(({ data }) => {
  //       defaultedOptions.onSuccess?.(data as TData);
  //       defaultedOptions.onSettled?.(data, null);
  //     })
  //     .catch(error => {
  //       errorResetBoundary.clearReset();
  //       defaultedOptions.onError?.(error);
  //       defaultedOptions.onSettled?.(undefined, error);
  //     });
  // }

  // Handle error boundary
  // if (
  //   result.isError &&
  //   !errorResetBoundary.isReset() &&
  //   !result.isFetching &&
  //   shouldThrowError(defaultedOptions.suspense, defaultedOptions.useErrorBoundary, result.error)
  // ) {
  //   throw result.error;
  // }

  // Handle result property usage tracking

  return [data, { refetch, mutate, query: observer() as any }];
}
