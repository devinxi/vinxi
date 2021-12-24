import * as bitECS from 'bitecs'
import { NameComponent } from '../components/NameComponent'
import { getComponent, hasComponent, removeAllComponents } from './component'
import { World } from './world'

export type Entity = number

export const createEntity = (world: World): Entity => {
  const entity = bitECS.addEntity(world)
  world.entities.push(entity)
  return entity
}

export const removeEntity = (entity: Entity, world: World) => {
  if (hasComponent(entity, NameComponent, world)) {
    const { name } = getComponent(entity, NameComponent, world)!
    if (entity === world.namedEntities.get(name)) {
      world.namedEntities.delete(name)
    }
  }
  removeAllComponents(entity, world)
  world.entities.splice(world.entities.indexOf(entity), 1)
  bitECS.removeEntity(world, entity)
}
