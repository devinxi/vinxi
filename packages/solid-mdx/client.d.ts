import { Component } from "solid-js";

declare module "*?mdx" {
  const Comp: Component<{}>;
  export default Comp;
}
