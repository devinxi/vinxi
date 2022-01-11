import { render } from "solid-js/web";
import "../styles";
import { Options } from "./Options";

let root = document.getElementById("app")!;
root.innerHTML = "";
render(() => <Options />, root);
