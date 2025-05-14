import { createBrowserRouter } from "react-router-dom";
import { type JSX, lazy, type LazyExoticComponent } from "react";

type Component = LazyExoticComponent<() => JSX.Element>;

const BaseLayout = lazy(() => import("@/app/layouts/base-layout"));

const Home: Component = lazy(() => import("@/pages/home"));
const Client: Component = lazy(() => import("@/pages/client"));
const Scoring: Component = lazy(() => import("@/pages/scoring"));
const Services: Component = lazy(() => import("@/pages/services"));

export const Router = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <BaseLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "client",
          element: <Client />,
        },
        {
          path: "scoring",
          element: <Scoring />,
        },
        {
          path: "services",
          element: <Services />,
        },
      ],
    },
  ]);
};
