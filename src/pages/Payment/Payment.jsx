import { loadStripe } from "@stripe/stripe-js";
import CheckOutFrom from "./CheckOutFrom";
import { Elements } from "@stripe/react-stripe-js";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoadingSpinner from "../../components/LoadingSpinner";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PUBLIC_KEY);

const Payment = () => {
    const {id}= useParams()
    const axiosSecure= useAxiosSecure()
    

    const {data: scholar, refetch, isLoading}=useQuery({
        queryKey:['scholar', id ],
        queryFn:async()=>{
            const {data}= await axiosSecure.get(`/scholar/${id}`)
            return data[0]

        }
    })
    // const paymentInfo={
    //         fee: scholar?.applicationFees,
    //         scholarId:scholar?._id,
    //         applicantEmail: user?.email,
    //         applicantName:user?.displayName
        
    //       }
    if(isLoading) return <LoadingSpinner/>
    return (
        <div className="flex justify-center text-center items-center min-h-screen ">
       <div className="flex flex-col max-w-md shadow-2xl sm:p-10 bg-[#2C2536] p-8 rounded-lg  border border-gray-600">
       <h2 className="text-2xl font-bold mb-4">Application Payment</h2>
        <p className="text-lg mb-4">Pay the application fee to proceed with the application.</p>
        
        <div className='my-4'>
                  <p className='text-lg font-semibold text-purple-400'>Application Fee: $ {scholar?.applicationFees}</p>
                </div>
        <div>
            <Elements stripe={stripePromise}>
            <CheckOutFrom scholar={scholar}  refetch={ refetch}/>
            </Elements>
          
        </div>
       </div>
    </div>
    );
};

export default Payment;