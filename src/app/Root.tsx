import { type JSX } from "react";
import { RouterProvider } from "react-router-dom";

import { Router } from "@/app/app-router.tsx";
import { withProviders } from "@/app/providers";

const RootF = (): JSX.Element | null => {
  return <RouterProvider router={Router()} />;
};

export const Root = withProviders(RootF);
