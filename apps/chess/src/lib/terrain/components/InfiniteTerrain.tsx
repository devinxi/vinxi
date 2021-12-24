import { useFrame } from "@react-three/fiber";
import * as React from "src/react";
import * as THREE from "three";
import {
  TerrainMesh as TerrainMeshImpl,
  TerrainMeshProps,
} from "../lib/TerrainMesh";
import { useViewer } from "../../../engine/react/Demo";

import { TerrainMaterial } from "./TerrainMaterial";
import { QuadTree2 } from "@/lib/quadtree";
import { dicts } from "../../dicts";
import { useColorGenerator, useHeightGenerator } from "./Planet";
import { TerrainMesh } from "./TerrainMesh";
import { ObjectPoolImpl, ObjectPool } from "./ObjectPool";
import { COLORS } from "../lib/color-generator";

function getCellIndex(p: THREE.Vector3, chunkSize: number) {
  const xp = p.x + chunkSize * 0.5;
  const zp = p.z + chunkSize * 0.5;
  const x = Math.floor(xp / chunkSize);
  const z = Math.floor(zp / chunkSize);
  return [x, z];
}

export function InfiniteTerrain({
  maxViewDistance = 400,
  chunkSize = 200,
  resolution = 64,
}) {
  const { heightGenerator, colorGenerator } = useTerrainGenerators();

  const [chunks, setChunks] = React.useState(
    () =>
      ({} as Record<
        string,
        { offset: [number, number]; size: number; resolution: number }
      >)
  );

  let ref = React.useRef(``);

  useFrame(() => {
    const { position } = useViewer.getState();
    const [chunkX, chunkZ] = getCellIndex(position, chunkSize);
    const key = `${chunkX}.${chunkZ}`;
    if (key === ref.current) {
      return;
    }

    let visibleChunks = Math.floor(maxViewDistance / chunkSize);

    ref.current = key;
    setChunks((chunks) => {
      let newChunks = {};
      for (var xOffset = -visibleChunks; xOffset <= visibleChunks; xOffset++) {
        for (
          var zOffset = -visibleChunks;
          zOffset <= visibleChunks;
          zOffset++
        ) {
          chunks[`${chunkX + xOffset}.${chunkZ + zOffset}`] = {
            offset: [
              (chunkX + xOffset) * chunkSize,
              (chunkZ + zOffset) * chunkSize,
            ],
            size: chunkSize,
            resolution: resolution,
          };
        }
      }

      return { ...chunks, ...newChunks };
    });
  });

  return (
    <>
      {Object.keys(chunks).map((k) => {
        let chunk = chunks[k];
        let [x, z] = chunk.offset;
        return (
          <TerrainChunk
            key={`${x}.${z}`}
            size={chunkSize}
            offset={[x, 0, z]}
            resolution={resolution}
            heightGenerator={heightGenerator}
            colorGenerator={colorGenerator}
            maxViewDistance={maxViewDistance}
            frustumCulled={false}
          >
            <TerrainMaterial />
          </TerrainChunk>
        );
      })}
    </>
  );
}

const terrainMeshPool = new ObjectPoolImpl();

function TerrainMeshPool({ children }: React.PropsWithChildren<{}>) {
  return (
    <ObjectPool
      pool={terrainMeshPool}
      type={TerrainMesh}
      impl={TerrainMeshImpl}
      getParams={(props: any) => props.size}
    >
      {children}
    </ObjectPool>
  );
}

export function useTerrainGenerators() {
  const heightGenerator = useHeightGenerator("terrain", {
    octaves: 10,
    persistence: 0.5,
    lacunarity: 1.6,
    exponentiation: 7.5,
    height: 900.0,
    scale: 1400.0,
    noiseType: "simplex",
    seed: 1,
  });

  const colorGenerator = useColorGenerator("terrain", {
    maxElevation: 900.0,
    // planet: {}
    gradient: [
      [COLORS.DEEP_OCEAN, 0],
      [COLORS.SHALLOW_OCEAN, 0.05],
      [COLORS.FOREST_TROPICAL, 0.1],
      ["#6f5231", 0.2],
      ["#6f5231", 0.35],
      [COLORS.SNOW, 0.4],
    ],
    biomeNoise: {
      octaves: 2,
      persistence: 0.5,
      lacunarity: 2.0,
      scale: 2048.0,
      noiseType: "simplex",
      seed: 2,
      exponentiation: 1,
      height: 1.0,
    },
    planet: {},
  });

  return { heightGenerator, colorGenerator };
}

export function QuadTreeTerrain({
  // maxViewDistance = 400,
  // chunkSize = 200,
  resolution = 64,
}) {
  const { heightGenerator, colorGenerator } = useTerrainGenerators();

  interface TerrainChunkParams {
    offset: [number, number, number];
    size: number;
    resolution: number;
    key: string;
  }

  const [chunks, setChunks] = React.useState(
    () => ({} as Record<string, TerrainChunkParams>)
  );
  const [toDelete, setToDelete] = React.useState(
    () => ({} as Record<string, TerrainChunkParams>)
  );

  useFrame(() => {
    let tree = new QuadTree2({
      min: new THREE.Vector2(-1000, -1000),
      max: new THREE.Vector2(1000, 1000),
      minNodeSize: 500,
    });

    const { position } = useViewer.getState();

    tree.insert(position);
    const children = tree.getChildren();
    let newChunks: Record<string, TerrainChunkParams> = {};
    for (let child of children) {
      newChunks[`${child.center.x}.${child.center.y}/${child.size.x}`] = {
        offset: [child.center.x, 0, child.center.y],
        size: child.size.x,
        resolution: resolution,
        key: `${child.center.x}.${child.center.y}/${child.size.x}`,
      };
    }

    let difference = dicts.DictDifference(newChunks, chunks);
    let toDelete = dicts.DictDifference(chunks, newChunks);
    if (
      Object.keys(difference).length === 0 &&
      Object.keys(toDelete).length === 0
    ) {
      return;
    }

    setChunks(newChunks);
  });

  return (
    <>
      <TerrainMeshPool>
        {Object.keys(chunks).map((k) => {
          let chunk = chunks[k];
          return (
            <TerrainMesh
              key={chunk.key}
              // width={chunk.size - 10}
              radius={chunk.size / 2}
              offset={chunk.offset}
              resolution={resolution}
              heightGenerator={heightGenerator}
              colorGenerator={colorGenerator}
              worker={true}
              frustumCulled={false}
            >
              <TerrainMaterial />
            </TerrainMesh>
          );
        })}
      </TerrainMeshPool>
    </>
  );
}

function TerrainChunk({
  size,
  resolution,
  // maxViewDistance,
  ...props
}: TerrainMeshProps & { size: number; maxViewDistance: number }) {
  const [visible, setVisible] = React.useState(true);
  // useFrame(() => {
  //   const { position } = useViewer.getState();
  //   const offset = new THREE.Vector3(
  //     ...(props.offset as [number, number, number])
  //   );
  //   if (offset.distanceTo(position) > maxViewDistance && visible) {
  //     setVisible(false);
  //   } else if (offset.distanceTo(position) < maxViewDistance && !visible) {
  //     setVisible(true);
  //   }
  // });
  return (
    <TerrainMesh
      // width={size}
      radius={size / 2}
      visible={visible}
      resolution={resolution}
      {...props}
    />
  );
}
