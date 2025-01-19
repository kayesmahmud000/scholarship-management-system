import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

import { MdDeleteForever } from "react-icons/md";


const UserDataRow = ({ refetch, user, }) => {
    const axiosSecure =useAxiosSecure()
   
    const handleRoleChange= async(newRole)=>{
        if(user?.role === newRole)return
        console.log(newRole)

        
        try{
            await axiosSecure.patch(`/user/${user?.email}` , {role :newRole })
            refetch()
            toast.success(`${user?.email} now a ${newRole}`) 
        }catch(err){
            console.log(err?.response?.data?.massage)
        }

    }
    const handleDelete= async(id)=>{
        
        try{
            await axiosSecure.delete(`/user/${id}`)
            toast.success('User deleted successful!')
            refetch()
           


        }catch (err){
            console.log(err)

        }
    }
    return (
        <>
         <tr >
            <td className='px-5 py-5 border-b border-gray-200 bg-[#1A1423]   text-sm'>
                <p className='text-white whitespace-no-wrap'>{user?.name}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-[#1A1423]  text-sm'>
                <p className='text-white whitespace-no-wrap'>{user?.email}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-[#1A1423]  text-sm'>
                <select
                    defaultValue={user?.role || 'user'}
                    onChange={(e) => handleRoleChange(e.target.value)}
                    className="p-2 bg-gray-800 text-white border border-gray-600 rounded"
                >
                    <option value="user" >User</option>
                    <option value="moderator">Moderator</option>
                    <option value="admin">Admin</option>
                </select>
            </td>

            <td className='px-5 py-8 lg:py-5 border-b border-gray-200 bg-[#1A1423]  text-sm'>
                <button
                    onClick={() => handleDelete(user?._id)}
                    className=' cursor-pointer font-semibold '
                >
                   <MdDeleteForever size={34} />
                </button>
                
            </td>
        </tr>
        </>
       
    );
};

export default UserDataRow;