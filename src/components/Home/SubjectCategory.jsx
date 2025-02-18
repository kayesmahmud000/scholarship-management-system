import { Link } from "react-router-dom";
import Heading from "../shared/Heading";
import { FaArrowRight } from "react-icons/fa";


const SubjectCategory = () => {
    const categories = [
        {
            title: "Doctor Scholarships",
            description: "Find scholarships for medical and healthcare-related degrees.",
            link: "/scholarships/doctor",
        },
        {
            title: "Engineering Scholarships",
            description: "Explore funding opportunities for engineering students.",
            link: "/scholarships/engineering",
        },
        {
            title: "Architecture Scholarships",
            description: "Get financial support for pursuing architecture studies.",
            link: "/scholarships/architecture",
        },
    ];
    return (
        <div>
            <Heading title={'Explore Scholarships by Discipline'} subtitle={'Discover the Best Scholarship Opportunities Across Various Fields of Study'}/>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
            {categories.map((category, index) => (
                <div
                    key={index}
                    className="p-6 border border-gray-300 rounded-lg shadow-lg"
                >
                    <h2 className="text-2xl font-bold mb-4">{category.title}</h2>
                    <p className="mb-4">{category.description}</p>
                    <Link to={'/allScholar'}>
                 <button className="px-5 py-3 flex items-center justify-center gap-2 bg-purple-500 text-white font-bold rounded-full 
                          hover:bg-yellow-300 hover:text-black transition duration-300 text-center">
                         View More <FaArrowRight/>
                        </button>
              
                </Link>
                </div>
            ))}
        </div>
        </div>
    );
};

export default SubjectCategory;