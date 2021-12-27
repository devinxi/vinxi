import * as THREE from "three";

const _MIN_NODE_SIZE = 50;

interface QuadTree2Unit {
  bounds: THREE.Box2;
  children: QuadTree2Unit[];
  center: THREE.Vector2;
  size: THREE.Vector2;
}

export class QuadTree2 {
  root: QuadTree2Unit;
  minNodeSize: number;
  constructor(params: { min: THREE.Vector2; max: THREE.Vector2; minNodeSize: number }) {
    const b = new THREE.Box2(params.min, params.max);
    this.root = {
      bounds: b,
      children: [],
      center: b.getCenter(new THREE.Vector2()),
      size: b.getSize(new THREE.Vector2()),
    };
    this.minNodeSize = params.minNodeSize
  }

  getChildren() {
    const children: QuadTree2Unit[] = [];
    this.getChildrenRecursive(this.root, children);
    return children;
  }

  getChildrenRecursive(node: QuadTree2Unit, target: QuadTree2Unit[]) {
    if (node.children.length == 0) {
      target.push(node);
      return;
    }

    for (let c of node.children) {
      this.getChildrenRecursive(c, target);
    }
  }

  insert(pos: THREE.Vector3) {
    this.insertRecursive(this.root, new THREE.Vector2(pos.x, pos.z));
  }

  insertRecursive(child: QuadTree2Unit, pos: THREE.Vector2) {
    const distToChild = this.distanceToChild(child, pos);

    if (distToChild < child.size.x && child.size.x > this.minNodeSize) {
      child.children = this.createChildren(child);

      for (let c of child.children) {
        this.insertRecursive(c, pos);
      }
    }
  }

  distanceToChild(child: QuadTree2Unit, pos: THREE.Vector2) {
    return child.center.distanceTo(pos);
  }

  createChildren(child: QuadTree2Unit) {
    const midpoint = child.bounds.getCenter(new THREE.Vector2());

    // Bottom left
    const b1 = new THREE.Box2(child.bounds.min, midpoint);

    // Bottom right
    const b2 = new THREE.Box2(
      new THREE.Vector2(midpoint.x, child.bounds.min.y),
      new THREE.Vector2(child.bounds.max.x, midpoint.y)
    );

    // Top left
    const b3 = new THREE.Box2(
      new THREE.Vector2(child.bounds.min.x, midpoint.y),
      new THREE.Vector2(midpoint.x, child.bounds.max.y)
    );

    // Top right
    const b4 = new THREE.Box2(midpoint, child.bounds.max);

    const children = [b1, b2, b3, b4].map((b) => {
      return {
        bounds: b,
        children: [],
        center: b.getCenter(new THREE.Vector2()),
        size: b.getSize(new THREE.Vector2()),
      };
    });

    return children;
  }
}

interface CubeQuadTreeSide {
  transform: THREE.Matrix4
  worldToLocal: THREE.Matrix4
  quadTree: QuadTree3
}

interface CubeQuadTreeParams {
  radius: number
  min_node_size: number
}

export class CubeQuadTree {
  params: CubeQuadTreeParams;
  sides: CubeQuadTreeSide[];
  constructor(params: CubeQuadTreeParams) {
    this.params = params;
    this.sides = [];

    const r = params.radius;
    let m;

    const transforms = [];

    // +Y
    m = new THREE.Matrix4();
    m.makeRotationX(-Math.PI / 2);
    m.premultiply(new THREE.Matrix4().makeTranslation(0, r, 0));
    transforms.push(m);

    // -Y
    m = new THREE.Matrix4();
    m.makeRotationX(Math.PI / 2);
    m.premultiply(new THREE.Matrix4().makeTranslation(0, -r, 0));
    transforms.push(m);

    // +X
    m = new THREE.Matrix4();
    m.makeRotationY(Math.PI / 2);
    m.premultiply(new THREE.Matrix4().makeTranslation(r, 0, 0));
    transforms.push(m);

    // -X
    m = new THREE.Matrix4();
    m.makeRotationY(-Math.PI / 2);
    m.premultiply(new THREE.Matrix4().makeTranslation(-r, 0, 0));
    transforms.push(m);

    // +Z
    m = new THREE.Matrix4();
    m.premultiply(new THREE.Matrix4().makeTranslation(0, 0, r));
    transforms.push(m);

    // -Z
    m = new THREE.Matrix4();
    m.makeRotationY(Math.PI);
    m.premultiply(new THREE.Matrix4().makeTranslation(0, 0, -r));
    transforms.push(m);

    for (let t of transforms) {
      this.sides.push({
        transform: t.clone(),
        worldToLocal: t.clone().invert(),
        quadTree: new QuadTree3({
          size: r,
          min_node_size: params.min_node_size,
          localToWorld: t
        }),
      });
    }
  }

