
import { ImSpinner } from 'react-icons/im';


const ApplicationForm = ({ setIsEditModalOpen, loading, handleApplication,   scholar }) => {
    
    // console.log(scholar)
   
    return (
        <div className="min-h-screen max-w-7xl mx-auto  flex items-center justify-center bg-[#1A1423] text-white lg:p-6 p-2">
            <form
                onSubmit={handleApplication }
                className="w-full bg-[#2C2536] lg:p-8 p-2 rounded-lg shadow-lg border border-gray-600"
            >
                <h2 className=" text-2xl lg:text-3xl font-bold mb-6 text-center"> Fill Up the Scholarship Application Form</h2>

                <div className=''>
                    <div>
                        {/* Scholarship Name */}
                        <div className='lg:flex w-full gap-5'>
                            <div className='lg:w-1/2'>
                                <label className="block mb-2">Applicant's phone number</label>
                                <input placeholder='Phone number' name='phoneNumber'
                                    className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4" />

                            </div>

                            {/* University Name */}
                            <div className='lg:w-1/2'>
                                <label className="block mb-2">Applicant photo</label>
                                <label htmlFor="">
                                <input type="file" name='photo'
                                    className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4" />
                            </label>

                            </div>
                        </div>

                        {/* University Image Upload */}


                        {/* University Country */}
                        <div className=''>
                        <label className="block mb-2">Applicant address </label>
                            <div className=' flex gap-3 w-full'>
                                <div className='w-1/3'>
                                <input  placeholder='village' name='village'
                                    className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4" />
                                </div>
                                <div className='w-1/3'>
                               
                                <input  placeholder='district' name='district'
                                    className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4" />
                                </div>
                               <div className='w-1/3'>
                              
                                <input  placeholder='country' name='country'
                                    className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4" />
                               </div>

                            </div>

                            {/* University City */}


                        </div>
                        {/* University Rank */}
                        <div className='lg:flex w-full gap-5'>
                        <div className='lg:w-1/2'>
                                <label className="block mb-2">Applicant gender </label>
                                <select defaultValue={'Gender'} name='gender'
                                    className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4">
                                    <option  disabled>Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Others</option>
                                </select>


                            </div>
                            <div className='lg:w-1/2'>
                                <label className="block mb-2"> Applying Degree</label>
                                <select defaultValue={'Degree'} name='degree'
                                    className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4">
                                    <option disabled >Degree</option>
                                    <option value="Diploma">Diploma</option>
                                    <option value="Bachelor">Bachelor</option>
                                    <option value="Masters">Masters</option>

                                </select>

                            </div>

                        </div>
                        {/* Scholarship Category Dropdown */}
                        <div className='lg:flex w-full gap-5'>
                            <div className='lg:w-1/2'>
                                <label className="block mb-2">HSC result</label>
                                <input placeholder='HSC Result' name='hscResult'
                                    className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4" />

                            </div>

                            {/* Degree Dropdown */}
                            <div className='lg:w-1/2'>
                                <label className="block mb-2">Study gap </label>
                                <select defaultValue={'N/A'} name='studyGap'
                                    className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4">
                                    <option disabled >Study Gap</option>
                                    <option value="N/A">N/A</option>
                                    <option value="1 Year">1 year</option>
                                    <option value="2 Years">2 Years</option>
                                   
                                </select>

                            </div>
                        </div>
                        <div className='lg:flex w-full gap-5'>
                        {/* Subject Category Dropdown */}
                        <div className='lg:w-1/2'>
                                <label className="block mb-2">SSC Result</label>
                                <input  name='sscResult' placeholder='SSC Result'
                                    className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4" />

                            </div>
                        {/* Tuition Fees (Optional) */}
                        <div className='lg:w-1/2'>
                            <label className="block mb-2">University name </label>
                            <input defaultValue={scholar?.universityName} disabled type="text" name='universityName'
                                className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4" />

                        </div>
                        </div>
                        {/* Application Fees */}
                      <div className='lg:flex w-full gap-5'> 
                      <div className='lg:w-1/2'>
                            <label className="block mb-2">Scholarship category</label>
                            <input defaultValue={scholar?.scholarshipCategory} disabled type="text" name='scholarshipCategory'
                                className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4" />

                        </div>

                        {/* Service Charge */}
                        <div className='lg:w-1/2'>
                            <label className="block mb-2">Subject Category</label>
                            <input defaultValue={scholar?.subjectCategory} disabled type="text" name='subjectCategory'
                                className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4" />

                        </div>
                      </div>

                    </div>


                </div>
                {/* Submit Button */}
                <button type="submit" className="w-full bg-purple-500 hover:bg-yellow-400 text-white py-3 rounded-lg font-bold hover:text-black transition duration-300 ">
                    {loading ? (
                        <ImSpinner className='animate-spin m-auto' />

                    ) : (
                        '  Apply'
                    )}

                </button>
            </form>
        </div>
    );
};

export default ApplicationForm;