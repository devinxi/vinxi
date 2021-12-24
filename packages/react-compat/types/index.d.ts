export declare function useRef<T>(initialVal?: T | null): {
    current: T | null;
} & ((el: T | null) => void);
export declare function useCallback(fn: () => void, deps: any[]): () => void;
export declare function useMemo<V>(fn: () => V): V;
//# sourceMappingURL=index.d.ts.map