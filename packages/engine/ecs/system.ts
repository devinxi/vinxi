/** Functions to provide system level functionalities. */

import { World } from "./world"


/** Types of System Update
 *
 * @author Fernando Serrano, Robert Long
 */

export enum SystemUpdateType {
  Free = 0,
  Fixed = 1
}

export type System = () => void



export type CreateSystemFunctionType<A extends any, T extends {} = {}> = (world: World<T>, props: A) => Promise<System>
export type SystemModulePromise<A extends any, T extends {} = {}> = Promise<{ default: CreateSystemFunctionType<A, T> }>

export const InjectionPoint = {
  UPDATE: 'UPDATE' as const,
  FIXED_EARLY: 'FIXED_EARLY' as const,
  FIXED: 'FIXED' as const,
  FIXED_LATE: 'FIXED_LATE' as const,
  PRE_RENDER: 'PRE_RENDER' as const,
  POST_RENDER: 'POST_RENDER' as const
}

export type SystemInitializeType<A> = {
  system: SystemModulePromise<A>
  type?: SystemUpdateType
  args?: A
}

export interface SystemInjectionType<A> extends SystemInitializeType<A> {
  injectionPoint: keyof typeof InjectionPoint
}

export function defineSystem(systemCreator: CreateSystemFunctionType<void>) {
  return new Promise(res => res({ default: systemCreator as CreateSystemFunctionType<void> })) as SystemModulePromise<void>
}

export const registerSystem = (type: SystemUpdateType, system: SystemModulePromise<void>, world: World) => {
  const pipeline = type === SystemUpdateType.Free ? world._freePipeline : world._fixedPipeline
  pipeline.push({ type, system: system, args: undefined }) // yes undefined, V8...
}

export const registerSystemWithArgs = <A>(type: SystemUpdateType, system: SystemModulePromise<A>, args: A, world: World) => {
  const pipeline = type === SystemUpdateType.Free ? world._freePipeline : world._fixedPipeline
  pipeline.push({ type, system: system, args })
}

export const unregisterSystem = <A>(type: SystemUpdateType, system: SystemModulePromise<void>, world: World) => {
  const pipeline = type === SystemUpdateType.Free ? world._freePipeline : world._fixedPipeline
  const idx = pipeline.findIndex((i) => {
    return i.system === system
  })
  pipeline.splice(idx, 1)
}

export const injectSystem = <A>(world: World, init: SystemInjectionType<A>) => {
  world._injectedPipelines[init.injectionPoint].push({ system: init.system, args: init.args })
}


