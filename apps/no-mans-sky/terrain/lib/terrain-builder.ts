import * as THREE from "three";
import { HeightGenerator } from "./height-generator";
import { ColorGenerator } from "./color-generator";
import { PlanetConfig } from "./PlanetMesh";

export interface MeshGeneratorSettings {
  applyHeight: boolean;
  applyColor: boolean;
  debugColor: [number, number, number]
  debugChunkRadius?: boolean;
  projectToSphere?: boolean;
}

export interface TerrainMeshParams {
  radius: number;
  offset: THREE.Vector3;
  resolution: number;
  colorGenerator: ColorGenerator;
  heightGenerator: HeightGenerator;
  settings: MeshGeneratorSettings
}

export interface MeshData {
  positions: number | Iterable<number> | ArrayLike<number> | ArrayBuffer;
  colors: number | Iterable<number> | ArrayLike<number> | ArrayBuffer;
  normals: number | Iterable<number> | ArrayLike<number> | ArrayBuffer;
  indices?: number[];
  // tangents: number | Iterable<number> | ArrayLike<number> | ArrayBuffer;
  // weights1: number | Iterable<number> | ArrayLike<number> | ArrayBuffer;
  // weights2: number | Iterable<number> | ArrayLike<number> | ArrayBuffer;
  uvs: number | Iterable<number> | ArrayLike<number> | ArrayBuffer;
}

// export function buildTerrainMeshData({ resolution, offset, width, height, heightGenerator, colorGenerator, settings }: TerrainMeshParams) {
//   const positions = [];
//   const uvs = [];
//   const normals = [];
//   const colors = [];
//   const indices = [];

//   let halfWidth = width / 2
//   let halfHeight = height / 2
//   for (let x = 0; x < resolution + 1; x++) {
//     const xp = x * width / resolution;
//     for (let z = 0; z < resolution + 1; z++) {
//       const zp = z * height / resolution;
//       const y = heightGenerator.get(xp + offset.x - halfWidth, zp + offset.z - halfHeight);
//       const color = colorGenerator.getColor(xp + offset.x - halfWidth, zp + offset.z - halfHeight, y);

//       if (settings.applyHeight) {
//         positions.push(xp - halfWidth, y, zp - halfHeight);
//       } else {
//         positions.push(xp - halfWidth, 0, zp - halfHeight);
//       }
//       normals.push(0, 1, 0);

//       if (settings.applyColor) {
//         colors.push(color.r, color.g, color.b);
//       } else {
//         colors.push(...settings.debugColor);

//       }
//       uvs.push(x / resolution, 1 - (y / resolution));
//     }
//   }

//   for (let i = 0; i < resolution; i++) {
//     for (let j = 0; j < resolution; j++) {
//       const a = i + (resolution + 1) * j;
//       const b = (i + 1) + (resolution + 1) * j;
//       const c = i + (resolution + 1) * (j + 1);
//       const d = (i + 1) + (resolution + 1) * (j + 1);

//       indices.push(a, b, d);
//       indices.push(c, a, d);
//     }
//   }

//   return { indices, positions, uvs, normals, colors };
// }

export function buildPlanetMeshData({ planet, radius, localUp, resolution, offset, heightGenerator, colorGenerator, settings }: TerrainMeshParams & {
  // origin: THREE.Vector3;
  localUp: THREE.Vector3;
  // chunkRadius: number;
  planet: PlanetConfig;
}) {
  const positions = [];
  const uvs = [];
  const normals = [];
  const colors = [];
  const indices = [];

  let axisA = new THREE.Vector3(localUp.y, localUp.z, localUp.x);
  let axisB = localUp.clone().cross(axisA)

  let vertices = resolution + 1;
  for (let x = 0; x < vertices; x++) {
    const xp = x / resolution;
    for (let z = 0; z < vertices; z++) {
      const zp = z / resolution;

      const pointOnPlanet = offset.clone()
        .add(axisA.clone().multiplyScalar((xp - 0.5))
          .add(axisB.clone().multiplyScalar((zp - 0.5)))
          .multiplyScalar(2)
          .multiplyScalar(radius))

      if (settings.projectToSphere) {
        pointOnPlanet
          .normalize().multiplyScalar(planet.radius);
      }


      const y = settings.projectToSphere ? heightGenerator.get(pointOnPlanet.x, pointOnPlanet.y, pointOnPlanet.z) : heightGenerator.get(pointOnPlanet.x, pointOnPlanet.z);

      if (settings.applyHeight) {
        if (settings.projectToSphere) {
          pointOnPlanet.multiplyScalar(1 + y)
        } else {
          pointOnPlanet.y += y;
        }
      }

      const color = colorGenerator.getColor(pointOnPlanet.x, pointOnPlanet.y, pointOnPlanet.z, settings);

      if (settings.applyColor) {
        colors.push(color.r, color.g, color.b);
      } else if (settings.debugChunkRadius) {
        colors.push(radius / 100, radius / 100, radius / 100);
      } else {
        colors.push(...settings.debugColor);

      }

      positions.push(pointOnPlanet.x, pointOnPlanet.y, pointOnPlanet.z);
      normals.push(0, 1, 0);
      uvs.push(x / resolution, 1 - (y / resolution));
    }
  }


  for (let i = 0; i < resolution; i++) {
    for (let j = 0; j < resolution; j++) {
      const a = i + (vertices) * j;
      const b = (i) + (vertices) * (j + 1);
      const c = (i + 1) + (vertices) * (j);
      const d = (i + 1) + (vertices) * (j + 1);

      indices.push(a, b, c);
      indices.push(b, d, c);
    }
  }

  return { indices, positions, uvs, normals, colors };
}
