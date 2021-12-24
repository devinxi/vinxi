import { shaderMaterial } from "@react-three/drei";
import { extend, MaterialNode } from "@react-three/fiber";
import * as THREE from "three";

const defaultVertexShader = /* glsl */ `
varying vec2 vUv;

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}`;

export const DepthSampleMaterial: typeof THREE.Material = shaderMaterial(
  {
    u_depth: null,
    cameraNear: 0,
    cameraFar: 1,
  },
  defaultVertexShader,
  /* glsl */ `
#include <packing>
  
varying vec2 vUv;
uniform sampler2D u_depth;

uniform float cameraNear;
uniform float cameraFar;

float readDepth( sampler2D depthSampler, vec2 coord ) {
  float fragCoordZ = texture2D( depthSampler, coord ).x;
  float viewZ = orthographicDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
  return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
}

void main() {
  float depth = readDepth( u_depth, vUv );

  gl_FragColor.rgb = 1.0 - vec3( pow(depth, 20.) );
  gl_FragColor.a = 1.0;
}
`
);

extend({ DepthSampleMaterial });

declare global {
  export namespace JSX {
    interface IntrinsicElements {
      depthSampleMaterial: MaterialNode<
        THREE.ShaderMaterial,
        [THREE.ShaderMaterialParameters]
      >;
    }
  }
}
