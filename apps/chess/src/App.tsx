// import { Route, Routes } from "solid-app-router";
import { createMemo, createSignal, DEV } from "solid-js";
import * as demos from "./demos";
import { Dynamic } from "solid-three";
import { main } from "./sprinkles.css";

const defaultComponent = "Basic";
const Demos = Object.entries(demos).reduce(
  (acc, [name, item]) => ({ ...acc, [name]: item }),
  {}
);

const [demo, setDemo] = createSignal(defaultComponent);

const App = () => {
  let demoComponent = createMemo(() => {
    return Demos[demo()].Component;
  });

  // console.log(useMotionValue(0));

  console.log(DEV);
  // const { popperStyles, arrowStyles } = getPlacementData({
  //   popperSize,
  //   anchorRect,
  //   arrowSize,
  //   arrowOffset,
  //   side,
  //   sideOffset,
  //   align,
  //   alignOffset,
  //   shouldAvoidCollisions: !disableCollisions,
  //   collisionBoundariesRect: DOMRect.fromRect({
  //     width: window.innerWidth,
  //     height: window.innerHeight,
  //     x: 0,
  //     y: 0,
  //   }),
  //   collisionTolerance,
  // });

  return (
    <>
      <main class={main}>
        <Dynamic component={demoComponent()} />
        <div
          onClick={() => {
            setDemo((a) => (a === "Scale" ? "Basic" : "Scale"));
          }}
          class="fixed bottom-10 left-10 w-12 h-12 bg-blue-400 rounded-full scale-100 hover:bg-blue-300 z-10"
        ></div>
      </main>
    </>
  );
};

const label = {
  position: "absolute",
  padding: "10px 20px",
  bottom: "unset",
  right: "unset",
  top: 60,
  left: 60,
  maxWidth: 380,
};

// function HtmlLoader() {
//   return (
//     <span style={{ ...label, border: "2px solid #10af90", color: "#10af90" }}>
//       waiting...
//     </span>
//   );
// }

// function ErrorBoundary({ children, fallback, name }: any) {
//   const { ErrorBoundary, didCatch, error } = useErrorBoundary();
//   return didCatch ? (
//     fallback(error)
//   ) : (
//     <ErrorBoundary key={name}>{children}</ErrorBoundary>
//   );
// }

// function Intro() {
//   return (
//     <Page>
//       <Suspense fallback={<HtmlLoader />}>
//         <Switch>
//           <Route
//             exact
//             path="/"
//             component={visibleComponents[defaultComponent].Component}
//           />
//           <Route
//             exact
//             path="/demo/:name"
//             render={({ match }) => {
//               const Component = visibleComponents[match.params.name].Component;
//               return (
//                 <ErrorBoundary
//                   key={match.params.name}
//                   fallback={(e: any) => (
//                     <span
//                       style={{
//                         ...label,
//                         border: "2px solid #ff5050",
//                         color: "#ff5050"
//                       }}
//                     >
//                       {e}
//                     </span>
//                   )}
//                 >
//                   <Component />
//                 </ErrorBoundary>
//               );
//             }}
//           />
//         </Switch>
//       </Suspense>

//       <Dots />
//     </Page>
//   );
// }

// function Dots() {
//   const location = useLocation();
//   const match: any = useRouteMatch("/demo/:name");
//   const dev = React.useMemo(
//     () => new URLSearchParams(location.search).get("dev"),
//     [location.search]
//   );
//   const { bright } = visibleComponents[match?.params.name ?? defaultComponent];
//   return (
//     <>
//       <DemoPanel>
//         {Object.entries(visibleComponents).map(function mapper([name, item]) {
//           const style = {
//             // to complex to optimize
//             background:
//               (!match && name === defaultComponent) ||
//               (match && match.params.name === name)
//                 ? "salmon"
//                 : bright
//                 ? "#2c2d31"
//                 : "white"
//           };
//           return dev ? null : (
//             <Link key={name} to={`/demo/${name}`}>
//               <Spot style={style} />
//             </Link>
//           );
//         })}
//       </DemoPanel>
//       <span style={{ color: bright ? "#2c2d31" : "white" }}>
//         {match?.params.name ?? defaultComponent}
//       </span>
//     </>
//   );
// }

// export default function App() {
//   return (
//     <HashRouter>
//       <Global />
//       <Intro />
//     </HashRouter>
//   );
// }

// const Page = styled(PageImpl)`
//   & > h1 {
//     position: absolute;
//     top: 70px;
//     left: 60px;
//   }

//   & > span {
//     position: absolute;
//     bottom: 60px;
//     right: 60px;
//   }
// `;

// const DemoPanel = styled.div`
//   position: absolute;
//   bottom: 50px;
//   left: 50px;
//   max-width: 250px;
// `;

// const Spot = styled.div`
//   display: inline-block;
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   margin: 8px;
// `;

export default App;
