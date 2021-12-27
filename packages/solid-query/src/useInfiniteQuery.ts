import { QueryObserver } from "react-query/core";
import { InfiniteQueryObserver } from "react-query/core";
import { QueryFunction, QueryKey } from "react-query/core";
import { parseQueryArgs } from "./utils";
import { CreateInfiniteQueryOptions, CreateInfiniteQueryResult } from "./types";
import { createBaseQuery } from "./createBaseQuery";

// HOOK

export function useInfiniteQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
>(
  options: CreateInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryFnData, TQueryKey>
): CreateInfiniteQueryResult<TData, TError>;
export function useInfiniteQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
>(
  queryKey: TQueryKey,
  options?: Omit<
    CreateInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryFnData, TQueryKey>,
    "queryKey"
  >
): CreateInfiniteQueryResult<TData, TError>;
export function useInfiniteQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
>(
  queryKey: TQueryKey,
  queryFn: QueryFunction<TQueryFnData, TQueryKey>,
  options?: Omit<
    CreateInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryFnData, TQueryKey>,
    "queryKey" | "queryFn"
  >
): CreateInfiniteQueryResult<TData, TError>;
export function useInfiniteQuery<
  TQueryFnData,
  TError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
>(
  arg1: TQueryKey | CreateInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryFnData, TQueryKey>,
  arg2?:
    | QueryFunction<TQueryFnData, TQueryKey>
    | CreateInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryFnData, TQueryKey>,
  arg3?: CreateInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryFnData, TQueryKey>
): CreateInfiniteQueryResult<TData, TError> {
  const options = parseQueryArgs(arg1, arg2, arg3);
  return createBaseQuery(
    options,
    InfiniteQueryObserver as typeof QueryObserver
  ) as CreateInfiniteQueryResult<TData, TError>;
}
