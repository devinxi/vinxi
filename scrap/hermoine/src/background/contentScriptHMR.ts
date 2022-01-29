import { isFirefox, isForbiddenUrl } from "~/env";

// Firefox fetch files from cache instead of reloading changes from disk,
// hmr will not work as Chromium based browser
chrome.webNavigation.onCommitted.addListener(({ tabId, frameId, url }) => {
  // Filter out non main window events.
  if (frameId !== 0) return;

  if (isForbiddenUrl(url)) return;

  // inject the latest scripts
  chrome.tabs.executeScript(tabId, {
    file: `${isFirefox ? "" : "."}/dist/contentScripts/index.global.js`,
    runAt: "document_end"
  });
});
