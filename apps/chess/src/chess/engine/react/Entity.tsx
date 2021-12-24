import * as React from "src/react";
import {
  ComponentType,
  Entity,
  Entity as EntityID,
  events,
  MappedComponent,
  SoAProxy,
} from "../ecs";
import { useComponent, useEntity } from "./hooks";
import * as bitECS from "bitecs";

const EntityContext = React.createContext<EntityID | null>(null);

const _Entity = React.forwardRef<
  number | undefined,
  React.PropsWithChildren<{
    onCreated?: (id: Entity) => void;
  }>
>(function Entity({ children, onCreated }, ref) {
  // const parentEntity = useEntityContext();

  const entity = useEntity({
    onCreated: (e, world) => {
      events.emit("ENTITY_CREATED", {
        entity: e,
        world,
      });
      onCreated?.(e);
    },
    onRemoved: (e, world) => {
      events.emit("ENTITY_DESTROYED", {
        entity: e,
        world,
      });
      onCreated?.(e);
    },
  });

  if (typeof ref === "function") {
    ref(entity);
  } else if (ref) {
    ref.current = entity;
  }

  // React.useLayoutEffect(() => {
  //   // if (parentEntity) {
  //   //   parentEntity.addChild(entity);
  //   // }
  // }, [parentEntity, entity]);
  return (
    <EntityContext.Provider value={entity}>{children}</EntityContext.Provider>
  );
});

export const AddComponent = function AddComponent<
  T extends {},
  S extends bitECS.ISchema = {}
>({
  type,
  value,
  onAdded,
}: {
  type: MappedComponent<T, S>;
  value?: T & S;
  onAdded?: (ref: T & SoAProxy<S>) => void;
}) {
  const entity = useEntityContext()!;
  const component = useComponent(entity, type, value ?? ({} as any), {
    onAdded: (ref, e, world) => {
      events.emit("COMPONENT_ADDED", {
        entity: e,
        componentRef: ref,
        component: type,
        world: world,
      });
      onAdded?.(ref);
    },
    onRemoved: (ref, e, world) =>
      events.emit("COMPONENT_REMOVED", {
        entity: e,
        componentRef: ref,
        component: type,
        world: world,
      }),
    onChange: (ref, e, world) =>
      events.emit("COMPONENT_CHANGED", {
        entity: e,
        componentRef: ref,
        component: type,
        world: world,
      }),
  })!;

  React.useLayoutEffect(() => {
    onAdded?.(component);
  }, [component]);
  return null;
};

export function useEntityContext() {
  return React.useContext(EntityContext);
}

export const v = {
  entity: _Entity,
  component: AddComponent,
};
