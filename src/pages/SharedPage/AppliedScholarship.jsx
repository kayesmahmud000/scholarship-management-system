import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import AppliedScholarRow from "../../components/Dashboard/TableRow/AppliedScholarRow";
import LoadingSpinner from "../../components/LoadingSpinner";

const AppliedScholarship = () => {
    const axiosSecure= useAxiosSecure()
    const {data: applications={}, isLoading, refetch}= useQuery({
        queryKey:['application'],
        queryFn: async()=>{
            const {data}= await axiosSecure.get('/applications')
            return data
        }
    })

    if(isLoading) return <LoadingSpinner/>
    console.log(applications)
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
                      Applicant Name
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                       Applicant Email
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
                      Scholarship Name
                   
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
                Status 
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
             Details
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
                      Action
                    </th>

                    
                  </tr>
                </thead>
                <tbody>
                   {
                   applications && applications.length ?  applications.map(application=><AppliedScholarRow key={ application._id}  refetch={refetch} application={application}/>):<p> No Application Found</p>
                   }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AppliedScholarship;