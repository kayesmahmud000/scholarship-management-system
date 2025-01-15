import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";
import LoadingSpinner from "../components/LoadingSpinner";


const ModeratorRoute = ({children}) => {
    const [role, isLoading] = useRole()
    //  const {user, loading}=useAuth()
    if (isLoading) return <LoadingSpinner />
    if(role==="admin")return children
    return <Navigate to='/dashboard'  replace='true' />
};

export default ModeratorRoute;