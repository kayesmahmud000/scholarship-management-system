import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { saveUser } from "../../api/utils";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";



const GoogleLogin = () => {
    const {googleLogin}=useAuth()
    const navigate =useNavigate()

    const handleGoogleLogin=async ()=>{
        try{
            const data= await googleLogin() 
            await saveUser(data?.user)

            navigate('/')
            toast.success('sign up success')


        }catch (err){
            // console.log(err)
            toast.error(err?.message)
        }

    }
    return (
         <div
         onClick={handleGoogleLogin}
          className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
                  >
                    <FcGoogle size={32} />
                    <p>Continue with Google</p>
                  </div>
    );
};

export default GoogleLogin;