import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { imageUpload } from '../../api/utils';
import { ImSpinner } from 'react-icons/im';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
// import axios from 'axios';


const AddScholarFrom = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const [loading, setLoading] = useState(false)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        setLoading(true)
        // console.log(data)
        const imageFile = data?.universityImage[0]
        const imageUrl = await imageUpload(imageFile)
        const postedEmail = user?.email


        const scholarshipData = {
            scholarshipName: data.scholarshipName,
            universityName: data.universityName,
            universityLogo: imageUrl,
            universityCountry: data.universityCountry,
            universityCity: data.universityCity,

            universityWorldRank: parseInt(data.universityRank),
            subjectCategory: data.subjectCategory,
            scholarshipCategory: data.scholarshipCategory,
            degree: data.degree,
            tuitionFees:parseInt( data.tuitionFees )|| 'N/A',
            applicationFees: parseInt(data.applicationFees),
            serviceCharge: parseInt(data.serviceCharge),
            applicationDeadline: data.applicationDeadline,
            scholarshipPostDate: new Date().toISOString().split('T')[0],
            postedUserEmail: postedEmail
        };

        try {
            await axiosSecure.post('/scholarship', scholarshipData)
            toast.success('New scholarship added successful! ')
        } catch (err) {
            // console.log(err)
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="min-h-screen max-w-7xl mx-auto flex items-center justify-center bg-[#1A1423] text-white p-6">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full bg-[#2C2536] p-8 rounded-lg shadow-lg border border-gray-600"
            >
                <h2 className="text-3xl font-bold mb-6 text-center">Add New Scholarship</h2>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div>
                        {/* Scholarship Name */}
                        <div>
                            <label className="block mb-2">Scholarship Name</label>
                            <input {...register("scholarshipName", { required: true })}
                                className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4" />
                            {errors.scholarshipName && <p className="text-red-400  text-xs">This field is required</p>}
                        </div>

                        {/* University Name */}
                        <div>
                            <label className="block mb-2">University Name</label>
                            <input {...register("universityName", { required: true })}
                                className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4" />
                            {errors.universityName && <p className="text-red-400 text-xs">This field is required</p>}
                        </div>

                        {/* University Image Upload */}
                        <div>
                            <label className="block mb-2">University Image </label>
                            <label htmlFor="">
                                <input type="file" {...register("universityImage", { required: true })}
                                    className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4" />
                            </label>
                            {errors.universityImage && <p className="text-red-400  text-xs">Please upload an image</p>}

                        </div>

                        {/* University Country */}
                        <div>
                            <label className="block mb-2">University Country</label>
                            <input {...register("universityCountry", { required: true })}
                                className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4" />
                            {errors.universityCountry && <p className="text-red-400  text-xs">This field is required</p>}
                        </div>

                        {/* University City */}
                        <div>
                            <label className="block mb-2">University City</label>
                            <input {...register("universityCity", { required: true })}
                                className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4" />
                            {errors.universityCity && <p className="text-red-400  text-xs">This field is required</p>}
                        </div>

                        {/* University Rank */}
                        <div>
                            <label className="block mb-2">University World Rank</label>
                            <input type="number" {...register("universityRank", { required: true })}
                                className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4" />
                            {errors.universityRank && <p className="text-red-400  text-xs">This field is required</p>}
                        </div>

                        {/* Subject Category Dropdown */}
                        <div>
                            <label className="block mb-2">Subject Category</label>
                            <select {...register("subjectCategory", { required: true })}
                                className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4">
                                <option value="Agriculture">Agriculture</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Doctor">Doctor</option>
                            </select>
                            {errors.subjectCategory && <p className="text-red-400  text-xs">Please select a Subject Category</p>}
                        </div>


                    </div>
                    <div>

                        {/* Scholarship Category Dropdown */}
                        <div>
                            <label className="block mb-2">Scholarship Category</label>
                            <select {...register("scholarshipCategory", { required: true })}
                                className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4">
                                <option value="Full fund">Full fund</option>
                                <option value="Partial">Partial</option>
                                <option value="Self-fund">Self-fund</option>

                            </select>
                            {errors.scholarshipCategory && <p className="text-red-400  text-xs">Please select a Scholarship  Category</p>}
                        </div>

                        {/* Degree Dropdown */}
                        <div>
                            <label className="block mb-2">Degree</label>
                            <select {...register("degree", { required: true })}
                                className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4">
                                <option value="Diploma">Diploma</option>
                                <option value="Bachelor">Bachelor</option>
                                <option value="Masters">Masters</option>

                            </select>
                            {errors.degree && <p className="text-red-400  text-xs">Please select a Degree</p>}
                        </div>

                        {/* Tuition Fees (Optional) */}
                        <div>
                            <label className="block mb-2">Tuition Fees (Optional)</label>
                            <input type="number" {...register("tuitionFees")}
                                className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4" />

                        </div>
                        {/* Application Fees */}
                        <div>
                            <label className="block mb-2">Application Fees</label>
                            <input type="number" {...register("applicationFees", { required: true })}
                                className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4" />
                            {errors.applicationFees && <p className="text-red-400  text-xs">This field is required</p>}
                        </div>

                        {/* Service Charge */}
                        <div>
                            <label className="block mb-2">Service Charge</label>
                            <input type="number" {...register("serviceCharge", { required: true })}
                                className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4" />
                            {errors.serviceCharge && <p className="text-red-400  text-xs">This field is required </p>}
                        </div>
                        {/* Application Deadline */}
                        <div>
                            <label className="block mb-2">Application Deadline</label>
                            <input type="date" {...register("applicationDeadline", { required: true })}
                                className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4" />
                            {errors.applicationDeadline && <p className="text-red-400  text-xs">Please pick a deadline</p>}
                        </div>
                        {/* Posted User Email */}
                        <div>
                            <label className="block mb-2">Posted User Email</label>
                            <input type="email" disabled defaultValue={user?.email}
                                className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4" />

                        </div>
                    </div>

                </div>
                {/* Submit Button */}
                <button type="submit" className="w-full bg-purple-500 hover:bg-yellow-400 text-white py-3 rounded-lg font-bold hover:text-black transition duration-300 ">
                    {loading ? (
                        <ImSpinner className='animate-spin m-auto' />

                    ) : (
                        '  Add Scholarship'
                    )}

                </button>
            </form>
        </div>
    );
};

export default AddScholarFrom;