import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import LoadingSpinner from '../../../components/LoadingSpinner';
import ReviewRow from '../../../components/Dashboard/TableRow/ReviewRow';

const MyReview = () => {
    const {user, loading}=useAuth()
    const axiosSecure= useAxiosSecure()
    const {data:reviews=[], isLoading, refetch}=useQuery({
        queryKey:['reviews', user?.email],
        queryFn: async()=>{
            const {data}=await axiosSecure.get(`/review/${user?.email}`)
            return data
        }
    })
    console.log(reviews)
    if(loading && isLoading) return <LoadingSpinner/>
    return (
        <div className='container mx-auto px-4 sm:px-8'>
        {/* <Helmet>
            <title>Manage Users</title>
          </Helmet> */}
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
                     Scholarship name
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                    University name
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                    Review comments
                    </th>
  
                    <th
                      scope='col'
                      className='px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                   Review date
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
                    reviews.map(review=><ReviewRow key={review._id} refetch={refetch} review={review} />)
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MyReview;