import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import UserDataRow from '../../../../components/Dashboard/TableRow/UserDataRow';
import LoadingSpinner from '../../../../components/LoadingSpinner';
import Heading from '../../../../components/shared/Heading';


const ManageUser = () => {
  const [selectedRole, setSelectedRole] = useState('all')
  const [filteredUsers, setFilteredUsers] = useState([]);
  const axiosSecure = useAxiosSecure()
  
  const { data: allUsers = [], refetch, isLoading, } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/users`)
      return data
    },
    
  })

  useEffect(() => {
    if (selectedRole === 'all') {
      setFilteredUsers(allUsers);
    } else {
      const filtered = allUsers.filter((user) => user.role === selectedRole);
      setFilteredUsers(filtered);
    }
  }, [selectedRole, allUsers]);
  console.log(selectedRole)





  console.log(allUsers)
  if (isLoading) return <LoadingSpinner></LoadingSpinner>
  return (
    <div className='container mx-auto px-4 sm:px-8'>
      {/* <Helmet>
          <title>Manage Users</title>
        </Helmet> */}
        <Heading title={'All Users'} subtitle={' '}/>

      <div className='px-5  flex justify-end bg-[#1A1423]  text-sm'>
        <select
          defaultValue={'Sort By'}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="p-2 bg-purple-500 transition  duration-100  py-1.5 px-3 text-sm/6 font-semibold text-white  rounded"
        >
           <option disabled >Sort by</option>
          <option value="all" >All</option>
          <option value="user" >User</option>
          <option value="moderator">Moderator</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      {/* <Dropdown setSelectedRole={setSelectedRole}/> */}
      <div className='py-8'>
        <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
          <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
            <table className='min-w-full leading-normal'>
              <thead>
                <tr>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Name
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Email
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Role
                  </th>

                  <th
                    scope='col'
                    className='px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  filteredUsers.map(user => <UserDataRow refetch={refetch} user={user} key={user._id} />)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;