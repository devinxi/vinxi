import { createEffect, createRenderEffect } from "solid-js";
import { useControls } from "./lib/leva";
import { buttonGroup } from "solid-leva";
import { getProject } from "@theatre/core";
import studio from "@theatre/studio";

const project = getProject("chess");
const sheet = project.sheet(
  // Our sheet is identified as "Scene"
  "Scene"
);

export function useTheatre() {
  return sheet;
}

import hotkeys from "hotkeys-js";

export function TheatreProvider(props) {
  createRenderEffect(() => {
    studio.initialize();
    studio.ui.hide();
  });
  useControls("theatre", {
    theatre: buttonGroup({
      label: "hide",
      opts: {
        hide: () => {
          studio.ui.hide();
        },
        show: () => {
          studio.ui.restore();
        },
        reset: () => {
          sheet;
        }
      }
    })
  });

  let visible = true;
  createEffect(() => {
    let leva = document.getElementById("leva__root");
    leva.style.display = "none";
    visible = false;

    hotkeys("ctrl+.", function (event, handler) {
      // Prevent the default refresh event under WINDOWS system
      event.preventDefault();
      if (!visible) {
        leva.style.display = "block";
        visible = true;
      } else {
        leva.style.display = "none";
        visible = false;
      }
    });
    // studio.onSelectionChange(e => {
    //   if (
    //     e.find(i => {
    //       // @ts-ignore
    //       return i._cache;
    //     })
    //   ) {
    //     console.log(leva);
    //     // leva.style.left = "100px";
    //     leva.style.display = "none";

    //     // ref.current.style.display = "none";
    //   } else {
    //     // leva.style.display = "block";
    //   }
    // });
  });
  return <></>;
}

import { createStore } from "solid-js/store";

export function useTheatreControls<T>(name: string, data: T): T {
  const sheet = useTheatre();
  let object = sheet.object(
    // The object's key is "Fist object"
    name,
    // These are the object's default values (and as we'll later learn, its props types)
    data as any
  );
  // @ts-ignore
  const [store, setStore] = createStore(object.data);

  createEffect(() => {
    object.onValuesChange(function callback(newValue) {
      setStore(newValue);
    });
  });

  return store;
}
