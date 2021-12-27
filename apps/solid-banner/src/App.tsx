// import { Route, Routes } from "solid-app-router";
import { createContext, createEffect, createMemo, createSignal, DEV } from "solid-js";
import { Dynamic } from "solid-three";
import { main } from "./sprinkles.css";
import { createControls } from "solid-leva";
import { button, LevaPanel, levaStore } from "solid-leva";
import Scene from "./Scene";

import { render } from "solid-js/web";

const App = () => {
  createControls(
    "debug",
    {
      vite: button(() => {
        window.open("/__inspect", "_blank");
      })
    },
    {
      collapsed: true
    }
  );

  createControls(
    "docs",
    {
      solid: button(() => {
        window.open("https://www.solidjs.com/tutorial/introduction_basics", "_blank");
      })
    },
    {
      collapsed: true
    }
  );

  return (
    <>
      <main class={main}>
        <Scene />
      </main>
    </>
  );
};

export default App;
