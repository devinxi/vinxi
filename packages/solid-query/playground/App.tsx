import { ErrorBoundary, Suspense, SuspenseList } from "solid-js";
import { createQuery } from "../src/createQuery";
import { QueryClient, QueryClientProvider } from "../src/index";
// @ts-ignore
import showdown from "showdown";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    }
  }
});
var converter = new showdown.Converter(),
  text = "# hello, markdown!",
  html = converter.makeHtml(text);

export function App() {
  return (
    <QueryClientProvider client={client}>
      {/* <Example /> */}
      <div style={{ display: "flex", "flex-direction": "column" }}>
        <SuspenseList revealOrder="forwards">
          <Suspense fallback={<div>Loading</div>}>
            <Readme repo={"solidjs/solid/main"} delay={1000} />
          </Suspense>
          <Suspense fallback={<div>Loading</div>}>
            <Readme repo={"facebook/react/main"} delay={2000} />
          </Suspense>
          <Suspense fallback={<div>Loading</div>}>
            <ErrorBoundary fallback={(err, reset) => <div onClick={reset}>Error: {err.stack}</div>}>
              <Readme repo={"sveltejs/svelte/main"} delay={3000} />
              <Suspense fallback={<div>Loading</div>}>
                <Readme repo={"facebook/react/main"} />
              </Suspense>
            </ErrorBoundary>
          </Suspense>

          <Suspense fallback={<div>Loading</div>}>
            <Readme repo={"solidjs/solid/main"} />
          </Suspense>
          <Suspense fallback={<div>Loading</div>}>
            <ErrorBoundary fallback={(err, reset) => <div onClick={reset}>Error: {err.stack}</div>}>
              <Readme repo={"solidjs/solid/m"} />
            </ErrorBoundary>
          </Suspense>
          <Suspense fallback={<div>Loading</div>}>
            <Readme repo={"solidjs/solid/main"} delay={5000} />
          </Suspense>
        </SuspenseList>
      </div>
    </QueryClientProvider>
  );
}

function Readme(props) {
  const [result] = createQuery({
    queryKey: ["readme", props.repo, props.delay],
    queryFn: () =>
      fetch(`https://raw.githubusercontent.com/${props.repo}/README.md`)
        .then(res => {
          if (res.status !== 200) {
            throw new Error(res.statusText);
          }
          return res;
        })
        .then(
          r =>
            new Promise(res => {
              setTimeout(() => res(r.text()), props.delay ?? 0);
            })
        )
        .then(v => {
          return converter.makeHtml(v);
        })
  });

  return (
    <div style={{ "background-color": result() ? "lightgreen" : "gray" }}>
      {props.repo} {result()?.slice(0, 1)}
    </div>
  );
}
