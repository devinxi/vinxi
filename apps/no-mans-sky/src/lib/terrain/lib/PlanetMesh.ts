import * as THREE from "three";
import { Object3DNode, Overwrite, Vector3 } from "solid-three";
import { buildPlanetMeshData as buildPlanetMeshData, TerrainMeshParams } from "./terrain-builder";
import { TerrainMesh, workerPool } from "./TerrainMesh";

export const DIRECTIONS = {
  UP: new THREE.Vector3(0, 1, 0),
  DOWN: new THREE.Vector3(0, -1, 0),
  LEFT: new THREE.Vector3(-1, 0, 0),
  RIGHT: new THREE.Vector3(1, 0, 0),
  FRONT: new THREE.Vector3(0, 0, 1),
  BACK: new THREE.Vector3(0, 0, -1)
};

export interface PlanetConfig {
  position: [number, number, number];
  radius: number;
  detailLevelDistances: number[];
}

export interface PlanetMeshParams extends TerrainMeshParams {
  // origin: THREE.Vector3;
  planet: PlanetConfig;
  localUp: THREE.Vector3;
}

export class PlanetMesh extends TerrainMesh {
  // origin: THREE.Vector3;
  // chunkRadius: number;
  planet: PlanetConfig;
  localUp: THREE.Vector3;
  constructor(params: Partial<PlanetMeshParams> = {}) {
    super(params);
    // this.origin = params.origin ?? new THREE.Vector3(0, 0, 0);
    // this.chunkRadius = params.chunkRadius ?? 100;
    this.localUp = params.localUp ?? DIRECTIONS.UP.clone();
    this.planet = params.planet ?? {
      position: [0, 0, 0],
      radius: 100,
      detailLevelDistances: [1600, 400, 100]
    };
  }

  update() {
    if (this.worker) {
      workerPool.enqueue(
        "buildPlanetMeshData",
        {
          resolution: this.resolution,
          offset: this.offset.toArray(),
          heightGenerator: this.heightGenerator.params as any,
          colorGenerator: this.colorGenerator.params as any,
          settings: this.settings,
          radius: this.radius,
          planet: this.planet,
          localUp: this.localUp.toArray()
        },
        data => {
          this.updateFromData(data);
        }
      );
    } else {
      let data = buildPlanetMeshData({
        resolution: this.resolution,
        offset: this.offset as THREE.Vector3,
        heightGenerator: this.heightGenerator,
        colorGenerator: this.colorGenerator,
        settings: this.settings,
        radius: this.radius,
        planet: this.planet,
        localUp: this.localUp as THREE.Vector3
      });
      this.updateFromData(data);
    }
  }
}

export type PlanetMeshProps = Overwrite<
  Object3DNode<PlanetMesh, typeof PlanetMesh>,
  { offset?: Vector3; ref?: React.Ref<PlanetMesh> }
>;
