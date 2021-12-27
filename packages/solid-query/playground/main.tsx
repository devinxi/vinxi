import { lazy, Suspense } from "solid-js";
import { render } from "solid-js/web";
import { Router, useRoutes, NavLink, useIsRouting } from "solid-app-router";

import usersData from "./pages/users.data";
import userData from "./pages/users/[id].data";
import customData from "./pages/users/[id]/[custom].data";
import { QueryClientProvider, QueryClient } from "../src";

const All = lazy(() => import("./pages/[...all]"));
const Index = lazy(() => import("./pages/index"));
const Users = lazy(() => import("./pages/users"));
const User = lazy(() => import("./pages/users/[id]"));
const UserIndex = lazy(() => import("./pages/users/[id]/index"));
const UserSettings = lazy(() => import("./pages/users/[id]/settings"));
const UserCustom = lazy(() => import("./pages/users/[id]/[custom]"));
const UserNotFound = lazy(() => import("./pages/users/[id]/[...all]"));

const routes = [
  {
    path: "/users",
    component: Users,
    data: usersData
  },
  {
    path: "/users/:id",
    component: User,
    data: userData,
    children: [
      {
        path: "/",
        component: UserIndex
      },
      {
        path: "/settings",
        component: UserSettings
      },
      {
        path: "/:custom",
        component: UserCustom,
        data: customData
      },
      {
        path: "/*all",
        component: UserNotFound
      }
    ]
  },
  {
    path: "/",
    element: Index
  },
  {
    path: "*all",
    element: All
  }
];

const client = new QueryClient();

function App() {
  const Start = useRoutes(routes);
  const isRouting = useIsRouting();
  return (
    <QueryClientProvider client={client}>
      <style>{`
        .nav {
          margin-right: 5px;
          padding: 4px;
          text-decoration: none;
          display: inline-block;
          background-color: lightgray
        }
        .nav.is-active {
          font-weight: bold;
        }
        .list {
          padding: 4px;
          text-decoration: none;
          display: inline-block;
        }
      `}</style>
      <div class="global-loader" classList={{ "is-loading": isRouting() }}>
        <div class="global-loader-fill" />
      </div>
      <h1>Awesome Site</h1>
      <NavLink class="nav" href="/" end>
        Home
      </NavLink>
      <NavLink class="nav" href="/users?test=hi">
        Users
      </NavLink>
      <Suspense fallback="loading...">
        <Start />
      </Suspense>
    </QueryClientProvider>
  );
}

render(
  () => (
    <Router
      data={() => ({
        theme: "light"
      })}
    >
      <App />
    </Router>
  ),
  document.getElementById("root")!
);
