import {
  InfiniteQueryObserverOptions,
  InfiniteQueryObserverResult,
  MutationObserverResult,
  QueryObserverOptions,
  QueryObserverResult,
  QueryKey,
  MutationObserverOptions,
  MutateFunction
} from "react-query/core";
import { Resource } from "solid-js";
import { ResourceActions } from "solid-js/types/reactive/signal";

export interface CreateBaseQueryOptions<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
> extends QueryObserverOptions<TQueryFnData, TError, TData, TQueryData, TQueryKey> {}

export interface CreateQueryOptions<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
> extends CreateBaseQueryOptions<TQueryFnData, TError, TData, TQueryFnData, TQueryKey> {}

export interface CreateInfiniteQueryOptions<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
> extends InfiniteQueryObserverOptions<TQueryFnData, TError, TData, TQueryData, TQueryKey> {}

export type CreateBaseQueryResult<TData = unknown, TError = unknown> = [
  Resource<QueryObserverResult>,
  ResourceActions<TData> & { query: QueryObserverResult<TData, TError> }
];

export type CreateQueryResult<TData = unknown, TError = unknown> = CreateBaseQueryResult<
  TData,
  TError
>;

export type CreateInfiniteQueryResult<
  TData = unknown,
  TError = unknown
> = InfiniteQueryObserverResult<TData, TError>;

export interface CreateMutationOptions<
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown
> extends Omit<
    MutationObserverOptions<TData, TError, TVariables, TContext>,
    "_defaulted" | "variables"
  > {}

export type CreateMutateFunction<
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown
> = (...args: Parameters<MutateFunction<TData, TError, TVariables, TContext>>) => void;

export type CreateMutateAsyncFunction<
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown
> = MutateFunction<TData, TError, TVariables, TContext>;

export type CreateBaseMutationResult<
  TData = unknown,
  TError = unknown,
  TVariables = unknown,
  TContext = unknown
> = Override<
  MutationObserverResult<TData, TError, TVariables, TContext>,
  { mutate: CreateMutateFunction<TData, TError, TVariables, TContext> }
> & { mutateAsync: CreateMutateAsyncFunction<TData, TError, TVariables, TContext> };

export type CreateMutationResult<
  TData = unknown,
  TError = unknown,
  TVariables = unknown,
  TContext = unknown
> = CreateBaseMutationResult<TData, TError, TVariables, TContext>;

type Override<A, B> = { [K in keyof A]: K extends keyof B ? B[K] : A[K] };
