import { InputWithSettings, LevaInputProps, ColorVectorInput } from '@/leva/plugin'

export type Format = 'hex' | 'rgb' | 'hsl' | 'hsv'

export type Color = string | ColorVectorInput
export type InternalColorSettings = { format: Format; hasAlpha: boolean; isString: boolean }

export type GradientPoint = [string, number];
export type GradientInternalPoint = [string, number];
export type Gradient = GradientPoint[]
// export type InternalSplinePoint = { format: Format; hasAlpha: boolean; isString: boolean }

export type ColorInput = InputWithSettings<Color>
export type GradientInput = InputWithSettings<Gradient>

export type ColorProps = LevaInputProps<Color, InternalColorSettings, string>
export type GradientProps = LevaInputProps<GradientInternalPoint[], {}, Gradient>
