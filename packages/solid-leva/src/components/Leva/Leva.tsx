// import { levaStore } from "../../store";
// import { LevaRoot, LevaRootProps } from "./LevaRoot";

import { createEffect } from "solid-js";

// let rootInitialized = false;
// let rootEl: HTMLElement | null = null;

// type LevaProps = Omit<Partial<LevaRootProps>, "store"> & { isRoot?: boolean };

// // uses global store
// export function Leva({ isRoot = false, ...props }: LevaProps) {
//   createEffect(() => {
//     rootInitialized = true;
//     // if this panel was attached somewhere in the app and there is already
//     // a floating panel, we remove it.
//     if (!isRoot && rootEl) {
//       rootEl.remove();
//       rootEl = null;
//     }
//     return () => {
//       if (!isRoot) rootInitialized = false;
//     };
//   }, [isRoot]);

//   return <LevaRoot store={levaStore} {...props} />;
// }

// /**
//  * This hook is used by Leva useControls, and ensures that we spawn a Leva Panel
//  * without the user having to put it into the component tree. This should only
//  * happen when using the global store
//  * @param isGlobalPanel
//  */
// export function useRenderRoot(isGlobalPanel: boolean) {
//   createEffect(() => {
//     if (isGlobalPanel && !rootInitialized) {
//       if (!rootEl) {
//         rootEl =
//           document.getElementById("leva__root") ||
//           Object.assign(document.createElement("div"), { id: "leva__root" });
//         if (document.body) {
//           document.body.appendChild(rootEl);
//           ReactDOM.render(<Leva isRoot />, rootEl);
//         }
//       }
//       rootInitialized = true;
//     }
//   }, [isGlobalPanel]);
// }

import { render } from "solid-js/web";
import { levaStore } from "src/store";
import { LevaPanel } from "./LevaPanel";
let rootInitialized = false;
let rootEl: HTMLElement | null = null;

export function useLevaPanel() {
  createEffect(() => {
    if (!rootInitialized) {
      if (!rootEl) {
        rootEl =
          document.getElementById("leva__root") ||
          Object.assign(document.createElement("div"), { id: "leva__root" });
        if (document.body) {
          document.body.appendChild(rootEl);
          rootEl.className = "fixed top-0 right-20";
          render(
            () => (<LevaPanel store={levaStore} />) as HTMLElement,
            rootEl
          );
        }
      }
      rootInitialized = true;
    }
  });
}
