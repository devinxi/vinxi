// CONTEXT

import { Component, createContext, createMemo, useContext } from "solid-js";

interface QueryErrorResetBoundaryValue {
  clearReset: () => void;
  isReset: () => boolean;
  reset: () => void;
}

function createValue(): QueryErrorResetBoundaryValue {
  let isReset = false;
  return {
    clearReset: () => {
      isReset = false;
    },
    reset: () => {
      isReset = true;
    },
    isReset: () => {
      return isReset;
    }
  };
}

const QueryErrorResetBoundaryContext = createContext(createValue());

// HOOK

export const useQueryErrorResetBoundary = () => useContext(QueryErrorResetBoundaryContext);

// COMPONENT

export interface QueryErrorResetBoundaryProps {
  children: ((value: QueryErrorResetBoundaryValue) => React.ReactNode) | React.ReactNode;
}

export const QueryErrorResetBoundary: Component<QueryErrorResetBoundaryProps> = ({ children }) => {
  const value = createMemo(() => createValue());
  return (
    <QueryErrorResetBoundaryContext.Provider value={value()}>
      {typeof children === "function" ? (children as Function)(value) : children}
    </QueryErrorResetBoundaryContext.Provider>
  );
};
