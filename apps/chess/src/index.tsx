import "windi.css";
import { Portal } from "solid-js/web";
import App from "./App";
import { Show } from "solid-js";
import { Devtools, render } from "./solid-dev";

import { useControls } from "./lib/leva";


render(() => {
  const controls = useControls("debug", {
    devtools: false
  });
  return (
    <>
      <App />
      <Show when={controls.devtools}>
        <Portal>
          <Devtools />
        </Portal>
      </Show>
    </>
  );
}, document.getElementById("root"));
