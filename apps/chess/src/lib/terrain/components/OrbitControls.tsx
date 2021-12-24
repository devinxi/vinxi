import * as React from "solid-react-compat";
import { OrbitControls as OrbitContorlsImpl } from "@react-three/drei";
import { useEditorStore } from "./useEditorStore";

export function OrbitControls() {
  const enabled = useEditorStore((state) => !state.transforming);

  return (
    <OrbitContorlsImpl
      enabled={enabled}
      ref={(ref) =>
        useEditorStore.setState({
          orbitControls: ref,
        })
      }
    />
  );
}

export default OrbitControls;
