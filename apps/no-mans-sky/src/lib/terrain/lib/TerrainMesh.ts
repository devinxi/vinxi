import * as THREE from "three";
import { ColorGenerator, HyposymetricTintsGenerator } from "./color-generator";
import { HeightGenerator, NoisyHeightGenerator } from "./height-generator";
import { Object3DNode, Overwrite, Vector3 } from "solid-three";
import {
  buildPlanetMeshData,
  MeshData,
  MeshGeneratorSettings,
  TerrainMeshParams
} from "./terrain-builder";
import TerrainBuilderWorker from "./terrain-builder.worker?worker";
import type { Builder } from "./terrain-builder.worker";
import { NoiseGenerator } from "@/lib/noise";
import { WorkerThreadPool } from "@/lib/threading";
import { DIRECTIONS } from "./PlanetMesh";

export let workerPool = new WorkerThreadPool<Builder>(4, () => new TerrainBuilderWorker());

export class TerrainMesh extends THREE.Mesh {
  // width: number;
  // height: number;
  radius: number;
  resolution: number;
  heightGenerator: HeightGenerator;
  colorGenerator: ColorGenerator;
  offset: THREE.Vector3;
  worker: boolean = false;
  settings: MeshGeneratorSettings = {
    applyHeight: true,
    applyColor: true,
    debugColor: [0, 0, 0],
    projectToSphere: false
  };

  constructor(params: Partial<TerrainMeshParams> = {}) {
    super(new THREE.BufferGeometry());
    // this.width = params.width ?? 500;
    // this.height = params.height ?? 500;
    this.radius = params.radius ?? 100;
    this.resolution = params.resolution ?? 64;
    this.heightGenerator = params.heightGenerator ?? new NoisyHeightGenerator(new NoiseGenerator());
    this.colorGenerator =
      params.colorGenerator ??
      new HyposymetricTintsGenerator({
        biomeNoiseGenerator: new NoiseGenerator({
          octaves: 2,
          persistence: 0.5,
          lacunarity: 2.0,
          scale: 2048.0,
          noiseType: "simplex",
          seed: 2,
          exponentiation: 1,
          height: 1.0
        }),
        spline: [
          ["#000000", 0.0],
          ["#FFFFFF", 1.0]
        ]
      });
    this.offset = params.offset ?? new THREE.Vector3();
  }

  updateFromData(data: MeshData) {
    const { positions, uvs, normals, colors, indices } = data;
    this.geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    this.geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
    this.geometry.setAttribute("normal", new THREE.Float32BufferAttribute(normals, 3));
    this.geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

    if (indices && indices.length !== this.geometry.index?.array.length) {
      this.geometry.setIndex(new THREE.BufferAttribute(new Uint32Array(indices), 1));
      this.geometry.index!.needsUpdate = true;
    }
    this.geometry.attributes.position.needsUpdate = true;
    this.geometry.attributes.uv.needsUpdate = true;
    this.geometry.attributes.normal.needsUpdate = true;
    this.geometry.attributes.color.needsUpdate = true;
    this.geometry = this.geometry.toNonIndexed();
    this.geometry.computeVertexNormals();
  }

  resetGeometry() {
    this.geometry = new THREE.BufferGeometry();
  }

  update() {
    if (this.worker) {
      workerPool.enqueue(
        "buildPlanetMeshData",
        {
          radius: this.radius,
          resolution: this.resolution,
          localUp: DIRECTIONS.UP.toArray(),
          offset: this.offset.toArray(),
          // origin: [0, 0, 0],
          planet: { position: [0, 0, 0], radius: 100, detailLevelDistances: [1200, 200, 100, 10] },
          heightGenerator: this.heightGenerator.params as any,
          colorGenerator: this.colorGenerator.params as any,
          settings: this.settings
        },
        data => {
          this.updateFromData(data);
        }
      );
    } else {
      this.updateFromData(
        buildPlanetMeshData({
          // width: this.width,
          // height: this.height,
          resolution: this.resolution,
          offset: this.offset,
          heightGenerator: this.heightGenerator,
          colorGenerator: this.colorGenerator,
          settings: this.settings,
          radius: this.radius,
          // chunkRadius: this.radius / 2,
          localUp: DIRECTIONS.UP,
          planet: { position: [0, 0, 0], radius: 100, detailLevelDistances: [1200, 200, 100, 10] }
        })
      );
    }
  }
}

export type TerrainMeshProps = Overwrite<
  Object3DNode<TerrainMesh, typeof TerrainMesh>,
  { offset?: Vector3 }
>;
