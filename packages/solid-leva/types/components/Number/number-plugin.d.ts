import type { InternalNumberSettings, NumberInput } from './number-types';
export declare const schema: (o: any) => boolean;
export declare const sanitize: (v: any, { min, max, suffix }: InternalNumberSettings) => string | number;
export declare const format: (v: any, { pad, suffix }: InternalNumberSettings) => string;
export declare const normalize: ({ value, ...settings }: NumberInput) => {
    value: any;
    settings: {
        type?: import("../..").LevaInputs | undefined;
        step: number;
        initialValue: number;
        pad: number;
        min: number;
        max: number;
        suffix: any;
    };
};
export declare const sanitizeStep: (v: number, { step, initialValue }: Pick<InternalNumberSettings, 'step' | 'initialValue'>) => number;
//# sourceMappingURL=number-plugin.d.ts.map