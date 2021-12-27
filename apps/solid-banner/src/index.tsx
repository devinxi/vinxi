import "windi.css";
import { Portal } from "solid-js/web";
import App from "./App";
import { Show } from "solid-js";
import { Devtools, render } from "./solid-dev";

render(() => {
  return <App />;
}, document.getElementById("root"));
