import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../components/LoadingSpinner';
import Heading from '../../components/shared/Heading';
import { FaArrowRight } from 'react-icons/fa';
import useRole from '../../hooks/useRole';
import useAuth from '../../hooks/useAuth';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import ReviewCard from '../../components/shared/ReviewCard';
import PageHelmet from '../../components/PageHelmet';

const ScholarshipDetails = () => {
    const { id } = useParams()
    const axiosSecure = useAxiosSecure()
    const [role] = useRole()
    const { user } = useAuth()
    const { data: scholar, isLoading, refetch } = useQuery({
        queryKey: ['scholar', id],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/scholar/${id}`)
            return data[0]
        }
    })
    // console.log(scholar)
    const { scholarshipName, universityName, reviews, universityCountry, universityCity, universityWorldRank, subjectCategory, _id, scholarshipCategory, tuitionFees, applicationFees, applicationDeadline, serviceCharge, degree, universityLogo, scholarshipPostDate } = scholar || {};
    if (isLoading) return <LoadingSpinner />
    return (
        <div>
            <PageHelmet title={'Scholarship Details'}/>
            <Heading title={'Unlock Your Academic Journey'} subtitle={'Explore comprehensive scholarship details including university rankings, funding options, and eligibility criteria to shape your future success.'} />

            <div className="flex flex-col items-center mt-6 justify-center bg-white text-black p-8 rounded-lg shadow-lg space-y-6 md:space-y-0 md:space-x-10" data-aos="zoom-in"
                            data-aos-duration="2000">

                {/* Left Side - University Image */}
                <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center items-center">
                    <img
                        src={universityLogo}
                        alt={universityName}
                        className="w-60 h-60 object-cover rounded-lg border-4 border-purple-500 shadow-lg transform hover:scale-105 transition-all duration-300"
                    />
                </div>

                {/* Right Side - Scholarship Info */}
                <div className="flex-grow w-full  md:w-2/3">
                    <div>
                        <h1 className="text-4xl font-bold  my-5 lg:my-10 text-transparent text-center bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                            {universityName}
                            <p className='text-purple-400 font-semibold  text-lg '> World Rank : #{universityWorldRank}</p>
                        </h1>

                    </div>


                    {/* Scholarship Info Table */}
                    <div className="overflow-hidden rounded-lg shadow-lg border border-gray-600">
                        <table className="table-auto w-full text-left  border-collapse">
                            <tbody>
                                <tr className=" border-b border-gray-600 transition duration-300">
                                    <td className="px-4 py-3  text-lg text-purple-600 font-semibold ">Scholarship Name</td>
                                    <td>{scholarshipName}</td>
                                </tr>
                                <tr className=" border-b border-gray-600 transition duration-300">
                                    <td className="px-4 py-3  text-lg text-purple-600 font-semibold">Scholarship Category</td>
                                    <td>{scholarshipCategory}</td>
                                </tr>
                                <tr className=" border-b border-gray-600 transition duration-300">
                                    <td className="px-4 py-3  text-lg text-purple-600 font-semibold">Degree</td>
                                    <td>{degree}</td>
                                </tr>
                                <tr className=" border-b border-gray-600 transition duration-300">
                                    <td className="px-4 py-3  text-lg text-purple-600 font-semibold">Location</td>
                                    <td> {universityCity} , {universityCountry} </td>
                                </tr>
                                <tr className=" border-b border-gray-600 transition duration-300">
                                    <td className="px-4 py-3  text-lg text-purple-600 font-semibold">Application Deadline</td>
                                    <td>{applicationDeadline}</td>
                                </tr>
                                <tr className=" border-b border-gray-600 transition duration-300">
                                    <td className="px-4 py-3  text-lg text-purple-600 font-semibold">Subject Name</td>
                                    <td>{subjectCategory}</td>
                                </tr>
                                <tr className="border-b border-gray-600 transition duration-300">
                                    <td className="px-4 py-3  text-lg text-purple-600 font-semibold">Stipend</td>
                                    <td>N/A</td>
                                </tr>
                                <tr className=" border-b border-gray-600 transition duration-300">
                                    <td className="px-4 py-3  text-lg text-purple-600 font-semibold">Tuition Fees</td>
                                    <td>${tuitionFees || 'N/A'}</td>
                                </tr>
                                <tr className="  border-b border-gray-600 transition duration-300">
                                    <td className="px-4 py-3  text-lg text-purple-600 font-semibold">Service Charge</td>
                                    <td>${serviceCharge}</td>
                                </tr>
                                <tr className="  border-b border-gray-600 transition duration-300">
                                    <td className="px-4 py-3  text-lg text-purple-600 font-semibold">Application Fees</td>
                                    <td>${applicationFees}</td>
                                </tr>
                                <tr className=" border-b border-gray-600 transition duration-300">
                                    <td className="px-4 py-3  text-lg text-purple-600 font-semibold">Post Date</td>
                                    <td>{scholarshipPostDate}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Apply Button */}
                    <div className="mt-8 flex justify-end">
                        {user && user.email && role === 'user' ? (
                            <Link to={`/payment/${_id}`}>
                                <button className="px-6 btn text-lg bg-purple-500 md:rounded-full md:px-10 md:pb-1 border-none text-black font-bold rounded-lg 
            hover:bg-yellow-300 hover:text-black transition duration-300 text-center">
                                    Apply Now <FaArrowRight />
                                </button>
                            </Link>
                        ) : (
                            <button disabled className="px-6 btn text-lg bg-gray-400 md:rounded-full md:px-10 md:pb-1 border-none text-black font-bold rounded-lg 
        cursor-not-allowed">
                                Apply Now <FaArrowRight />
                            </button>
                        )}


                    </div>


                </div>
            </div>
            <div className="my-16 text-center">
                <h2 className="text-3xl font-bold  mb-6">User Reviews</h2>
                {reviews && reviews.length > 0 ? (
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={3}

                        autoplay={{ delay: 1500, reverseDirection: true }}

                        modules={[EffectCoverflow, Autoplay, Pagination]}
                        className="mySwiper lg:h-[350px] lg:w-[1400px] mx-auto"
                    >
                        {reviews.map((review, index) => (
                            <SwiperSlide key={index} className=" lg:p-6 rounded-lg text-black">
                                <ReviewCard review={review} />

                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <p className="text-lg text-gray-400">No reviews available yet.</p>
                )}
            </div>
        </div>
    );
};

export default ScholarshipDetails;