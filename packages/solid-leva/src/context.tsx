import { createContext, useContext } from "solid-js";
import type { FullTheme } from "./styles";
import type { StoreType, PanelSettingsType, InputContextProps } from "./types";

export const InputContext = createContext({});

export function useInputContext<T = {}>() {
  return useContext(InputContext) as InputContextProps & T;
}

type ThemeContextProps = { theme: FullTheme; className: string };

export const ThemeContext = createContext<ThemeContextProps | null>(null);

export const StoreContext = createContext<StoreType | null>(null);

export const PanelSettingsContext = createContext<PanelSettingsType | null>(
  null
);

export function useStoreContext() {
  return useContext(StoreContext)!;
}

export function usePanelSettingsContext() {
  return useContext(PanelSettingsContext)!;
}

type LevaStoreProviderProps = {
  children: any;
  store: StoreType;
};

export function LevaStoreProvider(props: LevaStoreProviderProps) {
  return (
    <StoreContext.Provider value={props.store}>
      {props.children}
    </StoreContext.Provider>
  );
}
