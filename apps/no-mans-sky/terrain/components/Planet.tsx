import {
  NoiseGenerator,
  NoiseParams,
  noiseParamsFolder,
  useNoiseGenerator,
} from "@/lib/noise";
import { useControls, folder } from "@/lib/leva";

import * as React, { forwardRef } from "solid-js";
import {
  FixedHeightGenerator,
  NoisyHeightGenerator,
} from "../lib/height-generator";
import { COLORS, HyposymetricTintsGenerator } from "../lib/color-generator";
import { spline } from "@/lib/leva-spline/Spline";
import * as THREE from "three";
import { Overwrite, useFrame } from "@react-three/fiber";
import {
  DIRECTIONS,
  PlanetConfig,
  PlanetMesh as PlanetMeshImpl,
  PlanetMeshProps,
} from "../lib/PlanetMesh";
import { QuadTreeNode } from "../lib/QuadTreeNode";
import { useViewer } from "../../../engine/react/Demo";
import { dicts } from "../../dicts";
import { ObjectPool, ObjectPoolImpl } from "./ObjectPool";
import { GradientPoint } from "@/lib/leva-spline/spline-types";
import { MeshGeneratorSettings } from "../lib/terrain-builder";

let material = new THREE.ShaderMaterial({
  uniforms: THREE.UniformsLib["lights"],
  vertexShader: `
  #if NUM_DIR_LIGHTS > 0
  struct DirectionalLight {
      vec3 direction;
      vec3 color;
      int shadow;
      float shadowBias;
      float shadowRadius;
      vec2 shadowMapSize;
   };
   uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
#endif
flat varying vec3 vColor;
void main() {
   float r = directionalLights[0].color.r;
   color = vec3(r,1.0,0.0);
   gl_Position = projectionMatrix * modelViewMatrix * vec4(position , 1.0);
}`,
  fragmentShader: `
  flat varying vec3 vColor;

void main() {
    gl_FragColor = vec4(vColor, 1.0);
}`,
  side: THREE.DoubleSide,
  vertexColors: true,
  lights: true,
});

export let planetMaterial = new THREE.MeshStandardMaterial({
  side: THREE.DoubleSide,
  vertexColors: true,
});

export function PlanetMaterial(props: MeshStandardMaterialProps) {
  const materialControls = useControls("planet", {
    wireframe: false,
    flatShading: false,
  });

  React.useLayoutEffect(() => {
    planetMaterial.needsUpdate = true;
  }, [materialControls.flatShading]);

  return (
    <primitive
      attach="material"
      object={planetMaterial}
      {...props}
      {...materialControls}
    />
  );
}

export const PlanetMesh = forwardRef<
  PlanetMeshImpl,
  PlanetMeshProps & { object?: PlanetMeshImpl }
>(function (props, ref) {
  const mesh = React.useMemo(() => {
    if (props.object === undefined) {
      return new PlanetMeshImpl();
    }

    return props.object;
  }, [props.object]);

  React.useLayoutEffect(() => {
    mesh?.resetGeometry();
  }, [mesh, props.resolution]);

  React.useLayoutEffect(() => {
    mesh?.update();
  }, [
    props.resolution,
    props.heightGenerator,
    props.colorGenerator,
    props.radius,
    props.offset,
    props.settings,
    mesh,
  ]);

  return (
    <primitive object={mesh} ref={ref} {...props}>
      <PlanetMaterial />
      {props.children}
    </primitive>
  );
});

export function useHeightGenerator(name: string, params: NoiseParams) {
  const terrainNoiseParams = useControls(name, {
    terrain: folder({
      noise: noiseParamsFolder(params),
    }),
  });

  const terrainNoiseGenerator = React.useMemo(() => {
    return new NoiseGenerator(terrainNoiseParams);
  }, [terrainNoiseParams]);

  const heightGenerator = React.useMemo(() => {
    return new NoisyHeightGenerator(terrainNoiseGenerator);
  }, [terrainNoiseGenerator]);

  return heightGenerator;
}

