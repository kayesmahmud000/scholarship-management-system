import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import AppliedScholarRow from "../../components/Dashboard/TableRow/AppliedScholarRow";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useEffect, useState } from "react";
import Heading from "../../components/shared/Heading";

const AppliedScholarship = () => {
  const axiosSecure = useAxiosSecure()
  const [sortOption, setSortOption] = useState('all')
  const [sortedApplications, setSortedApplications] = useState([])
  const { data: applications = [], isLoading, refetch } = useQuery({
    queryKey: ['application'],
    queryFn: async () => {
      const { data } = await axiosSecure.get('/applications')
      return data
    }
  })

  useEffect(() => {
    if (applications.length === 0) return; 

    let sorted = [...applications]; 
    if (sortOption === 'appliedDate') {
      sorted = sorted.sort(
        (a, b) => new Date(b.applicationDate) - new Date(a.applicationDate)
      );
    } else if (sortOption === 'appliedDeadline') {
      sorted = sorted.sort(
        (a, b) => new Date(a.scholarInfo.deadline) - new Date(b.scholarInfo.deadline)
      );
    }

    setSortedApplications(sorted); 
  }, [sortOption, applications]);

  if (isLoading) return <LoadingSpinner />
  console.log(applications)
  return (
    <div className='container mx-auto px-4 sm:px-8'>
      {/* <Helmet>
          <title>Manage Users</title>
        </Helmet> */}
        <Heading title={'All Applications'} subtitle={''} />
      <div className='px-5  flex justify-end bg-[#1A1423]  text-sm'>
        <select

          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="p-2 bg-purple-500 transition  duration-100  py-1.5 px-3 text-sm/6 font-semibold text-white  rounded"
        >
          <option value="all" >All</option>
          <option value="appliedDate" >Application Date</option>
          <option value="appliedDeadline">Application Deadline</option>
        </select>
      </div>
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
                  sortedApplications && sortedApplications.length ? sortedApplications.map(application => <AppliedScholarRow key={application._id} refetch={refetch} application={application} />) : <tr>
                    <td colSpan="9" className="text-center py-4">
                      No Applications Found
                    </td>
                  </tr>
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

// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import AppliedScholarRow from "../../components/Dashboard/TableRow/AppliedScholarRow";
// import LoadingSpinner from "../../components/LoadingSpinner";
// import { useEffect, useState } from "react";

// const AppliedScholarship = () => {
//   const axiosSecure = useAxiosSecure();
//   const [sortOption, setSortOption] = useState('all');
//   const [sortedApplications, setSortedApplications] = useState([]);

//   const { data: applications = [], isLoading } = useQuery({
//     queryKey: ['applications'],
//     queryFn: async () => {
//       const { data } = await axiosSecure.get('/applications');
//       return data;
//     },
//   });

//   useEffect(() => {
//     if (applications.length === 0) return; // Avoid unnecessary processing if no data

//     let sorted = [...applications]; // Clone the array to avoid mutating the original
//     if (sortOption === 'appliedDate') {
//       sorted = sorted.sort(
//         (a, b) => new Date(a.applicationDate) - new Date(b.applicationDate)
//       );
//     } else if (sortOption === 'appliedDeadline') {
//       sorted = sorted.sort(
//         (a, b) => new Date(a.scholarInfo.deadline) - new Date(b.scholarInfo.deadline)
//       );
//     }

//     setSortedApplications(sorted); // Update state only once after sorting
//   }, [sortOption, applications]); // Trigger only when sortOption or applications change

//   if (isLoading) return <LoadingSpinner />;

//   return (
//     <div className='container mx-auto px-4 sm:px-8'>
//       <div className='px-5 flex justify-end bg-[#1A1423] text-sm'>
//         <select
//           value={sortOption}
//           onChange={(e) => setSortOption(e.target.value)}
//           className="p-2 bg-purple-500 transition duration-100 py-1.5 px-3 text-sm/6 font-semibold text-white rounded"
//         >
//           <option disabled>Sort by</option>
//           <option value="all">All</option>
//           <option value="appliedDate">Application Date</option>
//           <option value="appliedDeadline">Application Deadline</option>
//         </select>
//       </div>
//       <div className='py-8'>
//         <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
//           <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
//             <table className='min-w-full leading-normal'>
//               <thead>
//                 <tr className='text-center'>
//                   <th className='px-5 py-3 bg-gray-200 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'>
//                     Applicant Name
//                   </th>
//                   <th className='px-5 py-3 bg-gray-200 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'>
//                     Applicant Email
//                   </th>
//                   <th className='px-5 py-3 bg-gray-200 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'>
//                     University Name
//                   </th>
//                   <th className='px-5 py-3 bg-gray-200 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'>
//                     Scholarship Name
//                   </th>
//                   <th className='px-5 py-3 bg-gray-200 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'>
//                     Subject Category
//                   </th>
//                   <th className='px-5 py-3 bg-gray-200 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'>
//                     Status
//                   </th>
//                   <th className='px-5 py-3 bg-gray-200 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'>
//                     Details
//                   </th>
//                   <th className='px-5 py-3 bg-gray-200 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'>
//                     Feedback
//                   </th>
//                   <th className='px-5 py-3 bg-gray-200 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'>
//                     Action
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {sortedApplications && sortedApplications.length
//                   ? sortedApplications.map((application) => (
//                       <AppliedScholarRow
//                         key={application._id}
//                         application={application}
//                       />
//                     ))
//                   : <tr>
//                       <td colSpan="9" className="text-center py-4">
//                         No Applications Found
//                       </td>
//                     </tr>}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AppliedScholarship;
