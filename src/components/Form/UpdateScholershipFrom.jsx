import React, { useState } from 'react';
// import useAuth from '../../hooks/useAuth';
import { ImSpinner } from 'react-icons/im';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
// import axios from 'axios';

const UpdateScholershipFrom = ({ scholarship, refetch, setIsEditModalOpen }) => {
    // const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const [loading, setLoading] = useState(false)
   

    const { scholarshipName, universityName, universityCountry, universityCity, universityWorldRank, subjectCategory, _id, scholarshipCategory, tuitionFees, applicationFees, applicationDeadline, serviceCharge, degree } = scholarship || {};

    const handleUpdate = async (e) => {
       
        e.preventDefault()
        setLoading(true)
        // console.log(form)
        const form= e.target

        const scholarshipData = {
            scholarshipName: form.scholarshipName.value,
            universityName: form.universityName.value,
            universityCountry: form.universityCountry.value,
            universityCity: form.universityCity.value,

            universityWorldRank: parseInt(form.universityRank.value),
            subjectCategory: form.subjectCategory.value,
            scholarshipCategory: form.scholarshipCategory.value,
            degree: form.degree.value,
            tuitionFees: parseInt(form.tuitionFees.value) || 'N/A',
            applicationFees: parseInt(form.applicationFees.value),
            serviceCharge: parseInt(form.serviceCharge.value),
            applicationDeadline: form.applicationDeadline.value,
        };
        // console.log(scholarshipData)

        try{
            await axiosSecure.put(`/scholar/${_id}`, scholarshipData)
            toast.success('Scholarship Update successful!')

        }catch (err){
            // console.log(err)
        }finally{
            setIsEditModalOpen(false)
            refetch()
        }

    }
    return (
        <div className="min-h-screen max-w-7xl mx-auto flex items-center justify-center bg-[#1A1423] text-white p-6">
            <form
                onSubmit={handleUpdate }
                className="w-full bg-[#2C2536] p-8 rounded-lg shadow-lg border border-gray-600"
            >
                <h2 className="text-3xl font-bold mb-6 text-center">Update Scholarship Information</h2>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div>
                        {/* Scholarship Name */}
                        <div>
                            <label className="block mb-2">Scholarship Name</label>
                            <input defaultValue={scholarshipName} name='scholarshipName'
                                className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4" />

                        </div>

                        {/* University Name */}
                        <div>
                            <label className="block mb-2">University Name</label>
                            <input defaultValue={universityName} name='universityName'
                                className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4" />

                        </div>

                        {/* University Image Upload */}


                        {/* University Country */}
                        <div>
                            <label className="block mb-2">University Country</label>
                            <input defaultValue={universityCountry} name='universityCountry'
                                className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4" />

                        </div>

                        {/* University City */}
                        <div>
                            <label className="block mb-2">University City</label>
                            <input defaultValue={universityCity} name='universityCity'
                                className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4" />

                        </div>

                        {/* University Rank */}
                        <div>
                            <label className="block mb-2">University World Rank</label>
                            <input defaultValue={universityWorldRank} type="number" name='universityRank'
                                className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4" />

                        </div>

                        {/* Subject Category Dropdown */}
                        <div>
                            <label className="block mb-2">Subject Category</label>
                            <select defaultValue={subjectCategory} name='subjectCategory'
                                className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4">
                                <option value="Agriculture">Agriculture</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Doctor">Doctor</option>
                            </select>

                        </div>


                    </div>
                    <div>

                        {/* Scholarship Category Dropdown */}
                        <div>
                            <label className="block mb-2">Scholarship Category</label>
                            <select defaultValue={scholarshipCategory} name='scholarshipCategory'
                                className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4">
                                <option value="Full fund">Full fund</option>
                                <option value="Partial">Partial</option>
                                <option value="Self-fund">Self-fund</option>

                            </select>

                        </div>

                        {/* Degree Dropdown */}
                        <div>
                            <label className="block mb-2">Degree</label>
                            <select defaultValue={degree} name='degree'
                                className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4">
                                <option value="Diploma">Diploma</option>
                                <option value="Bachelor">Bachelor</option>
                                <option value="Masters">Masters</option>

                            </select>

                        </div>

                        {/* Tuition Fees (Optional) */}
                        <div>
                            <label className="block mb-2">Tuition Fees (Optional)</label>
                            <input defaultValue={tuitionFees} type="number" name='tuitionFees'
                                className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4" />

                        </div>
                        {/* Application Fees */}
                        <div>
                            <label className="block mb-2">Application Fees</label>
                            <input defaultValue={applicationFees} type="number" name='applicationFees'
                                className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4" />

                        </div>

                        {/* Service Charge */}
                        <div>
                            <label className="block mb-2">Service Charge</label>
                            <input defaultValue={serviceCharge} type="number" name='serviceCharge'
                                className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4" />

                        </div>
                        {/* Application Deadline */}
                        <div>
                            <label className="block mb-2">Application Deadline</label>
                            <input defaultValue={applicationDeadline} type="date" name='applicationDeadline'
                                className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4" />

                        </div>
                        {/* Posted User Email */}

                    </div>

                </div>
                {/* Submit Button */}
                <button type="submit" className="w-full bg-purple-500 hover:bg-yellow-400 text-white py-3 rounded-lg font-bold hover:text-black transition duration-300 ">
                    {loading ? (
                        <ImSpinner className='animate-spin m-auto' />

                    ) : (
                        '  Update Scholarship'
                    )}

                </button>
            </form>
        </div>
    );
};

export default UpdateScholershipFrom;