import PixelArtsIcon from "~icons/pixelarticons/zap";
import PixelArtsSliders from "~icons/pixelarticons/sliders";
import { storageLocal } from "~/logic";
import { createResource, Show, JSX, createEffect } from "solid-js";

export function Options() {
  const [data, { mutate }] = createResource(() => storageLocal.getItem("name"));
  return (
    <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
      <PixelArtsSliders class="icon-btn mx-2 text-2xl" />
      <div>Options</div>
      <p class="mt-2 opacity-50">This is the options page</p>

      <Show when={data()}>
        <input
          value={data()}
          onChange={v => {
            mutate(v.currentTarget.value);
            storageLocal.setItem("name", v.currentTarget.value);
          }}
          class="border border-gray-400 rounded px-2 py-1 mt-2"
        />
      </Show>

      <div class="mt-4">
        Powered by Vite <PixelArtsIcon class="align-middle" />
      </div>
      <Embedded />
    </main>
  );
}

import { Tldraw as ReactTLDraw, TldrawApp } from "@tldraw/tldraw";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { createSignal } from "solid-js";

export function Embedded(): JSX.Element {
  return (
    <div style={{ padding: "2% 10%", width: "calc(100% - 100px)" }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "500px",
          overflow: "hidden",
          marginBottom: "32px"
        }}
      >
        <ReactPortal />
        {/* <Tldraw id="small5" /> */}
      </div>

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "500px",
          overflow: "hidden"
        }}
      >
        {/* <Tldraw id="embedded" /> */}
      </div>
    </div>
  );
}

function ReactPortal() {
  let [app, setApp] = createSignal(null as TldrawApp | null);
  let [svg, setSvg] = createSignal("" as string | null);
  const ref = (<div></div>) as unknown as HTMLDivElement;

  ReactDOM.render(
    React.createElement(ReactTLDraw, {
      id: "embedded",
      onChange: console.log,
      showUI: true,
      showMenu: false,
      showPages: false,
      showStyles: true,
      showTools: true,
      showZoom: true,
      onMount: setApp
    }),
    ref
  );

  createEffect(() => {
    setSvg(app()?.copySvg() ?? "");
  });

  return (
    <div>
      {ref}
      <div innerHTML={svg()!}></div>
    </div>
  );
}
