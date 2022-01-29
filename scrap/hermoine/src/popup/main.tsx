import { render } from "solid-js/web";
import "../styles";
import { Popup } from "./Popup";

let root = document.getElementById("app")!;
root.innerHTML = "";
render(() => <Popup />, root);
