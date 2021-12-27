// Side effects
import "./setBatchUpdatesFn";
import "./setLogger";

export { QueryClientProvider, useQueryClient } from "./QueryClientProvider";
export { QueryErrorResetBoundary, useQueryErrorResetBoundary } from "./QueryErrorResetBoundary";
export { useIsFetching } from "./useIsFetching";
export { useIsMutating } from "./useIsMutating";
export { createMutation as useMutation } from "./useMutation";
export { createQuery as useQuery } from "./createQuery";
export { useQueries } from "./useQueries";
export { useInfiniteQuery } from "./useInfiniteQuery";
export { useHydrate, Hydrate } from "./Hydrate";

export * from "react-query/core";

// Types
export * from "./types";
export type { QueryClientProviderProps } from "./QueryClientProvider";
export type { QueryErrorResetBoundaryProps } from "./QueryErrorResetBoundary";
export type { HydrateProps } from "./Hydrate";
