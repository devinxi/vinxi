/* eslint-disable no-console */
import { onMessage, sendMessage } from "webext-bridge";
import { render } from "solid-js/web";
import "virtual:windi.css";
import { App } from "./views/App";

// Firefox `browser.tabs.executeScript()` requires scripts return a primitive value
(() => {
  console.info("[vitesse-webext] Hello world from content script");

  // communication example: send previous tab title from background page
  onMessage("tab-prev", ({ data }) => {
    console.log(`[vitesse-webext] Navigate from page "${data.title}"`);
  });

  console.log(sendMessage("get-current-tab").then(console.log).catch(console.log));

  // mount component to context window
  const container = document.createElement("div");
  const root = document.createElement("div");
  const styleEl = document.createElement("link");
  const shadowDOM = container.attachShadow?.({ mode: __DEV__ ? "open" : "closed" }) || container;
  styleEl.setAttribute("rel", "stylesheet");
  styleEl.setAttribute("href", chrome.runtime.getURL("dist/contentScripts/style.css"));
  shadowDOM.appendChild(styleEl);
  shadowDOM.appendChild(root);
  document.body.appendChild(container);
  render(() => <App />, root);
})();
