import React from 'react';
import ScholarshipRow from '../../components/Dashboard/TableRow/ScholarshipRow';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import LoadingSpinner from '../../components/LoadingSpinner';
import Heading from '../../components/shared/Heading';

const ManageScholarship = () => {
    const axiosSecure= useAxiosSecure()
    const {data: allScholarship=[], refetch, isLoading}= useQuery({
        queryKey:['allScholarships'],
        queryFn:async()=>{
            const {data}= await axiosSecure.get('/all-scholar')
            return data
        }
    })
    console.log(allScholarship)
    if(isLoading) return <LoadingSpinner/>
    return (
        <div className='container mx-auto px-4 sm:px-8'>
        {/* <Helmet>
          <title>Manage Users</title>
        </Helmet> */}
        <Heading title={'Manage Scholarships'}/>
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
                    Scholarship Name
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                    University Name
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                    Subject Category
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                   Degree
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                  Application Fees
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
               allScholarship.map(scholarship=> <ScholarshipRow refetch={refetch} scholarship={scholarship} key={scholarship._id} />)
                 }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ManageScholarship;