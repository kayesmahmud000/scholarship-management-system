import { useState } from "react";

import { MdDeleteForever, MdFeedback } from "react-icons/md";
import FeedbackModal from "../../Modal/FeedbackModal";
import { ImCancelCircle } from "react-icons/im";
import ApplicationDetailsModal from "../../Modal/ApplicationDetailsModal";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AppliedScholarRow = ({ application,  refetch }) => {
    const { scholarInfo, status,
        applicantEmail, applicantName, photo, 
        country } = application || {};
        const axiosSecure = useAxiosSecure()
         const [feedbackModal, setFeedbackModal]= useState(false)
         const [detailsModal, setDetailsModal]= useState(false)
        
        const handleCancel=async()=>{
            try{
                await axiosSecure.patch(`/application/status/${application._id}`, {status:'Rejected'})
                toast.success('Application is Canceled')
                refetch()
            }catch(err){
                console.log(err)
            }

            
        }
    return (
        <>
            <tr className="">
                <td className="px-5 py-5 border-b border-gray-200 bg-[#1A1423] text-sm text-white">
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img
                                    src={photo}
                                    alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{applicantName}</div>
                            <div className="text-sm opacity-50">{country}</div>
                        </div>
                    </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-[#1A1423] text-sm text-white">
                    {applicantEmail}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-[#1A1423] text-sm text-white">
                    {scholarInfo?.universityName}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-[#1A1423] text-sm text-white">
                    {scholarInfo?.scholarName}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-[#1A1423] text-sm text-white">
                    {scholarInfo?.subjectCategory}
                </td>

                <td className="py-5 px-5 border-b border-gray-200 bg-[#1A1423] text-sm text-white">
                    {status}
                </td>
                <td className="py-5 px-5 border-b border-gray-200 bg-[#1A1423] text-sm text-white">
                <button onClick={()=>setDetailsModal(true)} className="cursor-pointer font-semibold">Details
                    </button>
                </td>

                <td className="py-5 px-5 mx-auto border-b border-gray-200 bg-[#1A1423] text-sm text-white">
                <button onClick={()=>setFeedbackModal(true)} className="cursor-pointer font-semibold">
                <MdFeedback  size={24} />
                    </button>
                
                </td>
                <td className="py-9  px-5 flex gap-7 border-b border-gray-200 bg-[#1A1423] text-sm">
                   
                    <button onClick={handleCancel} className="cursor-pointer font-semibold">
                    <ImCancelCircle  size={24} />
                    </button>
                </td>

            </tr>
            <FeedbackModal isOpen={feedbackModal} refetch={refetch} setFeedbackModal={setFeedbackModal} application={application}/>

            <ApplicationDetailsModal isOpen={detailsModal} setDetailsModal={setDetailsModal} application={application}/>
          
        </>
    );
};

export default AppliedScholarRow;