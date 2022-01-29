import { QueryClient } from "react-query/core";
import {
  Component,
  Context,
  createContext,
  createEffect,
  onCleanup,
  useContext,
} from "solid-js";

declare global {
  interface Window {
    ReactQueryClientContext?: Context<QueryClient | undefined>;
  }
}

const defaultContext = createContext<QueryClient | undefined>(undefined);
const QueryClientSharingContext = createContext<boolean>(false);

// if contextSharing is on, we share the first and at least one
// instance of the context across the window
// to ensure that if React Query is used across
// different bundles or microfrontends they will
// all use the same **instance** of context, regardless
// of module scoping.
function getQueryClientContext(contextSharing: boolean) {
  // if (contextSharing && typeof window !== "undefined") {
  //   if (!window.ReactQueryClientContext) {
  //     window.ReactQueryClientContext = defaultContext;
  //   }

  //   return window.ReactQueryClientContext;
  // }

  return defaultContext;
}

export const useQueryClient = () => {
  const queryClient = useContext(
    getQueryClientContext(useContext(QueryClientSharingContext)) as any
  );

  if (!queryClient) {
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  }

  return queryClient as QueryClient;
};

export interface QueryClientProviderProps {
  client: QueryClient;
  contextSharing?: boolean;
}

export const QueryClientProvider: Component<QueryClientProviderProps> = ({
  client,
  contextSharing = false,
  children,
}) => {
  createEffect(() => {
    client.mount();
    onCleanup(() => {
      client.unmount();
    });
  });

  const Context = getQueryClientContext(contextSharing)!;

  return (
    <QueryClientSharingContext.Provider value={contextSharing}>
      <Context.Provider value={client}>{children}</Context.Provider>
    </QueryClientSharingContext.Provider>
  );
};
