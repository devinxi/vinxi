// import { Route, Routes } from "solid-app-router";
import { createContext, createEffect, createMemo, createSignal, DEV } from "solid-js";
import { Dynamic } from "solid-three";
import { main } from "./sprinkles.css";
import { useControls } from "./lib/leva";
import { button, LevaPanel, levaStore } from "solid-leva";
import Scene from "./Scene";
import React from "react";

import { getProject } from "@theatre/core";
import studio from "@theatre/studio";
import { render } from "solid-js/web";

// initialize the studio so the editing tools will show up on the screen
studio.initialize();

const project = getProject("chess");

export const sheet = project.sheet(
  // Our sheet is identified as "Scene"
  "Scene"
);

const newObject = {};

const leva = sheet.object("leva", {
  visible: true,
  vector: {
    x: 0,
    y: 0,
    z: 0
  }
  // vector: [0, 0, 0]
});

export function useTheatre() {
  return sheet;
}

function TheatreProvider() {
  useControls("theatre", {
    hide: button(() => {
      studio.ui.hide();
    }),
    show: button(() => {
      studio.ui.restore();
    }),
    leva: button(() => {
      studio.createPane("leva");
    })
  });

  createEffect(() => {
    let leva = document.getElementById("leva__root");
    studio.onSelectionChange(e => {
      if (
        e.find(i => {
          return i._cache;
        })
      ) {
        console.log(leva);
        // leva.style.left = "100px";
        leva.style.display = "none";

        // ref.current.style.display = "none";
      } else {
        leva.style.display = "block";
      }
    });
  });
  return <></>;
}

const App = () => {
  useControls("debug", {
    vite: button(() => {
      window.open("/__inspect", "_blank");
    })
  });

  useControls("docs", {
    solid: button(() => {
      window.open("https://www.solidjs.com/tutorial/introduction_basics", "_blank");
    })
  });

  return (
    <>
      <TheatreProvider />
      <main class={main}>
        <Scene />
      </main>
    </>
  );
};

export default App;
