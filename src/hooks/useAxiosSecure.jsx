import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { useEffect } from "react";

 const axiosSecure= axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`

 })
const useAxiosSecure = () => {
   const navigate= useNavigate()
   const {signout}= useAuth()
   useEffect(()=>{
    axiosSecure.interceptors.response.use(response=>{
        return response
       }, async error=>{
        console.log('Error caught from axios interceptor-->', error.response)
        if(error.response.status===401 || error.response.status===403){
            await signout()
            navigate('/')
        }
        return Promise.reject(error)
    
       })
   },[ navigate, signout])
   return axiosSecure
};

export default useAxiosSecure;