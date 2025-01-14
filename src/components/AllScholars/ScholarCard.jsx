
const ScholarCard = ({scholarship}) => {
    return (
        <div
        className="relative bg-[#1A1423] text-white p-6 rounded-xl shadow-lg border border-purple-600 
        hover:shadow-2xl transform hover:scale-105 transition-all duration-500 flex flex-col justify-between h-[500px]"
      >
        {/* University Logo */}
        <div className="flex flex-col items-center">
          <img
            src={scholarship?.universityLogo}
            alt={`${scholarship?.universityName} Logo`}
            className="w-24 h-24 object-cover rounded-full border-4 border-purple-400"
          />
          {/* Scholarship Title */}
          <h2 className="text-2xl font-bold text-center mt-4 text-purple-300">{scholarship?.scholarshipName}</h2>
          <p className="text-lg font-medium text-center mt-2 text-purple-400">{scholarship?.universityName}</p>
          <p className="text-center mt-1 text-sm text-gray-300">
            {scholarship?.universityCity}, {scholarship?.universityCountry} 🌍
          </p>
          <p className="text-center text-sm font-semibold text-purple-200">World Rank: #{scholarship?.universityWorldRank}</p>
        </div>
  
        {/* Degree and Category */}
        <div className="flex justify-around mt-4 text-sm">
          <span className="bg-purple-600 px-3 py-1 rounded-full font-semibold">{scholarship?.subjectCategory}</span>
          <span className="bg-purple-600 px-3 py-1 rounded-full font-semibold">{scholarship?.degree}</span>
        </div>
         {/* Deadline and Post Date */}
      <div className="mt-6 text-center text-lg font-semibold w-full">
        <p className="text-yellow-300">🎯 Deadline: {scholarship?.applicationDeadline}</p>
        <p className="text-sm mt-1 text-gray-400">📅 Posted on: {scholarship?.postDate}</p>
      </div>
        {/* Button Section (Anchored at Bottom) */}
        <div className="mt-auto w-full flex justify-center">
          <button className="w-[90%] py-3 bg-purple-500 text-white font-bold rounded-full 
          hover:bg-yellow-300 hover:text-black transition duration-300 text-center">
            Apply Now 🚀
          </button>
        </div>
      </div>
    );
};

export default ScholarCard;