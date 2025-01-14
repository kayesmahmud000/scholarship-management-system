import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AllScholar from "../pages/AllScholar/AllScholar";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Profile from "../pages/Dashboard/Common/Profile";
import DashboardLayout from "../layouts/DashboardLayout";
import ManageUser from "../pages/Dashboard/Admin/ManageUser/ManageUser";
import ManageReview from "../pages/SharedPage/ManageReview";
import AddScholarship from "../pages/SharedPage/AddScholarship";
import ManageScholarship from "../pages/SharedPage/ManageScholeaship";
import ManageApplication from "../pages/SharedPage/ManageApplication";
import AppliedScholarship from "../pages/Dashboard/Moderator/AppliedScholarship";
import MyApplication from "../pages/Dashboard/User/MyApplication";
import MyReview from "../pages/Dashboard/User/MyReview";

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
        {
            path:"scholarshipDetails",
            element:<AllScholar/>
        },
      ]
    },
    //authentication 
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/signUp',
        element:<SignUp/>
    },
    //dashboard
    {
        path:'/dashboard',
        element:<DashboardLayout/>,
        children:[
            //admin menu
            {
                index: true,
                element:<ManageUser/>
            },
          
            //shared menu 
            {
                path:'manageReview',
                element:<ManageReview/>
            },
            {
                path:'addScholarShip',
                element:<AddScholarship/>
            },
            {
                path:'manageScholarShip',
                element:<ManageScholarship/>
            },
           
            // {
            //     path:'manageApplication',
            //     element:<ManageApplication/>
            // },
            // moderator menu
            {
                path:'appliedScholarship',
                element:<AppliedScholarship/>
            },
            // user menu
            {
                path:'myApplication',
                element:<MyApplication/>
            },
            {
                path:'myReview',
                element:<MyReview/>
            },
          //common menu
            {
                path:'profile',
                element:<Profile/>
            },
        ]
    },
  ]);
  
  export default router