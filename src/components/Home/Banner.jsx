import { FaArrowRight } from 'react-icons/fa';

import { Link } from 'react-router-dom';


const Banner = ({title, subtitle, img}) => {
    return (
        <div>
            <div className="hero bg-[#1e172b]  h-[480px] my-10 lg:h-[600px]">
                <div className="hero-content flex-col lg:flex-row  ">

                    <div>
                        <h1 className=" text-2xl  text-center lg:left lg:text-6xl mx-auto  w-5/6 
                        font-bold">{title}
                        </h1>
                        <p className="py-6  text-xs mx-auto lg:text-lg text-center lg:left  w-5/6 text-gray-200">
                           {subtitle}
                        </p>
                      <div className='flex items-center justify-center'>
                      <Link to={'/allScholar'}> <button className="btn bg-white  md:rounded-full md:px-10 md:pb-1 border-none text-[#1e172b] hover:bg-[#1A1423]  hover:text-white">Explore <FaArrowRight /></button></Link>
                      </div>
                    </div>
                    <img
                        src={img}
                        className="   rounded-lg w-md h-[150px] lg:h-[400px] md:max-w-lg" />
                </div>
            </div>
        </div>
    );
};

export default Banner;