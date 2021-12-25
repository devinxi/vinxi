export declare function useRef<T>(initialVal?: T | null): {
    current: T | null;
} & ((el: T | null) => void);
export declare type RefObject<T> = {
    current: T | null;
} & ((el: T | null) => void);
export declare function useCallback<T>(fn: T, deps: any[]): T;
export declare function useMemo<V>(fn: () => V): V;
//# sourceMappingURL=index.d.ts.map