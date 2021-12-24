import { getNonce } from "../utils/nonce";

// Bundler is configured to load this as a processed minified CSS-string
import styles from "../css/styles.css";
import { createEffect } from "solid-js";

const styleElementMap: Map<Document, HTMLStyleElement> = new Map();

/**
 * Injects CSS code into the document's <head>
 */
export const useStyleSheet = (nodeRef: { current: HTMLDivElement }): void => {
  createEffect(() => {
    const parentDocument = nodeRef.current
      ? nodeRef.current.ownerDocument
      : document;

    if (
      typeof parentDocument !== "undefined" &&
      !styleElementMap.has(parentDocument)
    ) {
      const styleElement = parentDocument.createElement("style");
      styleElement.innerHTML = styles;
      styleElementMap.set(parentDocument, styleElement);

      // Conform to CSP rules by setting `nonce` attribute to the inline styles
      const nonce = getNonce();
      if (nonce) styleElement.setAttribute("nonce", nonce);

      parentDocument.head.appendChild(styleElement);
    }
  });
};
