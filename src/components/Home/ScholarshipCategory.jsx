import { Link } from "react-router-dom";
import Heading from "../shared/Heading";
import { FaArrowRight } from "react-icons/fa";

const ScholarshipCategory = () => {
    const categories = [
        {
            title: "Fully Funded Scholarships",
            description: "Covers tuition, living expenses, and other costs.",
            link: "/scholarships/fully-funded",
            bgColor: "bg-blue-500",
        },
        {
            title: "Partial Scholarships",
            description: "Provides financial aid for a part of your expenses.",
            link: "/scholarships/partial",
            bgColor: "bg-green-500",
        },
        {
            title: "Self-Funded Scholarships",
            description: "Helps students with educational loans & grants.",
            link: "/scholarships/self-funded",
            bgColor: "bg-purple-500",
        },
    ];

    return (
<div>
    <Heading title={"Types of Scholarships"} subtitle={'All scholarships categories hare '}/>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
            {categories.map((category, index) => (
                <div
                    key={index}
                    className={`p-6 rounded-lg shadow-lg text-white ${category.bgColor}`}
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

export default ScholarshipCategory;