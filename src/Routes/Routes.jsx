import { createBrowserRouter } from "react-router";

import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home";
import AllApps from "../Pages/AllApps";
import AppDetails from "../Pages/AppDetails";
import ErrorPage from "../Pages/Error/ErrorPage";
import Installation from "../Pages/Installation ";
import CardError from "../Pages/Error/CardError";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <CardError></CardError>,
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "all-apps",
        Component: AllApps,
      },
      {
        path: "app-details/:id",

        Component: AppDetails,
      },
      {
        path: "installedApps",
        Component: Installation,
      },
    ],
  },
]);
