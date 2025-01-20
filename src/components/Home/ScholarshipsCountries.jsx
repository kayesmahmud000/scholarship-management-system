import { useQuery } from "@tanstack/react-query";

import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const ScholarshipsCountries = () => {
    const axiosPublic= useAxiosPublic()
    const {data:countries=[]}=useQuery({
        queryKey:['country'],
        queryFn : async()=>{
            const {data}= await axiosPublic.get('/countries')
            return data
        }
    })

    // console.log(countries)
    return (
        
        <div className="flex  flex-col-reverse  lg:flex-row lg:h-[500px] py-5 bg-[#2C2536]  my-10 items-center justify-around">
            <div  >
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  mx-auto gap-3 p-5">
                    {
                        countries.map(country=><Link to={'/allScholar'}>
                        <div 
                            key={country._id} 
                            className="px-7 py-5 bg-[#1A1423] h-[100px] lg:h-[180px]  rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 text-center"
                            >
                            <img 
                              src={country?.flag} 
                              className="w-10 h-10 lg:w-20 lg:h-20 mx-auto rounded-full border-2 border-purple-500" 
                              alt={`${country?.country} flag`} 
                            />
                            <h3 className="mt-4 text-xs lg:text-lg font-semibold text-gray-200">{country?.country}</h3>
                          </div>
                        </Link>
                        
                          )
                    }
                </div>
            </div>
            <div >
                <div>
                    <h2 className= " text-4xl lg:text-6xl text-center p-5 mx-auto lg:w-5/6 font-bold">Scholarships Awarding Countries</h2>
                    <p className="text-center mx-auto w-5/6">Find Scholarships Offered by Countries Worldwide for Your Academic Goals.</p>
                </div>
                
            </div>
        </div>
    );
};

export default ScholarshipsCountries;