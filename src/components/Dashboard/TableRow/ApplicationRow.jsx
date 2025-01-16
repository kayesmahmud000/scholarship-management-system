import { FaEdit, FaRegEye } from "react-icons/fa";
import { FcRating } from "react-icons/fc";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";


const ApplicationRow = ({application}) => {
    const { scholarInfo,  status}=application ||{}
    return (
        <tr className="text-center">
            <td className='px-5 py-5 border-b border-gray-200 bg-[#1A1423] text-sm'>
                <p className='text-white whitespace-no-wrap'>{scholarInfo?.universityName}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-[#1A1423] text-sm'>
                <p className='text-white whitespace-no-wrap'>{scholarInfo?.universityCountry}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-[#1A1423] text-sm'>
                <p className='text-white whitespace-no-wrap'>{scholarInfo?.feedback}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-[#1A1423] text-sm'>
                <p className='text-white whitespace-no-wrap'>{scholarInfo?.subjectCategory}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-[#1A1423] text-sm'>
                <p className='text-white whitespace-no-wrap'>{scholarInfo?.degree}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-[#1A1423] text-sm'>
                <p className='text-white whitespace-no-wrap'>$ {scholarInfo?.applicationFees}</p>
            </td>
            <td className=' py-5 border-b border-gray-200 bg-[#1A1423] text-sm'>
                <p className='text-white whitespace-no-wrap'>$ {scholarInfo?.applicationFees}</p>
            </td>
            <td className=' py-5 border-b border-gray-200 bg-[#1A1423] text-sm'>
                <p className='text-white whitespace-no-wrap'> { status}</p>
            </td>
            <td className=' py-5 flex gap-7 border-b border-gray-200 bg-[#1A1423] text-sm'>
                <Link to={`/scholarshipDetails/${scholarInfo?.scholarId}`}>
                    <button className='cursor-pointer font-semibold'>
                        <FaRegEye size={30} />
                    </button>
                </Link>

                <button
                    // onClick={() => handleUpdateBtn(_id)}
                    className='cursor-pointer font-semibold'
                >
                    <FaEdit size={30} />
                </button>

                {/* <ScholarshipUpdateModal
                    isOpen={isEditModalOpen}
                    scholar={scholar}
                    refetch={refetch}
                    setIsEditModalOpen={setIsEditModalOpen}
                    closeModal={closeModal}
                /> */}

                <button
                    // onClick={() => handleDelete(_id)}
                    className='cursor-pointer font-semibold'
                >
                    <MdDeleteForever size={34} />
                </button>
              
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-[#1A1423] text-sm'>
            <button
                    // onClick={() => handleDelete(_id)}
                    className='cursor-pointer font-semibold'
                >
                    <FcRating  size={30}/>
                    
                </button>
            </td>
        </tr>
    );
};

export default ApplicationRow;