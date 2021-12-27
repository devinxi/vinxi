import {
  Object3D,
  InstancedMesh,
  Material,
  Mesh,
  BufferGeometry,
  DynamicDrawUsage,
} from "three";
import { Object3DComponent } from "../core/components";
import {
  defineSystem,
  World,
  defineComponent,
  defineQuery,
  addObject3DEntity,
  addComponent,
} from "../core/threecs";

export class InstancedMeshImposter extends Mesh {
  constructor(geometry: BufferGeometry, material: Material) {
    super(geometry, material);
    this.visible = false;
  }
}

export class InstancedMeshRenderer extends InstancedMesh {
  instances: Mesh[];
  isInstancedMeshRenderer: boolean;

  constructor(
    geometry: BufferGeometry,
    material: Material,
    maxInstances: number = 100
  ) {
    super(geometry, material, maxInstances);
    this.instanceMatrix.setUsage(DynamicDrawUsage);
    this.isInstancedMeshRenderer = true;
    this.instances = [];
  }

  createInstance() {
    const mesh = new InstancedMeshImposter(
      this.geometry,
      this.material as Material
    );
    this.instances.push(mesh);
    return mesh;
  }

  removeInstance(mesh: InstancedMeshImposter): boolean {
    const idx = this.instances.indexOf(mesh);

    if (idx === -1) {
      return false;
    }

    this.instances.splice(idx, 1);

    return true;
  }

  update() {
    this.count = this.instances.length;

    for (let i = 0; i < this.instances.length; i++) {
      const instance = this.instances[i];
      instance.updateMatrixWorld();
      this.setMatrixAt(i, instance.matrixWorld);
    }

    this.instanceMatrix.needsUpdate = true;
  }
}

export const InstancedMeshRendererComponent = defineComponent({});

export function addInstancedMeshRendererEntity(
  world: World,
  geometry: BufferGeometry,
  material: Material,
  maxInstances: number = 100,
  parent?: Object3D
) {
  const instancedMeshRenderer = new InstancedMeshRenderer(
    geometry,
    material,
    maxInstances
  );
  const instancedMeshRendererEid = addObject3DEntity(
    world,
    instancedMeshRenderer,
    parent
  );
  addComponent(world, InstancedMeshRendererComponent, instancedMeshRendererEid);

  return [instancedMeshRendererEid, instancedMeshRenderer];
}

export function addInstancedMeshImposterEntity(
  world: World,
  instancedMeshRenderer: InstancedMeshRenderer,
  parent?: Object3D
) {
  const obj = instancedMeshRenderer.createInstance();
  const eid = addObject3DEntity(world, obj, parent);
  return [eid, obj];
}

const instancedMeshRendererQuery = defineQuery([
  InstancedMeshRendererComponent,
  Object3DComponent,
]);

export const InstancedMeshRendererSystem = defineSystem(
  function InstancedMeshRendererSystem(world: World) {
    const entities = instancedMeshRendererQuery(world);

    entities.forEach((eid) => {
      const obj = Object3DComponent.storage.get(eid) as InstancedMeshRenderer;

      if (!obj.isInstancedMeshRenderer) {
        return;
      }

      obj.update();
    });
  }
);
