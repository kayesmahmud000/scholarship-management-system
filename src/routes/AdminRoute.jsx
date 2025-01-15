import { Navigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
// import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";


const AdminRoute = ({ children }) => {
    const [role, isLoading] = useRole()
     const {user, loading}=useAuth()
    if (isLoading|| loading) return <LoadingSpinner />
    if(role==='admin') return children
    return <Navigate to='/dashboard'  replace='true' />
};

export default AdminRoute;