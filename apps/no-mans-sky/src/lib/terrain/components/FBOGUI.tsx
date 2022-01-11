import { useThree } from "solid-three";
import * as React from "solid-react-compat";

type FBOGUIProps = {
  children: React.ReactNode;
};

const SIZE = 200;
const MARGIN = 10;

const FBOGUI: React.FC<FBOGUIProps> = ({ children }) => {
  const size = useThree(state => state.size);

  return (
    <group
      position-z={-0.1}
      position-y={size.height / 2 - SIZE / 2}
      position-x={-size.width / 2 + SIZE / 2}
    >
      {React.Children.map(children, (child, i) => {
        return (
          <group
            scale-x={(size.width / size.height) * SIZE}
            scale-y={SIZE}
            position-y={-SIZE * i - MARGIN * i}
          >
            {child}
          </group>
        );
      })}
    </group>
  );
};

export default FBOGUI;
