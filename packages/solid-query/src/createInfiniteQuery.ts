import { QueryObserver } from "react-query/core";
import { InfiniteQueryObserver } from "react-query/core";
import { QueryFunction, QueryKey } from "react-query/core";
import { parseQueryArgs } from "./utils";
import {
  CreateInfiniteQueryOptions,
  CreateInfiniteQueryResult,
  ExtractQueryType,
  QueryKeyOrSignal
} from "./types";
import { createBaseQuery } from "./createBaseQuery";

export function useInfiniteQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKeyOrSignal = QueryKeyOrSignal
>(
  queryKey: TQueryKey,
  queryFn: QueryFunction<TQueryFnData, ExtractQueryType<TQueryKey>>,
  options?: Omit<
    CreateInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryFnData, TQueryKey>,
    "queryKey" | "queryFn"
  >
): CreateInfiniteQueryResult<TData, TError> {
  return createBaseQuery(
    {
      queryKeySignal: queryKey,
      queryFn,
      ...options
    },
    InfiniteQueryObserver as typeof QueryObserver
  ) as CreateInfiniteQueryResult<TData, TError>;
}
