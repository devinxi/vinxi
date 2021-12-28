export type MaybePromise<T, E = any> = Promise<{
    ok: true,
    data: T
} | {
    ok: false,
    error: E,
    status: number,
    detail?: string;
}>