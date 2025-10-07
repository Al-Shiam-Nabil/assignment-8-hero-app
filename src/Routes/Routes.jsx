import { createBrowserRouter } from "react-router";

import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home";

export const router=createBrowserRouter([
  {
    path:"/",
    errorElement:<h2>Error page</h2>,
   Component:Root,
   children:[
    {
        index:true,
        Component:Home
    }
   ]

  }
])

