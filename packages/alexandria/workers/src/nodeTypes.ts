declare type Buffer = any;
declare namespace stream {
    export const Readable: any;
};

declare module 'stream' {
    namespace internal {
        export class Readable {}
    }
    export = internal;
}