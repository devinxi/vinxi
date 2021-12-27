import * as bitECS from 'bitecs'
import { events } from './events'
import { Entity } from './entity'
import { World } from './world'

export type ComponentRef<T extends {}, S extends bitECS.ISchema = {}> = T & SoAProxy<S>

export type ISchema = bitECS.ISchema

let COMPONENT_ID = 0

// TODO: benchmark map vs array for componentMap
export const defineComponent = <T extends {}, S extends bitECS.ISchema = {}>(schema?: S, defaultValues = {}): MappedComponent<T, S> => {
  const component = bitECS.defineComponent(schema)
  const componentMap = new Map<string, ComponentRef<T, S>>()

  // const componentMap = []

  // if (defaultValues) {
  //   Object.defineProperty(component, '_default', {
  //     value: defaultValues
  //   })
  // }
  if (schema) {
    Object.defineProperty(component, '_schema', {
      value: schema
    })
  }

  Object.defineProperty(component, '_id', {
    value: COMPONENT_ID++
  })
  // Object.defineProperty(component, '_map', {
  //   value: componentMap
  // })
  Object.defineProperty(component, 'get', {
    value: function (eid: number, world: World) {
      return componentMap.get(`${world.id}/${eid}`)
    }
  })
  Object.defineProperty(component, 'set', {
    value: function (eid: number, value: any, world: World,) {
      if (schema) {
        Object.defineProperties(
          value,
          Object.keys(schema).reduce((a, k) => {
            a[k] = {
              get() {
                // @ts-ignore
                return component[k][eid]
              },
              set(val) {
                // @ts-ignore
                component[k][eid] = val
              }
            }
            return a
          }, {} as { [key: string]: { get(): any; set(val: any): void } })
        )
      }
      // componentMap[eid] = value
      return componentMap.set(`${world.id}/${eid}`, value)
    }
  })
  Object.defineProperty(component, 'delete', {
    value: function (eid: number, world: World) {
      return componentMap.delete(`${world.id}/${eid}`)
    }
  })

  return component as MappedComponent<T, S>
}

export type SoAProxy<S extends bitECS.ISchema> = {
  [key in keyof S]: S[key] extends bitECS.Type
  ? number
  : S[key] extends [infer RT, number]
  ? RT extends bitECS.Type
  ? Array<number>
  : unknown
  : S[key] extends bitECS.ISchema
  ? SoAProxy<S[key]>
  : unknown
}

export type MappedComponent<T, S extends bitECS.ISchema> = bitECS.ComponentType<S> & {
  get: (entity: number, world: World) => ComponentRef<T, S>
  set: (entity: number, value: T, world: World) => void
  delete: (entity: number, world: World) => void
  _schema: S
  _id: number
  _map: Map<number, ComponentRef<T, S>>
  _type: T
}

export type MappedComponentRef<T extends MappedComponent<any, any>> = ComponentRef<T['_type'], T['_schema']>

export type ComponentConstructor<T, S extends bitECS.ISchema> = MappedComponent<T, S>
export type ComponentType<C extends MappedComponent<any, any>> = ReturnType<C['get']>

export const getComponent = <T extends any, S extends bitECS.ISchema>(
  entity: Entity,
  component: MappedComponent<T, S>,
  world: World,
  getRemoved = false,
): (T & SoAProxy<S>) | undefined => {
  if (typeof entity === 'undefined') {
    console.warn('[getComponent]: entity is undefined')
    return
  }
  if (getRemoved || hasComponent(entity, component, world)) return component.get(entity, world)
}

export const addComponent = <T extends any, S extends bitECS.ISchema>(
  entity: Entity,
  component: MappedComponent<T, S>,
  args: T & S,
  world: World,
) => {
  if (typeof entity === 'undefined') {
    console.warn('[addComponent]: entity is undefined')
    return
  }
  bitECS.addComponent(world, component, entity)
  if (component._schema) {
    for (const [key] of Object.entries(component._schema)) {
      // @ts-ignore
      component[key][entity] = args[key]
    }
  }
  world._removedComponents.get(entity)?.delete(component)
  component.set(entity, args, world)
  return component.get(entity, world)
}

export const hasComponent = <T extends any, S extends bitECS.ISchema>(
  entity: Entity,
  component: MappedComponent<T, S>,
  world: World,
) => {
  if (typeof entity === 'undefined') {
    console.warn('[hasComponent]: entity is undefined')
    return
  }
  // return typeof component.get(entity) !== 'undefined'
  return bitECS.hasComponent(world, component, entity)
}

export const removeComponent = <T extends any, S extends bitECS.ISchema>(
  entity: Entity,
  component: MappedComponent<T, S>,
  world: World
) => {
  if (typeof entity === 'undefined') {
    console.warn('[removeComponent]: entity is undefined')
    return
  }
  const componentRef = component.get(entity, world)
  const removed = world._removedComponents.get(entity) ?? new Set()
  world._removedComponents.set(entity, removed.add(component))
  bitECS.removeComponent(world, component, entity)
  return componentRef
}

export const getAllComponentsOfType = <T extends any, S extends bitECS.ISchema>(
  component: MappedComponent<T, S>,
  world: World
): T[] => {
  const query = defineQuery([component])
  const entities = query(world)
  return entities.map((e) => {
    return getComponent(e, component, world)!
  })
}

export const getAllEntitiesWithComponent = <T extends any, S extends bitECS.ISchema>(
  component: MappedComponent<T, S>,
  world: World
): Entity[] => {
  const query = defineQuery([component])
  return query(world)
}

export const removeAllComponents = (entity: Entity, world: World) => {
  for (const component of bitECS.getEntityComponents(world, entity)) {
    removeComponent(entity, component as MappedComponent<any, any>, world)
  }
}

export function defineQuery(components: (bitECS.Component | bitECS.QueryModifier)[]) {
  const query = bitECS.defineQuery(components) as bitECS.Query
  const enterQuery = bitECS.enterQuery(query)
  const exitQuery = bitECS.exitQuery(query)
  const wrappedQuery = (world: World) => query(world)
  wrappedQuery.enter = (world: World) => enterQuery(world)
  wrappedQuery.exit = (world: World) => exitQuery(world)
  return wrappedQuery
}
