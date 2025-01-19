import { FaArrowRight, FaStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ScholarCard = ({ scholarship }) => {
  return (
    <div
      className="relative bg-[#1A1423] text-white p-6 rounded-xl shadow-lg border border-purple-600 
        hover:shadow-2xl transform hover:scale-105 transition-all duration-500 flex flex-col justify-between h-[450px]"
    data-aos="zoom-in"
     data-aos-duration="3000"
    >
      {/* University Logo */}
      <div className="flex flex-col items-center" >
        <img
          src={scholarship?.universityLogo}
          alt={`${scholarship?.universityName} Logo`}
          className="w-24 h-24 object-cover rounded-full border-4 border-purple-400"
        />
        {/* Scholarship Title */}
        <p className="text-lg font-medium text-center mt-2 text-purple-400">{scholarship?.universityName}</p>
        <p className="text-center mt-1 text-xs flex gap-1 items-center text-gray-300">
        <IoLocationOutline />
          {scholarship?.universityCity}, {scholarship?.universityCountry} 
        </p>
        <p className="text-center text-sm font-semibold text-purple-200">World Rank: #{scholarship?.universityWorldRank}</p>
      </div>

      {/* Degree and Category */}
      <div className="flex justify-around mt-4 text-sm">
        <span className="bg-purple-600 px-3 py-1 rounded-full font-semibold">{scholarship?.subjectCategory}</span>
        <span className="bg-purple-600 px-3 py-1 rounded-full font-semibold">{scholarship?.scholarshipCategory}</span>
      </div>
      {/* Deadline and Post Date */}
      <div className="mt-6 text-center text-lg font-semibold w-full">
      <p className="text-gray-300"> Application Fee: $ {scholarship?.applicationFees}</p>
        <p className="text-sm my-2 text-gray-300"> Deadline: {scholarship?.applicationDeadline}</p>
        
        <p className="text-md my-2 text-yellow-300 ">   Rating: {scholarship?.averageRating}</p>
      </div>
      
      {/* Button Section (Anchored at Bottom) */}
      <Link to={`/scholarshipDetails/${scholarship._id}`}>
      <div className="mt-auto w-full flex justify-center">
      <button className="w-[90%] py-3 flex items-center justify-center gap-2 bg-purple-500 text-white font-bold rounded-full 
          hover:bg-yellow-300 hover:text-black transition duration-300 text-center">
          View Details <FaArrowRight/>
        </button>
       
      </div>
        </Link>
    </div>
  );
};

export default ScholarCard;