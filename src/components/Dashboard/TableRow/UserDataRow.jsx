import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const UserDataRow = ({ user, refetch, }) => {
    const axiosSecure =useAxiosSecure()
    const handleDelete=(id)=>{
        console.log(id)
    }
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
    return (
        <tr>
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

            <td className='px-5 py-5 border-b border-gray-200 bg-[#1A1423]  text-sm'>
                <button
                    onClick={() => handleDelete(user?._id)}
                    className='relative cursor-pointer inline-block px-3 py-1 font-semibold  leading-tight'
                >
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 rounded-full'
                    ></span>
                    <span className='relative'>Delete </span>
                </button>
                
            </td>
        </tr>
    );
};

export default UserDataRow;