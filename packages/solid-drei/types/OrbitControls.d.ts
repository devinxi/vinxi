import { ThreeJSX } from "solid-three";
import * as THREE from "three";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";
export declare type OrbitControlsProps = ThreeJSX.Overwrite<ThreeJSX.Object3DNode<OrbitControlsImpl, typeof OrbitControlsImpl>, {
    target?: ThreeJSX.Vector3;
    camera?: THREE.Camera;
    regress?: boolean;
    enableDamping?: boolean;
    makeDefault?: boolean;
    onChange?: (e?: THREE.Event) => void;
    onStart?: (e?: THREE.Event) => void;
    onEnd?: (e?: THREE.Event) => void;
}>;
export declare const OrbitControls: (props: OrbitControlsProps) => null;
//# sourceMappingURL=OrbitControls.d.ts.map