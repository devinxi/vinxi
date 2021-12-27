import { notifyManager } from "react-query/core";
import { noop, parseMutationArgs } from "./utils";
import { MutationObserver } from "react-query/core";
import { useQueryClient } from "./QueryClientProvider";
import { CreateMutateFunction, CreateMutationOptions, CreateMutationResult } from "./types";
import { MutationFunction, MutationKey } from "react-query/core";
import { shouldThrowError } from "./utils";

// HOOK

export function createMutation<
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown
>(
  options: CreateMutationOptions<TData, TError, TVariables, TContext>
): CreateMutationResult<TData, TError, TVariables, TContext>;
export function createMutation<
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown
>(
  mutationFn: MutationFunction<TData, TVariables>,
  options?: Omit<CreateMutationOptions<TData, TError, TVariables, TContext>, "mutationFn">
): CreateMutationResult<TData, TError, TVariables, TContext>;
export function createMutation<
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown
>(
  mutationKey: MutationKey,
  options?: Omit<CreateMutationOptions<TData, TError, TVariables, TContext>, "mutationKey">
): CreateMutationResult<TData, TError, TVariables, TContext>;
export function createMutation<
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown
>(
  mutationKey: MutationKey,
  mutationFn?: MutationFunction<TData, TVariables>,
  options?: Omit<
    CreateMutationOptions<TData, TError, TVariables, TContext>,
    "mutationKey" | "mutationFn"
  >
): CreateMutationResult<TData, TError, TVariables, TContext>;
export function createMutation<
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown
>(
  arg1:
    | MutationKey
    | MutationFunction<TData, TVariables>
    | CreateMutationOptions<TData, TError, TVariables, TContext>,
  arg2?:
    | MutationFunction<TData, TVariables>
    | CreateMutationOptions<TData, TError, TVariables, TContext>,
  arg3?: CreateMutationOptions<TData, TError, TVariables, TContext>
): CreateMutationResult<TData, TError, TVariables, TContext> {
  const mountedRef = useRef(false);
  const [, forceUpdate] = React.useState(0);

  const options = parseMutationArgs(arg1, arg2, arg3);
  const queryClient = useQueryClient();

  const obsRef = useRef<MutationObserver<any, any, any, any>>();

  if (!obsRef.current) {
    obsRef.current = new MutationObserver(queryClient, options);
  } else {
    obsRef.current.setOptions(options);
  }

  const currentResult = obsRef.current.getCurrentResult();

  createEffect(() => {
    mountedRef.current = true;

    const unsubscribe = obsRef.current!.subscribe(
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
  }, []);

  const mutate = (variables, mutateOptions) => {
    obsRef.current!.mutate(variables, mutateOptions).catch(noop);
  };

  if (
    currentResult.error &&
    shouldThrowError(undefined, obsRef.current.options.useErrorBoundary, currentResult.error)
  ) {
    throw currentResult.error;
  }

  return { ...currentResult, mutate, mutateAsync: currentResult.mutate };
}