export const useColorGenerator = (
  name: string,
  {
    gradient,
    biomeNoise,
    planet,
    maxElevation,
  }: {
    gradient: GradientPoint[];
    biomeNoise: NoiseParams;
    planet: PlanetConfig;
    maxElevation: number;
  }
) => {
  const biomeNoiseParams = useControls(name, {
    biome: folder({
      noise: noiseParamsFolder(biomeNoise),
    }),
  });

  const controls = useControls(name, {
    biome: folder({
      gradient: spline({
        value: gradient,
      }),
      maxElevation: maxElevation,
    }),
  });

  const biomeNoiseGenerator = React.useMemo(() => {
    return new NoiseGenerator(biomeNoiseParams);
  }, [biomeNoiseParams]);

  const colorGenerator = React.useMemo(() => {
    return new HyposymetricTintsGenerator({
      biomeNoiseGenerator,
      spline: controls.gradient,
      planet: planet,
      maxElevation: controls.maxElevation,
    });
  }, [biomeNoiseGenerator, controls.gradient, planet, controls.maxElevation]);

  return colorGenerator;
};

const planetMeshPool = new ObjectPoolImpl();

function PlanetMeshPool({ children }: React.PropsWithChildren<{}>) {
  return (
    <ObjectPool
      pool={planetMeshPool}
      type={PlanetMesh}
      impl={PlanetMeshImpl}
      getParams={(props: any) => props.chunkRadius}
    >
      {children}
    </ObjectPool>
  );
}

type PlanetChunkParams = {
  position: THREE.Vector3;
  chunkRadius: number;
  key: string;
  resolution: number;
};

function useChunks() {}

