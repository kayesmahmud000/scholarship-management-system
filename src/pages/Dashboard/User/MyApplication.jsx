import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../../components/LoadingSpinner';
import ApplicationRow from '../../../components/Dashboard/TableRow/ApplicationRow';

const MyApplication = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    
  const { data: applications={}, isLoading, refetch } = useQuery({
        queryKey: ['application', user?.email],
        queryFn: async () => {
          const { data } = await axiosSecure.get(`/application/${user?.email}`);
          return data;
        }
    });
    
    console.log(applications);
    if (isLoading) return <LoadingSpinner/>;
    
   
    
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
                  <tr className='text-center'>
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
                    University Address
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                    Feedback
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
                 Service Charge
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                Application Status 
                    </th>

                    <th
                      scope='col'
                      className='px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Action
                    </th>

                    <th
                      scope='col'
                      className='px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Add Review
                    </th>
                  </tr>
                </thead>
                <tbody>
                    {
                        applications.map(application=> <ApplicationRow  refetch={ refetch} key={application._id} application={application}/>)
                    }
                 {/* {
               allScholarship.map(scholarship=> <ScholarshipRow refetch={refetch} scholarship={scholarship} key={scholarship._id} />)
                 } */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MyApplication;