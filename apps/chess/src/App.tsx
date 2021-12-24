import logo from "./logo.svg";
import "./App.css";
import { Canvas, useFrame } from "solid-three";
import { createSignal } from "solid-js";
import { Mesh } from "three";

function Box() {
  let mesh: Mesh | undefined;
  const [hovered, setHovered] = createSignal(false);

  useFrame(() => (mesh!.rotation.y += 0.01));

  return (
    <mesh
      ref={mesh}
      onPointerEnter={(e) => setHovered(true)}
      onPointerLeave={(e) => setHovered(false)}
    >
      <boxBufferGeometry />
      <meshStandardMaterial color={hovered() ? "blue" : "red"} />
      <ambientLight />
      <spotLight position={[0, 5, 10]} intensity={1} />
    </mesh>
  );
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Solid Three</h1>
        <p>This app is powered by Vite.</p>
        <Canvas>
          <Box />
        </Canvas>

        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
