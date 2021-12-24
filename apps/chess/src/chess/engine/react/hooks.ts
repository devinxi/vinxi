import * as React from "src/react";
import {
  addComponent,
  ComponentRef,
  createEntity,
  Entity,
  getComponent,
  hasComponent,
  InjectionPoint,
  MappedComponent,
  removeComponent,
  removeEntity,
  World,
} from "../ecs";
import { useEngine } from "./engine";
import * as bitecs from "bitecs";
import { InternalWorldContext } from "./core";

export function useEntity({
  onCreated,
  onRemoved,
}: {
  onCreated?: (e: Entity, world: World) => void;
  onRemoved?: (e: Entity, world: World) => void;
}) {
  const world = useInternalWorld();
  const debug = useEngine((d) => d.debug);
  const entity = React.useMemo(() => {
    let entity = createEntity(world);
    debug && console.log("adding entity", entity);
    onCreated?.(entity, world);
    return entity;
  }, []);

  React.useLayoutEffect(() => {
    return () => {
      debug && console.log("removing entity", entity);
      onRemoved?.(entity, world);
      removeEntity(entity, world);
    };
  }, [entity]);

  return entity;
}

export function useInternalWorld() {
  return React.useContext(InternalWorldContext);
}

export function useUpdate(updateFn: Function) {
  const world = useInternalWorld();
  const ref = React.useRef<Function>();
  ref.current = updateFn;
  const cb = React.useCallback(() => {
    ref.current?.(world);
  }, [world]);

  React.useLayoutEffect(() => {
    world.injectedSystems[InjectionPoint.UPDATE].push(cb);

    return () => {
      world.injectedSystems[InjectionPoint.UPDATE].splice(
        world.injectedSystems[InjectionPoint.UPDATE].indexOf(cb),
        1
      );
    };
  }, []);
}

export function useComponent<T extends {}, S extends bitecs.ISchema>(
  entity: number,
  component: MappedComponent<T, S>,
  value: (T & S) | (() => T & S),
  {
    onAdded,
    onRemoved,
    onChange,
    dependencies = [],
  }: {
    onAdded?: (ref: ComponentRef<T, S>, e: Entity, world: World) => void;
    onRemoved?: (ref: ComponentRef<T, S>, e: Entity, world: World) => void;
    onChange?: (ref: ComponentRef<T, S>, e: Entity, world: World) => void;
    dependencies?: any[];
  }
) {
  const world = useInternalWorld();
  const debug = useEngine((d) => d.debug);
  const componentRef = React.useMemo(() => {
    if (hasComponent(entity, component, world)) {
      const ref = getComponent(entity, component, world)!;
      component.set(
        entity,
        typeof value === "function" ? value() : value,
        world
      );
      onChange?.(ref, entity, world);
      debug && console.log("using existing component", ref);
      return ref;
    }

    let ref = addComponent(
      entity,
      component,
      typeof value === "function" ? value() : value!,
      world
    )!;
    onAdded?.(ref, entity, world);
    debug && console.log("adding component", entity, component, value);
    return ref;
  }, []);

  React.useLayoutEffect(() => {
    return () => {
      debug && console.log("removing component", entity, component, value);
      let ref = removeComponent(entity, component, world)!;
      onRemoved?.(ref, entity, world);
    };
  }, [entity, component, world]);

  return componentRef;
}
