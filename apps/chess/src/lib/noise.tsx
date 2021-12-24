import { extend, Node } from "@react-three/fiber";
import { folder } from "@/leva";
import * as React from "src/react";
import SimplexNoise from "simplex-noise";
import * as perlin from "./perlin";
import { useControls } from "./leva";

export interface NoiseFunction {
  noise2D(x: number, y: number): number;
  noise3D(x: number, y: number, z: number): number;
}

class PerlinNoise implements NoiseFunction {
  noise2D(x: number, y: number): number {
    return perlin.noise2(x, y);
  }
  noise3D(x: number, y: number, z: number): number {
    return perlin.noise3(x, y, z);
  }
}

export class NoiseGenerator {
  noise: Record<string, NoiseFunction>;
  octaves!: number;
  persistence!: number;
  lacunarity!: number;
  exponentiation!: number;
  height!: number;
  scale!: number;
  noiseType!: NoiseType;
  _seed!: number;

  constructor(
    params: NoiseParams = {
      octaves: 6,
      persistence: 0.707,
      lacunarity: 1.8,
      exponentiation: 4.5,
      height: 300,
      scale: 800,
      seed: 1,
      noiseType: "simplex",
    }
  ) {
    this.noise = {};
    this.noise["simplex"] = new SimplexNoise(`${params.seed}`);
    this.noise["perlin"] = new PerlinNoise();
    this.params = params;
  }

  get params() {
    return {
      octaves: this.octaves,
      persistence: this.persistence,
      lacunarity: this.lacunarity,
      exponentiation: this.exponentiation,
      height: this.height,
      scale: this.scale,
      seed: this.seed,
      noiseType: this.noiseType,
    };
  }

  set seed(value: number) {
    this._seed = value;
    this.noise["simplex"] = new SimplexNoise(`${value}`);
  }

  get seed() {
    return this._seed;
  }

  set params(params: NoiseParams) {
    this.octaves = params.octaves;
    this.persistence = params.persistence;
    this.lacunarity = params.lacunarity;
    this.exponentiation = params.exponentiation;
    this.height = params.height;
    this.scale = params.scale;
    this.noiseType = params.noiseType;
    this.seed = params.seed;
  }

  get(x: number, y: number, z?: number): number {
    if (z === undefined) {
      return get2DNoise(
        { ...this.params, noiseFunction: this.noise[this.noiseType] },
        x,
        y
      );
    } else {
      return get3DNoise(
        { ...this.params, noiseFunction: this.noise[this.noiseType] },
        x,
        y,
        z
      );
    }
  }
}

function get2DNoise(
  params: NoiseParams & { noiseFunction: NoiseFunction },
  x: number,
  y: number
) {
  const xs = x / params.scale;
  const ys = y / params.scale;
  const G = 2.0 ** -params.persistence;
  let amplitude = 1.0;
  let frequency = 1.0;
  let normalization = 0;
  let total = 0;
  for (let o = 0; o < params.octaves; o++) {
    const noiseValue =
      params.noiseFunction.noise2D(xs * frequency, ys * frequency) * 0.5 + 0.5;
    total += noiseValue * amplitude;
    normalization += amplitude;
    amplitude *= G;
    frequency *= params.lacunarity;
  }
  total /= normalization;
  return Math.pow(total, params.exponentiation) * params.height;
}

function get3DNoise(
  params: NoiseParams & { noiseFunction: NoiseFunction },
  x: number,
  y: number,
  z: number
) {
  const G = 2.0 ** -params.persistence;
  const xs = x / params.scale;
  const ys = y / params.scale;
  const zs = z / params.scale;

  let amplitude = 1.0;
  let frequency = 1.0;
  let normalization = 0;
  let total = 0;
  for (let o = 0; o < params.octaves; o++) {
    const noiseValue =
      params.noiseFunction.noise3D(
        xs * frequency,
        ys * frequency,
        zs * frequency
      ) *
        0.5 +
      0.5;

    total += noiseValue * amplitude;
    normalization += amplitude;
    amplitude *= G;
    frequency *= params.lacunarity;
  }
  total /= normalization;
  return Math.pow(total, params.exponentiation) * params.height;
}

export interface NoiseParams {
  octaves: number;
  persistence: number;
  lacunarity: number;
  exponentiation: number;
  height: number;
  scale: number;
  noiseType: NoiseType;
  seed: number;
}

export type NoiseType = "simplex" | "perlin";

export function noiseParamsFolder({
  octaves = 6,
  persistence = 0.707,
  lacunarity = 1.8,
  exponentiation = 4.5,
  height = 300,
  scale = 800,
  seed = 1,
  noiseType = "simplex",
}: Partial<NoiseParams> = {}) {
  return folder({
    octaves: { value: octaves, step: 1, min: 1, max: 20 },
    persistence: { value: persistence, min: 0.25, max: 1.0 },
    lacunarity: { min: 0.01, max: 4.0, value: lacunarity },
    exponentiation: { min: 0.1, max: 10.0, value: exponentiation },
    height: { min: 0, value: height },
    scale: { min: 32, max: 4096, value: scale, step: 1 },
    noiseType: {
      options: ["simplex", "perlin"] as NoiseType[],
      value: noiseType,
    },
    seed: { value: seed },
  });
}

export function useNoiseGenerator(
  name: string,
  params: Partial<NoiseParams> = {}
) {
  const controls = useControls(
    name,
    {
      noise: noiseParamsFolder(params),
    },
    { collapsed: true }
  );

  const generator = React.useMemo(() => {
    return new NoiseGenerator(controls) as NoiseGenerator;
  }, [controls]);

  return generator;
}

// extend({ NoiseGenerator });
// type NoiseGeneratorProps = Node<NoiseGenerator, typeof NoiseGenerator>;
// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       noiseGenerator: NoiseGeneratorProps;
//     }
//   }
// }

// export function Noise(props: NoiseGeneratorProps & { name: string }) {
//   const {
//     octaves = 6,
//     persistence = 0.707,
//     lacunarity = 1.8,
//     exponentiation = 4.5,
//     height = 300,
//     scale = 800,
//     seed = 1,
//     noiseType = "simplex",
//   } = props;

//   const { noiseType: controlledNoiseType, ...noiseControls } = useControls(
//     props.name,
//     {
//       noise: folder({
//         octaves: { value: octaves, step: 1, min: 1, max: 20 },
//         persistence: { value: persistence, min: 0.25, max: 1.0 },
//         lacunarity: { min: 0.01, max: 4.0, value: lacunarity },
//         exponentiation: { min: 0.1, max: 10.0, value: exponentiation },
//         height: { min: 0, value: height },
//         scale: { min: 32, max: 4096, value: scale, step: 1 },
//         noiseType: {
//           options: ["simplex", "perlin"] as NoiseType[],
//           value: noiseType,
//         },
//         seed: { value: seed },
//       }),
//     },
//     { collapsed: true }
//   );

//   return (
//     <noiseGenerator
//       attach="noiseGenerator"
//       {...props}
//       noiseType={controlledNoiseType as NoiseType}
//       {...noiseControls}
//     />
//   );
// }
