import { useState } from "react";

import { MdDeleteForever, MdFeedback } from "react-icons/md";
import FeedbackModal from "../../Modal/FeedbackModal";
import { ImCancelCircle } from "react-icons/im";
import ApplicationDetailsModal from "../../Modal/ApplicationDetailsModal";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AppliedScholarRow = ({ application, refetch }) => {
    const { scholarInfo, status,
        applicantEmail, applicantName, photo,
        country } = application || {};
    const axiosSecure = useAxiosSecure()
    const [feedbackModal, setFeedbackModal] = useState(false)
    const [detailsModal, setDetailsModal] = useState(false)

    const handleStatusChange = async (newStatus) => {

        if (newStatus === status) return
        console.log(newStatus)
        try {
            await axiosSecure.patch(`/application/new-status/${application._id}`, { status: newStatus })
            toast.success('Application status updated')
            refetch()
        } catch (err) {
            console.log(err)
        }

    }
    const handleCancel = async () => {
        if(status==='rejected')return toast.error('Application already canceled')
            if(status==='completed')return toast.error(' Application Process complete, cannot canceled now')
        try {
            await axiosSecure.patch(`/application/status/${application._id}`, { status: 'rejected' })
            toast.success('Application is Canceled')
            refetch()
        } catch (err) {
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
                    {
                        status=== 'rejected' ? <p className="text-red-400">Canceled</p>:              <select
                        disabled={status==='completed'}
                        defaultValue={status || 'user'}
                        onChange={(e) => handleStatusChange(e.target.value)}
                        className="p-2 bg-gray-800 text-white border border-gray-600 rounded"
                    >
                        <option value="pending" >Pending</option>
                        <option value=" processing"> Processing</option>
                        <option value="completed">Completed</option>
                    </select>
                    }
                </td>
                <td className="py-5 px-5 border-b border-gray-200 bg-[#1A1423] text-sm text-white">
                    <button onClick={() => setDetailsModal(true)} className="cursor-pointer font-semibold">Details
                    </button>
                </td>

                <td className="lg:py-5 py-8 px-5 mx-auto border-b border-gray-200 bg-[#1A1423] text-sm text-white">
                    <button onClick={() => setFeedbackModal(true)} className="cursor-pointer font-semibold">
                        <MdFeedback size={24} />
                    </button>

                </td>
                <td className="py-10  px-5 flex gap-7 border-b border-gray-200 bg-[#1A1423] text-sm">

                    <button  onClick={handleCancel} className="cursor-pointer font-semibold">
                        <ImCancelCircle size={24} />
                    </button>
                </td>

            </tr>
            <FeedbackModal isOpen={feedbackModal} refetch={refetch} setFeedbackModal={setFeedbackModal} application={application} />

            <ApplicationDetailsModal isOpen={detailsModal} setDetailsModal={setDetailsModal} application={application} />

        </>
    );
};

export default AppliedScholarRow;