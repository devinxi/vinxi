import { HTMLElements, SVGElements } from "./elements";

import { createContext, Component, mergeProps, useContext, createComponent } from "solid-js";
import { Dynamic } from "solid-js/web";

export const MDXContext = createContext(
  Object.fromEntries(
    [...HTMLElements, ...SVGElements.keys()].map(el => [
      el,
      function (props: any) {
        props = mergeProps(props, {
          component: el
        });
        return createComponent(Dynamic, props);
      }
    ])
  )
);
export const MDXProvider = () => {
  const context = useContext(MDXContext);
  return context;
};
export const useMDXComponents = () => {
  return useContext(MDXContext);
};
