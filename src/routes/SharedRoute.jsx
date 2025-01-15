import { Navigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import useRole from "../hooks/useRole";

const SharedRoute = ({children}) => {
   const [role, isLoading]= useRole()
   if(isLoading) return <LoadingSpinner/>
   if(role ==='admin' || role==='moderator' )return children
   return <Navigate to='/dashboard'  replace='true' />
 };

export default SharedRoute;