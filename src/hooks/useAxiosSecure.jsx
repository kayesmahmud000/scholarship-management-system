import axios from "axios";

 const axiosSecure= axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`
    
 })
const useAxiosSecure = () => {
    return (
        <div>
            
        </div>
    );
};

export default useAxiosSecure;