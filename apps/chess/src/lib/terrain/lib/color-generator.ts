import { GradientInternalPoint, GradientPoint } from "@/lib/leva-spline/spline-types";
import { math } from "@/lib/math";
import { NoiseGenerator, NoiseParams } from "@/lib/noise";
import { ColorLinearSpline, getColorSplineValue, getSplineValue, LinearSpline, SplinePoint, SplinePoints } from "@/lib/spline";
import * as THREE from "three";
import { planetMaterial } from "../components/PlanetMaterial";
import { PlanetConfig } from "./PlanetMesh";
import { MeshGeneratorSettings } from "./terrain-builder";

export const COLORS = {
  WHITE: new THREE.Color(0x808080),
  BEACH: new THREE.Color(0xd9d592),
  SNOW: '#ffffff',
  FOREST_TROPICAL: '#4f9f0f',
  FOREST_TEMPERATE: new THREE.Color(0x2b960e),
  // FOREST_BOREAL: '#29c100',
  DEEP_OCEAN: '#0020FF',
  SHALLOW_OCEAN: '#8080FF',

};

export interface ColorGenerator<T extends object = object> {
  getColor(x: number, y: number, z: number, settings: MeshGeneratorSettings): THREE.Color;
  params: T;
}

export class FixedColourGenerator implements ColorGenerator {
  params: { color: THREE.Color; };
  constructor(params: { color: THREE.Color }) {
    this.params = params;
  }
  getColor() {
    return this.params.color;
  }
}


export interface TextureSplatterRawParams {
  biomeNoiseGenerator: NoiseGenerator
  colorNoiseGenerator: NoiseGenerator
  spline: GradientInternalPoint[]
  maxElevation: number;
  planet: PlanetConfig;
}

export interface TextureSplatterParams extends TextureSplatterRawParams {
  colorSpline: SplinePoint<THREE.Color>[]
}

export class HyposymetricTintsGenerator implements ColorGenerator<{
  biomeNoiseGenerator: NoiseParams;
}> {
  _params: TextureSplatterParams;
  constructor(params: Partial<TextureSplatterRawParams>) {
    // Arid
    // const aridSpline = new ColorLinearSpline();
    // aridSpline.AddPoint(0.0, new THREE.Color(0xb7a67d));
    // aridSpline.AddPoint(0.5, new THREE.Color(0xf1e1bc));
    // aridSpline.AddPoint(1.0, COLORS.SNOW);

    // // Humid
    // const humidSpline = new LinearSpline(colorLerp);
    // humidSpline.AddPoint(0.0, COLORS.FOREST_BOREAL);
    // humidSpline.AddPoint(0.5, new THREE.Color(0xcee59c));
    // humidSpline.AddPoint(1.0, COLORS.SNOW);


    // // Ocean
    // const oceanSpline = new LinearSpline(colorLerp);
    // oceanSpline.AddPoint(0.0, COLORS.DEEP_OCEAN);
    // oceanSpline.AddPoint(0.03, COLORS.SHALLOW_OCEAN);
    // oceanSpline.AddPoint(0.05, COLORS.SHALLOW_OCEAN);

    this._params = params as TextureSplatterParams;
    this._params.colorSpline = this._params.spline.map(([pt, i]) => [i, new THREE.Color(pt)] as SplinePoint<THREE.Color>);
  }

  static fromParams(params: Omit<TextureSplatterRawParams, 'biomeNoiseGenerator'> & { biomeNoiseGenerator: NoiseParams }) {
    return new HyposymetricTintsGenerator({ ...params, biomeNoiseGenerator: new NoiseGenerator(params.biomeNoiseGenerator), });
  }

  getColor(x: any, y: any, z: any, settings?: MeshGeneratorSettings) {
    let h;
    if (settings?.projectToSphere) {
      let elevation = ((new THREE.Vector3(x, y, z).length() / this._params.planet.radius) - 1) / this._params.maxElevation;
      h = math.sat(elevation);
    } else {
      h = y / this._params.maxElevation;
    }
    return getColorSplineValue(this._params.colorSpline, h);
  }

  get params() {
    return {
      biomeNoiseGenerator: this._params.biomeNoiseGenerator.params,
      spline: this._params.spline,
      planet: this._params.planet,
      maxElevation: this._params.maxElevation
    }
  }
}

