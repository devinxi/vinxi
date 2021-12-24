import * as React from "src/react";

function DebugGrid({ size = 100 }) {
  return (
    <group>
      <gridHelper
        material-depthWrite={false}
        // ref={undepth}
        renderOrder={9000}
        args={[size * 10, size * 10, "#17141F", "#060606"]}
        scale={size}
      />
      <gridHelper
        material-depthWrite={false}
        // ref={undepth}
        renderOrder={9001}
        args={[size, size, "#fff", "#17141F"]}
        scale={size / 10}
      />
      <axesHelper renderOrder={9002} scale={size} />
    </group>
  );
}

export default DebugGrid;
