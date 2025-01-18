import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Heading from "../shared/Heading";
import ScholarCard from "../AllScholars/ScholarCard";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import LoadingSpinner from "../LoadingSpinner";

const LatestScholarships = () => {
    const axiosPublic= useAxiosPublic()
    
    const {data: latestScholars={}, isLoading}=useQuery({
        queryKey:['latestScholar'],
        queryFn: async()=>{
            const {data}= await axiosPublic.get('/latest-scholar')
            return data 
        }
    })

    if(isLoading) return <LoadingSpinner/>
    console.log(latestScholars)
    return (
        <div className="my-16">
          
            <Heading title={'Top Scholarships'} subtitle={' Explore the most prestigious scholarships available to boost your academic journey.'}/>

            <div className="grid  grid-cols-1  gap-5 my-10 lg:gap-10 md:grid-cols-2 lg:grid-cols-3">
                {
                 latestScholars&& latestScholars.length>0 &&   latestScholars.map(scholarship=><ScholarCard key={scholarship._id} scholarship={scholarship} />)
                }
            </div>

            <div className="flex justify-center items-center">
                <Link to={'/allScholar'}>
                 <button className="px-5 py-3 flex items-center justify-center gap-2 bg-purple-500 text-white font-bold rounded-full 
                          hover:bg-yellow-300 hover:text-black transition duration-300 text-center">
                         All Scholarship <FaArrowRight/>
                        </button>
              
                </Link>
            </div>
        </div>
    );
};

export default LatestScholarships;