function PlanetFace({
  direction = "UP",
  resolution = 64,
  // offset,
  position,
  planet,
  ...props
}: PlanetMeshProps & {
  direction: keyof typeof DIRECTIONS;
  planet: PlanetConfig;
}) {
  let localUp = props.localUp ?? DIRECTIONS[direction];

  const [chunks, setChunks] = React.useState<Record<string, PlanetChunkParams>>(
    {}
  );

  const tree = React.useMemo(() => {
    let meshPosition = position
      ? new THREE.Vector3().fromArray(position as number[])
      : localUp.clone().normalize().multiplyScalar(planet.radius);
    return new QuadTreeNode(
      planet,
      [],
      undefined,
      planet.radius,
      0,
      meshPosition,
      resolution,
      localUp
    );
  }, [localUp, resolution, planet, position]);

  useFrame(() => {
    const { position } = useViewer.getState();

    tree.updateChunk(position);
    const children = tree.getVisibleChildren();
    let newChunks: Record<string, PlanetChunkParams> = {};
    for (let child of children) {
      let key = `${child.position.x}.${child.position.y}.${child.position.z}/${child.radius}`;
      newChunks[key] = {
        position: child.position,
        chunkRadius: child.radius,
        key: key,
        resolution: child.resolution,
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
      {Object.keys(chunks).map((key) => {
        const chunk = chunks[key as keyof typeof chunks];
        return (
          <PlanetMesh
            {...props}
            position={planet.position}
            localUp={localUp}
            key={key}
            offset={chunk.position}
            resolution={chunk.resolution}
            radius={chunk.chunkRadius}
            planet={planet}
            frustumCulled={false}
          />
        );
      })}
    </>
  );
}

export function PlanetSphere({
  position,
  ...props
}: PlanetMeshProps & { planet: PlanetConfig }) {
  return (
    <>
      {Object.keys(DIRECTIONS).map((key) => (
        <PlanetFace
          {...props}
          key={key}
          direction={key as keyof typeof DIRECTIONS}
        />
      ))}
    </>
  );
}

function usePlanetGenerators(props: PlanetProps) {
  const { resolution, ...controls } = useControls(props.name, {
    resolution: { value: props.resolution ?? 16, min: 1, max: 256 },
    radius: { value: props.radius ?? 100, min: 1, max: 1000 },
    position: {
      value: (props.position as [number, number, number]) ?? [0, 0, 0],
      step: 1,
    },
  });

  const planetConfig = React.useMemo(
    () => ({
      radius: controls.radius,
      position: controls.position,
      detailLevelDistances: props.planet?.detailLevelDistances ?? [
        2500, 1000, 400, 150, 70, 30, 10,
      ],
    }),
    [controls.radius, controls.position, props.planet?.detailLevelDistances]
  );

  const colorGenerator = useColorGenerator(props.name, {
    biomeNoise: Object.assign(
      {
        octaves: 2,
        persistence: 0.5,
        lacunarity: 2.0,
        scale: 2048.0,
        noiseType: "simplex" as const,
        seed: 2,
        exponentiation: 1,
        height: 1.0,
      },
      props.biomeNoise ?? {}
    ),
    gradient: [
      [COLORS.DEEP_OCEAN, 0],
      [COLORS.SHALLOW_OCEAN, 0.05],
      [COLORS.FOREST_TROPICAL, 0.1],
      ["#6f5231", 0.2],
      ["#6f5231", 0.35],
      [COLORS.SNOW, 0.4],
    ],
    planet: planetConfig,
    maxElevation: props.maxElevation ?? 0.5,
  });

  const heightGenerator = useHeightGenerator(
    props.name,
    Object.assign(
      {
        octaves: 10,
        persistence: 0.5,
        lacunarity: 1.56,
        exponentiation: 5.4,
        height: 1,
        scale: 400,
        noiseType: "simplex" as const,
        seed: 1,
      },
      props.terrainNoise ?? {}
    )
  );

  const { worker, ...settings } = useControls(props.name, {
    settings: folder({
      applyHeight: props.settings?.applyHeight ?? true,
      applyColor: props.settings?.applyColor ?? true,
      debugColor: props.settings?.debugColor ?? [0.5, 0.5, 0.5],
      projectToSphere: props.settings?.projectToSphere ?? true,
    }),
    worker: true,
  });

  return {
    colorGenerator,
    heightGenerator,
    worker,
    settings,
    resolution,
    planet: planetConfig,
  };
}

export function Planet(props: PlanetProps) {
  const {
    colorGenerator,
    heightGenerator,
    worker,
    settings,
    resolution,
    planet,
  } = usePlanetGenerators(props);

  return (
    <PlanetSphere
      {...props}
      heightGenerator={heightGenerator}
      colorGenerator={colorGenerator}
      worker={worker}
      settings={settings}
      resolution={resolution}
      planet={planet}
    />
  );
}

interface PlanetProps
  extends Overwrite<
    PlanetMeshProps,
    {
      name: string;
      radius: number;
      biomeNoise?: Partial<NoiseParams>;
      maxElevation?: number;
      terrainNoise?: Partial<NoiseParams>;
      settings?: Partial<MeshGeneratorSettings>;
    }
  > {}

export function PlanetPlane(props: PlanetProps & { width: number }) {
  const {
    colorGenerator,
    heightGenerator,
    worker,
    settings,
    resolution,
    planet,
  } = usePlanetGenerators({
    ...props,
    settings: {
      ...(props.settings ?? {}),
      projectToSphere: false,
    },
  });

  let chunksX = Math.ceil(props.width / (planet.radius * 2));
  let chunksZ = Math.ceil(props.width / (planet.radius * 2));
  let chunkSize = props.radius * 2;

  return (
    <>
      {[...new Array(chunksX).fill(0)].map((_, x) =>
        [...new Array(chunksZ).fill(0)].map((_, z) => {
          return (
            <PlanetMesh
              {...props}
              heightGenerator={heightGenerator}
              colorGenerator={colorGenerator}
              worker={worker}
              settings={settings}
              position={planet.position}
              localUp={DIRECTIONS.UP}
              resolution={resolution}
              // receiveShadow={true}
              radius={planet.radius}
              planet={planet}
              frustumCulled={false}
              key={`${x}.${z}`}
              offset={[
                chunkSize * x - props.width / 4,
                0,
                chunkSize * z - props.width / 4,
              ]}
            />
          );
        })
      )}
    </>
  );
}
