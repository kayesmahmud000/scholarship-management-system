

import { FaEdit, FaRegEye } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import ScholarshipUpdateModal from "../../Modal/ScholarshipUpdateModal";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ScholarshipRow = ({ scholarship, refetch }) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [scholar, setScholar] = useState({})
    const axiosSecure = useAxiosSecure()

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axiosSecure.delete(`/scholar/${id}`)

                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                  
                } catch (err) {
                    console.log(err)
                }finally{
                    refetch()
                }

            }
        });

    }
    const handleUpdateBtn = async (id) => {
        setIsEditModalOpen(true);
        try {
            const { data } = await axiosSecure.get(`/scholar/${id}`)
            console.log(data)
            setScholar(data)
        } catch (err) {
            console.log(err)
        }
    };

    const closeModal = () => {
        setIsEditModalOpen(false);
    };

    const { scholarshipName, universityName, subjectCategory, _id, applicationFees, degree } = scholarship || {};

    return (
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-[#1A1423] text-sm'>
                <p className='text-white whitespace-no-wrap'>{scholarshipName}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-[#1A1423] text-sm'>
                <p className='text-white whitespace-no-wrap'>{universityName}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-[#1A1423] text-sm'>
                <p className='text-white whitespace-no-wrap'>{subjectCategory}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-[#1A1423] text-sm'>
                <p className='text-white whitespace-no-wrap'>{degree}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-[#1A1423] text-sm'>
                <p className='text-white whitespace-no-wrap'>$ {applicationFees}</p>
            </td>
            <td className='px-5 py-5 flex gap-7 border-b border-gray-200 bg-[#1A1423] text-sm'>
                <Link to={`/scholarshipDetails/${_id}`}>
                    <button className='cursor-pointer font-semibold'>
                        <FaRegEye size={30} />
                    </button>
                </Link>

                <button
                    onClick={() => handleUpdateBtn(_id)}
                    className='cursor-pointer font-semibold'
                >
                    <FaEdit size={30} />
                </button>

                <ScholarshipUpdateModal
                    isOpen={isEditModalOpen}
                    scholar={scholar}
                    refetch={refetch}
                    setIsEditModalOpen={setIsEditModalOpen}
                    closeModal={closeModal}
                />

                <button
                    onClick={() => handleDelete(_id)}
                    className='cursor-pointer font-semibold'
                >
                    <MdDeleteForever size={34} />
                </button>
            </td>
        </tr>
    );
};

export default ScholarshipRow;