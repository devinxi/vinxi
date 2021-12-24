import * as React from "solid-react-compat";
import { Text } from "@react-three/drei";
import { WebGLRenderTarget } from "three";

import "./DepthSampleMaterial";
import { useThree } from "@react-three/fiber";

type FBODebugProps = {
  fbo: WebGLRenderTarget;
};

export const FBODebug: React.FC<FBODebugProps> = ({ fbo }) => {
  return (
    <mesh>
      <planeGeometry />
      <meshBasicMaterial map={fbo.texture} />
    </mesh>
  );
};

export const FBODepthDebug: React.FC<FBODebugProps> = ({ fbo }) => {
  const { near, far } = useThree((state) => state.camera);

  return (
    <mesh>
      <planeGeometry />
      <depthSampleMaterial
        u_depth={fbo.depthTexture}
        cameraNear={near}
        cameraFar={far}
      />
    </mesh>
  );
};
