import toast from "react-hot-toast";
import { FaEdit, FaRegEye } from "react-icons/fa";
import { FcRating } from "react-icons/fc";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import ApplicationUpdateModal from "../../Modal/ApplicationUpdateModal";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ReviewModal from "../../Modal/ReviewModal";

const ApplicationRow = ({ application, refetch }) => {
    const { scholarInfo, status } = application || {};
    const axiosSecure = useAxiosSecure()
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false)
    const [applcation, setApplcation] = useState({})

    const handleDelete = async (id) => {

        try {
            await axiosSecure.delete(`/application/${id}`)
            refetch()

        } catch (err) {
            console.log(err)
        }
    }
    const handleUpdateBtn = async (id) => {
        if (status !== 'pending') {
            return toast.error("application is processing can't edit right now ")
        }
        setIsEditModalOpen(true)
        try {
            const { data } = await axiosSecure.get(`/applications/${id}`)
            setApplcation(data)
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <>
            <tr className="text-center">
                <td className="px-5 py-5 border-b border-gray-200 bg-[#1A1423] text-sm text-white">
                    {scholarInfo?.universityName}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-[#1A1423] text-sm text-white">
                    {scholarInfo?.universityCountry}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-[#1A1423] text-xs text-white">
                    {application?.feedback ? application.feedback:"No feedback"}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-[#1A1423] text-sm text-white">
                    {scholarInfo?.subjectCategory}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-[#1A1423] text-sm text-white">
                    {scholarInfo?.degree}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-[#1A1423] text-sm text-white">
                    $ {scholarInfo?.applicationFees}
                </td>
                <td className="py-5 border-b border-gray-200 bg-[#1A1423] text-sm text-white">
                    $ {scholarInfo?.serviceCharge}
                </td>
                <td className="py-5 border-b border-gray-200 bg-[#1A1423] text-sm text-white">
                    {status}
                </td>
                <td className="py-10 lg:py-5 flex gap-7 border-b border-gray-200 bg-[#1A1423] text-sm">
                    <Link to={`/scholarshipDetails/${scholarInfo?.scholarId}`}>
                        <button className="cursor-pointer font-semibold">
                            <FaRegEye size={30} />
                        </button>
                    </Link>

                    <button onClick={() => handleUpdateBtn(application?._id)} className="cursor-pointer font-semibold">
                        <FaEdit size={30} />
                    </button>

                    <button onClick={() => handleDelete(application?._id)} className="cursor-pointer font-semibold">
                        <MdDeleteForever size={34} />
                    </button>
                </td>
                <td className="px-5 py-7 lg:py-5 border-b border-gray-200 bg-[#1A1423] text-sm">
                    <button onClick={() => setIsReviewModalOpen(true)} className="cursor-pointer font-semibold">
                        <FcRating size={30} />
                    </button>
                </td>
            </tr>

            {/* ✅ Modal Triggered Outside Table */}
            <ApplicationUpdateModal
                isOpen={isEditModalOpen}
                applcation={applcation}
                setIsEditModalOpen={setIsEditModalOpen}
                refetch={refetch}
            />
            <ReviewModal isOpen={isReviewModalOpen}
               application={application}
                setIsReviewModalOpen={setIsReviewModalOpen}
            />
        </>
    );
};

export default ApplicationRow;
