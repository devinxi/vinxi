import { QueryObserver } from "react-query/core";
import { QueryFunction, QueryKey } from "react-query/core";
import { CreateQueryOptions, CreateQueryResult, ExtractQueryType, QueryKeyOrSignal } from "./types";
import { createBaseQuery } from "./createBaseQuery";

export function createQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKeyOrSignal = QueryKeyOrSignal
>(
  queryKey: TQueryKey,
  queryFn: QueryFunction<TQueryFnData, ExtractQueryType<TQueryKey>>,
  options?: Omit<CreateQueryOptions<TQueryFnData, TError, TData, TQueryKey>, "queryKey" | "queryFn">
): CreateQueryResult<TData, TError> {
  return createBaseQuery(
    {
      queryKeySignal: queryKey,
      queryFn,
      ...options
    },
    QueryObserver
  );
}
