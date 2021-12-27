/** Functions to provide engine level functionalities. */
import * as bitecs from 'bitecs'
import { Entity, createEntity } from './entity'
import { InjectionPoint, SystemInitializeType } from './system'
import { Camera, PerspectiveCamera, Scene, WebGLRenderer } from 'three'

export type IWorld<T extends {} = {}> = bitecs.IWorld & T

type SystemGroupInterface = (() => void)[]

export type World<T extends {} = {}> = IWorld<{
  delta: number;
  elapsedTime: number;
  fixedDelta: number;
  id: number;
  scene: Scene | null;
  renderer: WebGLRenderer | null;
  mainCamera: Camera | null;
  mainCameraEntity: Entity
  mainCameraFollowTarget: Entity
  fixedElapsedTime: number;
  entities: number[];
  _freePipeline: SystemInitializeType<any>[],
  _fixedPipeline: SystemInitializeType<any>[],
  _injectedPipelines: Record<keyof typeof InjectionPoint, SystemInitializeType<any>[]>,
  freeSystems: SystemGroupInterface,
  fixedSystems: SystemGroupInterface,
  injectedSystems: Record<keyof typeof InjectionPoint, SystemGroupInterface>,
  _removedComponents: any
} & T>

let WORLD_ID = 0

export function createWorld(): World<{}> {
  console.log('Creating world')

  const world: World = Object.assign(bitecs.createWorld(), {
    id: WORLD_ID++,
    delta: -1,
    elapsedTime: -1,
    fixedDelta: -1,
    fixedElapsedTime: -1,
    entities: [] as Entity[],
    _freePipeline: [] as SystemInitializeType<any>[],
    _fixedPipeline: [] as SystemInitializeType<any>[],
    _injectedPipelines: {
      [InjectionPoint.UPDATE]: [] as SystemInitializeType<any>[],
      [InjectionPoint.FIXED_EARLY]: [] as SystemInitializeType<any>[],
      [InjectionPoint.FIXED]: [] as SystemInitializeType<any>[],
      [InjectionPoint.FIXED_LATE]: [] as SystemInitializeType<any>[],
      [InjectionPoint.PRE_RENDER]: [] as SystemInitializeType<any>[],
      [InjectionPoint.POST_RENDER]: [] as SystemInitializeType<any>[]
    },
    /**
 * Systems that run only once every frame.
 * Ideal for cosmetic updates (e.g., particles), animation, rendering, etc.
 */
    freeSystems: [] as SystemGroupInterface,

    /**
     * Systems that run once for every fixed time interval (in simulation time).
     * Ideal for game logic, ai logic, simulation logic, etc.
     */
    fixedSystems: [] as SystemGroupInterface,

    injectedSystems: {
      [InjectionPoint.UPDATE]: [] as SystemGroupInterface,
      [InjectionPoint.FIXED_EARLY]: [] as SystemGroupInterface,
      [InjectionPoint.FIXED]: [] as SystemGroupInterface,
      [InjectionPoint.FIXED_LATE]: [] as SystemGroupInterface,
      [InjectionPoint.PRE_RENDER]: [] as SystemGroupInterface,
      [InjectionPoint.POST_RENDER]: [] as SystemGroupInterface
    },

    scene: new Scene(),
    renderer: null as WebGLRenderer | null,
    mainCamera: null as Camera | null,
    mainCameraEntity: 0 as Entity,
    mainCameraFollowTarget: 0 as Entity,
    _removedComponents: new Map<any, any>(),
  })

  createEntity(world) // make sure we have no eid 0 so that if (!entity) works; also, world entity = 0?

  return world
}

export async function executeWorld(world: World, delta: number, elapsedTime: number) {
  world.delta = delta
  world.elapsedTime = elapsedTime
  for (const system of world.freeSystems) system()
  for (const [entity, components] of world._removedComponents) {
    for (const c of components) c.delete(entity)
  }
  world._removedComponents.clear()

}

export async function initializeRegisteredSystems(world: World) {
  const loadSystem = (pipeline: SystemInitializeType<any>[]) => {
    return pipeline.map(async (s) => {
      return (await s.system).default(world, s.args)
    })
  }

  const fixedSystemPromises = Promise.all(loadSystem(world._fixedPipeline))
  const freeSystemsPromises = Promise.all(loadSystem(world._freePipeline))
  const injectedSystemsPromises = Promise.all(
    Object.entries(world._injectedPipelines).map(async ([pipelineType, pipeline]) => {
      return [pipelineType, await Promise.all(loadSystem(pipeline))]
    })
  )

  const [fixedSystems, freeSystems, injectedSystems] = await Promise.all([
    fixedSystemPromises,
    freeSystemsPromises,
    injectedSystemsPromises
  ])
  world.fixedSystems = fixedSystems
  world.freeSystems = freeSystems
  world.injectedSystems = Object.fromEntries(injectedSystems)
}



