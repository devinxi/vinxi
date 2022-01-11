import { storageLocal } from "~/logic/storage";
import { createEffect, createSignal } from "solid-js";

export function openOptionsPage() {
  chrome.runtime.openOptionsPage();
}

export function Popup() {
  const [value, setValue] = createSignal("");

  createEffect(async () => {
    const data = await storageLocal.getItem("name");

    if (data) {
      setValue(data);
      return;
    }

    let v = "unknown";
    storageLocal.setItem("name", v);
    setValue(v);
  });
  return (
    <main class="w-[300px] px-4 py-5 text-center text-gray-700">
      {/* <Logo /> */}
      <div>Popup</div>
      <p class="mt-2 opacity-50">This is the popup page</p>
      <button class="btn mt-2" onClick={openOptionsPage}>
        Open Options
      </button>
      <div class="mt-2">
        <span class="opacity-50">Storage: {value()}</span>
      </div>
    </main>
  );
}
