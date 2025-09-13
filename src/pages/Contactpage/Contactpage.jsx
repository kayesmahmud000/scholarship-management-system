import React from 'react';
import PageHelmet from '../../components/PageHelmet';
import Heading from '../../components/shared/Heading';
import { FaFacebook, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { BiWorld } from 'react-icons/bi';

const Contactpage = () => {
    return (
        <div >   <div className="container  mx-auto ">
            <PageHelmet title={'Contact'}></PageHelmet>
            <div className="py-5  ">
                <Heading title={"Contact Us"} subtitle={""}></Heading>
            </div>

            <div className="flex my-10 px-2 justify-around  items-center flex-col-reverse  lg:flex-row">
                <div className=" text-center lg:text-left ">
                    <div className='mt-5'>
                        <div className="space-y-3">
                            <h2 className="text-3xl  font-bold ">Contact information</h2>
                            <p className="lg:w-4/6">We’re here to help! Whether you have questions about scholarship applications, need assistance with the platform, or want to collaborate, feel free to reach out to us.</p>
                            <div className="my-4">
                                <div className="my-4">
                                    <p className="flex items-center gap-2 lg:w-4/5"><FaLocationDot className="text-yellow-300 "></FaLocationDot> Road : 4, Block H, House: 430, Dhaka-124
                                        Uttora, Dhaka, Bangladesh</p>
                                </div>
                                <div className="border-t lg:w-4/6 border-gray-300 my-4"></div>
                                <div>
                                    <p className="flex items-center gap-2 lg:w-4/5"><FaPhoneAlt className="text-yellow-300 "></FaPhoneAlt> +880 1701444444</p>
                                </div>
                                <div className="border-t lg:w-4/6 border-gray-300 my-4"></div>
                                <div>
                                    <p className="flex items-center gap-2 lg:w-4/6"><MdEmail className="text-yellow-300 "></MdEmail>support@scholartrackpro.com</p>
                                </div>
                                <div className="border-t lg:w-4/6 border-gray-300 my-4"></div>
                                <div>
                                    <p className="flex items-center gap-2 w-4/5"><BiWorld className="text-yellow-300 "></BiWorld>www.scholartrackpro.com</p>
                                </div>
                                <div className="border-t lg:w-4/6 border-gray-300 my-4"></div>
                            </div>
                        </div>
                    </div>
                    <div className="my-7 flex gap-5">

                        <div>
                            <Link href="https://www.facebook.com" target="_blank"> <FaFacebook className="text-blue-600" size={30}></FaFacebook></Link>
                        </div>
                        <div>
                            <FaInstagram className="text-red-600" size={30}></FaInstagram>
                        </div>
                        <div>
                            <FaXTwitter className="text-black-600" size={30}></FaXTwitter>
                        </div>
                    </div>

                </div>
                <div className="card bg-white  w-full  max-w-xl shadow-2xl">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input text-black input-bordered" />
                        </div>
                        <div className="form-control lg:gap-2 lg:flex-row">
                            <div className="lg:w-1/2">
                                <label className="label">
                                    <span className="label-text ">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input text-black w-full input-bordered" />
                            </div>
                            <div className="lg:w-1/2">
                                <label className="label">
                                    <span className="label-text ">Mobile</span>
                                </label>
                                <input type="text" placeholder="Mobile" className="input text-black w-full input-bordered" />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Comments/ Questions</span>
                            </label>
                            <textarea className="textarea text-black textarea-bordered " rows={4} placeholder="Your Massage"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn border-none lg:px-7 lg:py-3 bg-purple-500 text-white font-bold rounded-full 
          hover:bg-yellow-300 hover:text-black transition duration-300 text-center">Submit Massage</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
        </div>
    );
};

export default Contactpage;