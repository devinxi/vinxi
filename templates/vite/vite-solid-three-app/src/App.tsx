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
      scale={2}
      onPointerEnter={(e) => setHovered(true)}
      onPointerLeave={(e) => setHovered(false)}
    >
      <boxBufferGeometry />
      <meshStandardMaterial color={hovered() ? "#60a5fa" : "#3b82f6"} />
    </mesh>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Canvas
          width="480px"
          height="360px"
          camera={{
            position: [3, 3, 3],
          }}
        >
          <ambientLight intensity={0.3} />
          <spotLight position={[0, 5, 10]} intensity={0.5} />
          <Box />
        </Canvas>
        <h1>Solid Three</h1>
        <p>This app is powered by Vite.</p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://solidjs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Solid
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