// export class TextureSplatter implements ColorGenerator {
//   params: TextureSplatterParams;
//   constructor(params: Partial<TextureSplatterRawParams>) {
//     // Arid
//     const aridSpline = new LinearSpline(colorLerp);
//     aridSpline.AddPoint(0.0, new THREE.Color(0xb7a67d));
//     aridSpline.AddPoint(0.5, new THREE.Color(0xf1e1bc));
//     aridSpline.AddPoint(1.0, COLORS.SNOW);

//     // Humid
//     const humidSpline = new LinearSpline(colorLerp);
//     humidSpline.AddPoint(0.0, COLORS.FOREST_BOREAL);
//     humidSpline.AddPoint(0.5, new THREE.Color(0xcee59c));
//     humidSpline.AddPoint(1.0, COLORS.SNOW);


//     // Ocean
//     const oceanSpline = new LinearSpline(colorLerp);
//     oceanSpline.AddPoint(0.0, COLORS.DEEP_OCEAN);
//     oceanSpline.AddPoint(0.03, COLORS.SHALLOW_OCEAN);
//     oceanSpline.AddPoint(0.05, COLORS.SHALLOW_OCEAN);

//     this.params = params as TextureSplatterParams;
//     this.params.splines = {
//       ocean: oceanSpline,
//       arid: aridSpline,
//       humid: humidSpline,
//     };

//   }

//   getBaseColor(x: any, y: any, height: number) {
//     const m = this.params.biomeNoiseGenerator.get(x, y, height);
//     const h = math.sat(height);

//     const c1 = this.params.splines.arid.Get(h);
//     const c2 = this.params.splines.humid.Get(h);

//     let c = c1.lerp(c2, m);

//     if (h < 0.1) {
//       c = this.params.splines.ocean.Get(h);

//     }
//     return c;
//   }

//   getColor(x: number, y: number, height: number) {
//     const c = this.getBaseColor(x, y, height);
//     const r = this.params.colorNoiseGenerator.get(x, y, height) * 2.0 - 1.0;
//     c.offsetHSL(0.0, 0.0, r * 0.01);
//     return c;
//   }

//   getSplat(x: number, y: number, height: number) {
//     const m = this.params.biomeNoiseGenerator.get(x, y, height);
//     const h = height / 100.0;

//     const types = {
//       dirt: { index: 0, strength: 0.0 },
//       grass: { index: 1, strength: 0.0 },
//       gravel: { index: 2, strength: 0.0 },
//       rock: { index: 3, strength: 0.0 },
//       snow: { index: 4, strength: 0.0 },
//       snowrock: { index: 5, strength: 0.0 },
//       cobble: { index: 6, strength: 0.0 },
//       sandyrock: { index: 7, strength: 0.0 },
//     };

//     type TerrainType = keyof typeof types;

//     function applyWeights(dst: TerrainType, v: number, m: number) {
//       for (let k in types) {
//         types[k as TerrainType].strength *= m;
//       }
//       types[dst].strength = v;
//     };

//     types.grass.strength = 1.0;
//     applyWeights('gravel', 1.0 - m, m);

//     if (h < 0.2) {
//       const s = 1.0 - math.sat((h - 0.1) / 0.05);
//       applyWeights('cobble', s, 1.0 - s);

//       if (h < 0.1) {
//         const s = 1.0 - math.sat((h - 0.05) / 0.05);
//         applyWeights('sandyrock', s, 1.0 - s);
//       }
//     } else {
//       if (h > 0.125) {
//         const s = (math.sat((h - 0.125) / 1.25));
//         applyWeights('rock', s, 1.0 - s);
//       }

//       if (h > 1.5) {
//         const s = math.sat((h - 0.75) / 2.0);
//         applyWeights('snow', s, 1.0 - s);
//       }
//     }

//     // In case nothing gets set.
//     types.dirt.strength = 0.01;

//     let total = 0.0;
//     for (let k in types) {
//       total += types[k as TerrainType].strength;
//     }
//     if (total < 0.01) {
//       const a = 0;
//     }
//     const normalization = 1.0 / total;

//     for (let k in types) {
//       types[k as TerrainType].strength / normalization;
//     }

//     return types;
//   }
// }