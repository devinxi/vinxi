import { NoiseGenerator, NoiseParams } from "../../noise";

export class FixedHeightGenerator implements HeightGenerator {
  params: { height: number } = { height: 0 }
  constructor({ height = 0 }) {
    this.params.height = 0;
  }
  name = 'fixed-height'
  get(x: number, y: number, z: number = 0): number {
    return this.params.height;
  }
}

export interface HeightGenerator<T extends object = object> {
  get(x: number, y: number, z?: number): number;
  params: T
}

export class NoisyHeightGenerator implements HeightGenerator<NoiseParams> {
  noiseGenerator: NoiseGenerator;
  constructor(noiseGenerator?: NoiseGenerator) {
    this.noiseGenerator = noiseGenerator ?? new NoiseGenerator();
  }
  name = 'noisy-height'
  get(x: number, y: number, z?: number): number {
    return this.noiseGenerator.get(x, y, z);
  }

  get params() {
    return this.noiseGenerator.params;
  }
}

const HEIGHT_GENERATORS = {
  'fixed-height': FixedHeightGenerator,
  'noisy-height': NoisyHeightGenerator
};