  getChildren() {
    const children = [];

    for (let s of this.sides) {
      const side = {
        transform: s.transform,
        children: s.quadTree.getChildren(),
      }
      children.push(side);
    }
    return children;
  }

  Insert(pos: THREE.Vector3) {
    for (let s of this.sides) {
      s.quadTree.Insert(pos);
    }
  }
}



interface QuadTree3Unit {
  bounds: THREE.Box3;
  children: QuadTree3Unit[];
  center: THREE.Vector3;
  size: THREE.Vector3;
  root: boolean;
  sphereCenter: THREE.Vector3;
}

interface QuadTree3Params {
  size: number; localToWorld: THREE.Matrix4; min_node_size: number
}

class QuadTree3 {
  root: QuadTree3Unit
  params: QuadTree3Params;

  constructor(params: QuadTree3Params) {
    const s = params.size;
    const b = new THREE.Box3(
      new THREE.Vector3(-s, -s, 0),
      new THREE.Vector3(s, s, 0));
    this.root = {
      bounds: b,
      children: [],
      center: b.getCenter(new THREE.Vector3()),
      sphereCenter: b.getCenter(new THREE.Vector3()),
      size: b.getSize(new THREE.Vector3()),
      root: true,
    };

    this.params = params;
    this.root.sphereCenter = this.root.center.clone();
    this.root.sphereCenter.applyMatrix4(this.params.localToWorld);
    this.root.sphereCenter.normalize();
    this.root.sphereCenter.multiplyScalar(this.params.size);
  }

  getChildren() {
    const children: QuadTree3Unit[] = [];
    this.getChildrenRecursive(this.root, children);
    return children;
  }

  getChildrenRecursive(node: QuadTree3Unit, target: QuadTree3Unit[]) {
    if (node.children.length == 0) {
      target.push(node);
      return;
    }

    for (let c of node.children) {
      this.getChildrenRecursive(c, target);
    }
  }

  Insert(pos: THREE.Vector3) {
    this._Insert(this.root, pos);
  }

  _Insert(child: QuadTree3Unit, pos: THREE.Vector3) {
    const distToChild = this._DistanceToChild(child, pos);

    if (distToChild < child.size.x * 1.0 && child.size.x > this.params.min_node_size) {
      child.children = this._CreateChildren(child);

      for (let c of child.children) {
        this._Insert(c, pos);
      }
    }
  }

  _DistanceToChild(child: QuadTree3Unit, pos: THREE.Vector3) {
    return child.sphereCenter.distanceTo(pos);
  }

  _CreateChildren(child: QuadTree3Unit) {
    const midpoint = child.bounds.getCenter(new THREE.Vector3());

    // Bottom left
    const b1 = new THREE.Box3(child.bounds.min, midpoint);

    // Bottom right
    const b2 = new THREE.Box3(
      new THREE.Vector3(midpoint.x, child.bounds.min.y, 0),
      new THREE.Vector3(child.bounds.max.x, midpoint.y, 0));

    // Top left
    const b3 = new THREE.Box3(
      new THREE.Vector3(child.bounds.min.x, midpoint.y, 0),
      new THREE.Vector3(midpoint.x, child.bounds.max.y, 0));

    // Top right
    const b4 = new THREE.Box3(midpoint, child.bounds.max);

    const children = [b1, b2, b3, b4].map(
      b => {
        let center = b.getCenter(new THREE.Vector3());
        let sphereCenter = center.clone();
        sphereCenter.applyMatrix4(this.params.localToWorld);
        sphereCenter.normalize()
        sphereCenter.multiplyScalar(this.params.size);

        return {
          bounds: b,
          children: [],
          center,
          size: b.getSize(new THREE.Vector3()),
          root: false,
          sphereCenter
        } as QuadTree3Unit;
      });

    return children;
  }
}
