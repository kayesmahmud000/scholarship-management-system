import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { MdDeleteForever } from "react-icons/md";
import toast from "react-hot-toast";
import LoadingSpinner from "../../components/LoadingSpinner";
import Heading from "../../components/shared/Heading";



const ManageReview = () => {
    const axiosSecure = useAxiosSecure()
    const { data: reviews = {}, refetch, isLoading } = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/reviews')
            return data
        }
    })
    const handleDelete= async(id)=>{
        console.log(id)
        try{
            await axiosSecure.delete(`/review/${id}`)
        toast.success("Review delete successful!")
        refetch()
        }catch (err){
            console.log(err)
        }

    }

    if(isLoading) return <LoadingSpinner/>
    console.log(reviews)
    return (
        <div className="max-w-6xl mx-auto">
            <Heading title={'Manage Reviews'} subtitle={''}/>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 my-16 lg:grid-cols-3">
                {
                    reviews && reviews.length > 0 ? reviews.map(review => <div key={review?._id} className="flex bg-[#2C2536]  flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md ">
                        <div className="flex justify-between items-center">
                           <div className="flex space-x-4">
                           <img alt="" src={review?.userPhoto} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                            <div className="flex flex-col space-y-1">
                                <h2 rel="noopener noreferrer" className="text-lg font-semibold">{review?.userName}</h2>
                                <span className="text-xs ">{review?.reviewDate}</span>
                            </div>
                           </div>
                            <button onClick={()=>handleDelete(review?._id)} className="cursor-pointer font-semibold">
                                                   <MdDeleteForever className="text-red-400" size={24} />
                                               </button>
                        </div>

                        <div>
                            <h2 className="mb-1 text-xl font-semibold">  University Name: {review?.universityName}</h2>
                            <p> Subject Category : {review?.subjectCategory}</p>
                            <div className="review-rating text-yellow-500 ">
                             <span className="text-white "> Rating:</span>  {"★".repeat(review?.rating) + "☆".repeat(5 - review?.rating)} {review?.rating}
                            </div>
                            <p className="text-sm"> Comment : {review?.comment}</p>
                        </div>
                        <div className="flex flex-wrap justify-between">
                            <div className="space-x-2">

                            </div>
                            <div className="flex space-x-2 text-sm dark:text-gray-600">

                            </div>
                        </div>
                    </div>) : <p>No Review Found</p>
                }
            </div>
        </div>
    );
};

export default ManageReview;