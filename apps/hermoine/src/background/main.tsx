import { sendMessage, onMessage } from "webext-bridge";

// only on dev mode
if (import.meta.hot) {
  // @ts-expect-error for background HMR
  import("/@vite/client");
  // load latest content script
  import("./contentScriptHMR");
}

chrome.runtime.onInstalled.addListener((): void => {
  // eslint-disable-next-line no-console
  console.log("Extension installed");
});

let previousTabId = 0;

// communication example: send previous tab title from background page
// see shim.d.ts for type declaration
chrome.tabs.onActivated.addListener(async ({ tabId }) => {
  if (!previousTabId) {
    previousTabId = tabId;
    return;
  }

  let tab: chrome.tabs.Tab | undefined;

  try {
    tab = await chrome.tabs.get(previousTabId);
    previousTabId = tabId;
  } catch {
    return;
  }

  // eslint-disable-next-line no-console
  console.log("previous tab", tab);
  sendMessage("tab-prev", { title: tab.title }, { context: "content-script", tabId });
});

onMessage("get-current-tab", async () => {
  try {
    return await new Promise((resolve, reject) => {
      chrome.tabs.query({ active: true, lastFocusedWindow: true }, t => resolve(t[0]));
    });

    // console.log(previousTabId);
    // const tab = await chrome.tabs.get(previousTabId);
    // console.log(tab, previousTabId);
    // return {
    //   title: tab?.title
    // };
  } catch (e) {
    console.error(e);
    return {
      title: undefined
    };
  }
});
