import {createBrowserRouter} from "react-router-dom";
import {type JSX, lazy, type LazyExoticComponent} from "react";

type Component = LazyExoticComponent<() => JSX.Element>;

const BaseLayout = lazy(() => import("@/app/layouts/base-layout"));

const Home: Component = lazy(() => import("@/pages/home"));

export const Router = () => {
    return createBrowserRouter([
        {
            path: "/",
            element: <BaseLayout/>,
            children: [
                {
                    path: "/",
                    element: <Home/>,
                },
            ],
        },
    ]);
};
