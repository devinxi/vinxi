// import { Route, Routes } from "solid-app-router";
import { main } from "./sprinkles.css";
import { useControls } from "./lib/leva";
import { button } from "solid-leva";
import Scene from "./Scene";
import { StockfishEngine } from "./game";
import { QueryClient, QueryClientProvider } from "solid-query";
import { Router } from "solid-app-router";
import { TheatreProvider } from "./theatre";

const App = () => {
  useControls("debug", {
    vite: button(() => {
      window.open("/__inspect", "_blank");
    })
  });

  useControls("docs", {
    solid: button(() => {
      window.open("https://www.solidjs.com/tutorial/introduction_basics", "_blank");
    })
  });

  return (
    <QueryClientProvider client={new QueryClient()}>
      <Router>
        <TheatreProvider />
        <StockfishEngine />
        <main class={main}>
          <Scene />
          {/* <Routes>
            <Route path={"/game"} component={Scene} />
            <Route path={"/"} component={Dir} />
          </Routes> */}
        </main>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
