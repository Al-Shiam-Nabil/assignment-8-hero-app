import { createBrowserRouter } from "react-router";

import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home";
import AllApps from "../Pages/AllApps";
import AppDetails from "../Pages/AppDetails";

export const router=createBrowserRouter([
  {
    path:"/",
    errorElement:<h2>Error page</h2>,
   Component:Root,
   children:[
    {
        index:true,
        Component:Home
    },
    {
      path:"all-apps",
      Component:AllApps
    },
    {
      path:"app-details/:id",
      Component:AppDetails
    }
   ]

  }
])

