import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AllScholar from "../pages/AllScholar/AllScholar";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Profile from "../pages/Dashboard/Common/Profile";
import DashboardLayout from "../layouts/DashboardLayout";

const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout/>,
      children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"allScholar",
            element:<AllScholar/>
        },
      ]
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/signUp',
        element:<SignUp/>
    },
    {
        path:'/dashboard',
        element:<DashboardLayout/>,
        children:[
            {
                index: true,
                element:<Profile/>
            }
        ]
    },
  ]);
  
  export default router