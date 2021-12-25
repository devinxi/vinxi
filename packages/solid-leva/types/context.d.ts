import { Context, JSX } from "solid-js";
import type { FullTheme } from "./styles";
import type { StoreType, PanelSettingsType, InputContextProps } from "./types";
export declare const InputContext: Context<{}>;
export declare function useInputContext<T = {}>(): InputContextProps & T;
declare type ThemeContextProps = {
    theme: FullTheme;
    className: string;
};
export declare const ThemeContext: Context<ThemeContextProps | null>;
export declare const StoreContext: Context<StoreType | null>;
export declare const PanelSettingsContext: Context<PanelSettingsType | null>;
export declare function useStoreContext(): StoreType;
export declare function usePanelSettingsContext(): PanelSettingsType;
declare type LevaStoreProviderProps = {
    children: any;
    store: StoreType;
};
export declare function LevaStoreProvider(props: LevaStoreProviderProps): JSX.Element;
export {};
//# sourceMappingURL=context.d.ts.map