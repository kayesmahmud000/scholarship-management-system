import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useState } from "react";
import UpdateReview from "../../Modal/UpdateReview";


const ReviewRow = ({review, refetch}) => {
    const axiosSecure =useAxiosSecure()
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const {scholarshipName, 
        universityName,
        comment,
        reviewDate,
        _id

        }=review||{}

        const handleDelete= async()=>{
            // console.log(review._id)
            try{
                await axiosSecure.delete(`/review/${_id}`)
                toast.success('Review deleted successful!')
                refetch()
            }catch (err){
                // console.log(err)
            }
        }
        // const handleUpdateBtn=()=>{

        // }
    return (
       <>
        <tr className="">
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-black">
                    {scholarshipName}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-black">
                    {universityName}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs text-black">
                    {comment}
                </td>
                <td className="px-5 py-5  border-b border-gray-200 bg-white text-sm text-black">
                    {reviewDate}
                </td>
                <td className=" py-8 lg:py-5 flex gap-7 border-b border-gray-200 bg-white text-sm">

                    <button onClick={() => setIsEditModalOpen(true)} className="cursor-pointer font-semibold">
                        <FaEdit size={30} />
                    </button>

                    <button onClick={ handleDelete} className="cursor-pointer font-semibold">
                        <MdDeleteForever size={34} />
                    </button>
                </td>
            </tr>
            <UpdateReview  isOpen={isEditModalOpen}
                review={review}
                setIsEditModalOpen={setIsEditModalOpen}
                refetch={refetch}/>
            </>
    );
};

export default ReviewRow;