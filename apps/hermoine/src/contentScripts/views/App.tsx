import { createSignal } from "solid-js";
import IronMan from "~icons/whh/ironman";

export function App() {
  const [show, setShow] = createSignal(false);
  return (
    <div class="fixed right-0 bottom-0 m-5 z-100 flex font-sans select-none leading-1em">
      <div
        class={`bg-white text-gray-800 rounded-full shadow w-max h-min p-x-4 p-y-2 my-auto mr-2 transition-opacity transition-duration-300 ${
          show() ? "opacity-100" : "opacity-0"
        }`}
      >
        Vitesse WebExt
      </div>
      <div
        class="flex w-14 h-14 rounded-full shadow cursor-pointer filter blur bg-yellow-400 hover:filter-none"
        onClick={() => setShow(!show())}
      >
        <IronMan class="block m-auto text-[2.5rem] text-red-700 fill-current" />
      </div>
    </div>
  );
}
