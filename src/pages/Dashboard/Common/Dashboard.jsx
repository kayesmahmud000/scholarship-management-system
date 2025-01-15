import { Navigate } from "react-router-dom";
import useRole from "../../../hooks/useRole";
import LoadingSpinner from "../../../components/LoadingSpinner";
import ManageUser from "../Admin/ManageUser/ManageUser";


const Dashboard = () => {
    const [role, isLoading]= useRole()
    console.log(role)

  if(isLoading){
    return <LoadingSpinner></LoadingSpinner>
  }

  if(role === 'user'){
  return <Navigate to={'/dashboard/myApplication'}></Navigate>
  }
  if(role === 'moderator'){
  return <Navigate to={'/dashboard/appliedScholarship'}></Navigate>
  }
  
  return (
    <div>
      {/* <Helmet>
        <title>Dashboard</title>
      </Helmet> */}
    {role === 'admin' && <ManageUser/> }
    </div>
  )
};

export default Dashboard;