import { QueryObserver } from "react-query/core";
import { QueryFunction, QueryKey } from "react-query/core";
import { parseQueryArgs } from "./utils";
import { CreateQueryOptions, CreateQueryResult } from "./types";
import { createBaseQuery } from "./createBaseQuery";

// HOOK

export function createQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
>(options: CreateQueryOptions<TQueryFnData, TError, TData, TQueryKey>): CreateQueryResult<TData, TError>;
export function createQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
>(
  queryKey: TQueryKey,
  options?: Omit<CreateQueryOptions<TQueryFnData, TError, TData, TQueryKey>, "queryKey">
): CreateQueryResult<TData, TError>;
export function createQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
>(
  queryKey: TQueryKey,
  queryFn: QueryFunction<TQueryFnData, TQueryKey>,
  options?: Omit<CreateQueryOptions<TQueryFnData, TError, TData, TQueryKey>, "queryKey" | "queryFn">
): CreateQueryResult<TData, TError>;
export function createQuery<
  TQueryFnData,
  TError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
>(
  arg1: TQueryKey | CreateQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
  arg2?:
    | QueryFunction<TQueryFnData, TQueryKey>
    | CreateQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
  arg3?: CreateQueryOptions<TQueryFnData, TError, TData, TQueryKey>
): CreateQueryResult<TData, TError> {
  const parsedOptions = parseQueryArgs(arg1, arg2, arg3);
  return createBaseQuery(parsedOptions, QueryObserver);
}
