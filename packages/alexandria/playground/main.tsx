import { render } from "solid-js/web";
import { App } from "./App";
import { Router, Routes, Route } from "solid-app-router";
// const pages = import.meta.glob("../docs/api/solid-three.*.md");
import Page from "../docs/api/solid-three.md?mdx";
import { MDXContext, MDXProvider, useMDXComponents } from "solid-mdx";
import { createContext, createEffect, createResource, useContext } from "solid-js";
const TypesContext = createContext();
function useTypes(pkg: string) {
  return createResource(async () => {
    return await fetch("/solid-three.api.json").then(r => r.json());
  });
}

// console.log(pages);

function DocsApp() {
  const [data] = useTypes("solid-three");
  const components = useMDXComponents();

  createEffect(() => {
    console.log(data());
  });
  return (
    <TypesContext.Provider value={data}>
      <MDXContext.Provider value={{ ...components, a: props => <div>{props.href}</div> }}>
        <Routes>
          <Route path="/docs/api/solid-three" component={Page} />
          <Route path="*" component={All} />
        </Routes>
      </MDXContext.Provider>
    </TypesContext.Provider>
  );
}

function All() {
  const types = useContext(TypesContext);
  return <pre>{JSON.stringify(types(), null, 2)}</pre>;
}

render(
  () => (
    <>
      <Router>
        <DocsApp />
      </Router>
    </>
  ),
  document.getElementById("root")!
);
