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
// import ManageApplication from "../pages/SharedPage/ManageApplication";
import MyApplication from "../pages/Dashboard/User/MyApplication";
import MyReview from "../pages/Dashboard/User/MyReview";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../pages/Dashboard/Common/UpdateProfile";
import ScholarshipDetails from "../pages/ScholarshipDetails/ScholarshipDetails";
import Payment from "../pages/Payment/Payment";
import AdminRoute from "./AdminRoute";
import SharedRoute from "./SharedRoute";
// import Dashboard from "../pages/Dashboard/Common/Dashboard";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AppliedScholarship from "../pages/SharedPage/AppliedScholarship";
import Dashboard from "../pages/Dashboard/Common/Dashboard";
import Analytics from "../pages/Dashboard/Admin/Analytics/Analytics";
// import Analytics from "../pages/Dashboard/Admin/Analytics/Analytics";
// import Analytics from "../pages/Dashboard/Admin/Analytics/Analytics";

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
            element:<AllScholar/>,
            // loader: ()=>fetch(`${import.meta.env.VITE_API_URL}/scholar-count`)
           
        },
        {
            path:"scholarshipDetails/:id",
            element:<PrivateRoute><ScholarshipDetails/></PrivateRoute>
        },
        {
            path:'payment/:id',
            element:<PrivateRoute><Payment/></PrivateRoute>
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
        element:<PrivateRoute><DashboardLayout/></PrivateRoute>,
        children:[
            //dashboard menu
            {
                index: true,
                element:<PrivateRoute><Dashboard/></PrivateRoute>
            },
            //admin menu
            {
              path:'analytics',
              element:<PrivateRoute><AdminRoute><Analytics/> </AdminRoute></PrivateRoute> 
            },
            {
                path:'mangeUser',
                element:<PrivateRoute><AdminRoute><ManageUser/> </AdminRoute></PrivateRoute> 
              },
            //shared menu 
            {
                path:'manageReview',
                element:<PrivateRoute><SharedRoute><ManageReview/></SharedRoute></PrivateRoute>
            },
            {
                path:'addScholarShip',
                element:<PrivateRoute><SharedRoute><AddScholarship/></SharedRoute></PrivateRoute>
            },
            {
                path:'manageScholarShip',
                element:<PrivateRoute><SharedRoute><ManageScholarship/></SharedRoute></PrivateRoute>
            },
            // {
            //     path:'manageApplication',
            //     element:<PrivateRoute><SharedRoute><ManageApplication/></SharedRoute></PrivateRoute>
            // },
           
          
            {
                path:'appliedScholarship',
                element:<PrivateRoute><SharedRoute><AppliedScholarship/></SharedRoute></PrivateRoute>
            },
            // user menu
            {
                path:'myApplication',
                element:<PrivateRoute><MyApplication/></PrivateRoute>
            },
            {
                path:'myReview',
                element:<PrivateRoute><MyReview/></PrivateRoute>
            },
           

          //common menu
            {
                path:'profile',
                element:<PrivateRoute><Profile/></PrivateRoute>
            },
            {
                path:'updateProfile',
                element:<PrivateRoute><UpdateProfile/></PrivateRoute>
            },
        ]
    },
    {
        path:'*',
        element:<ErrorPage></ErrorPage>
    }
  ]);
  
  export default router