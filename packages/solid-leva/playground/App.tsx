import { createControls, button, folder } from "../src/index";
export function App() {
  const controls = createControls("name", {
    number: 0.1,
    number2: {
      value: 1,
      min: 0,
      max: 5
    },
    boolean: true,
    vector2: {
      value: [1, 1],
      step: 1,
      lock: true
    },
    vector0: [1, 1],
    vector3: {
      value: [1, 1, 4],
      step: 1,
      lock: true
    },
    folder: folder({
      numberb: 0.1
    }),
    color: "#abcdef",
    debug: button(() => window.open("/__inspect", "_blank"))
  });
  return <pre>{JSON.stringify({ ...controls }, null, 2)}</pre>;
}
