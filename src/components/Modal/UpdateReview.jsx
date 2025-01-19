import {
    Dialog,
    Transition,
    TransitionChild,
    DialogPanel,

} from '@headlessui/react';
import { Fragment, useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import Rating from 'react-rating';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const UpdateReview = ({ refetch, isOpen, setIsEditModalOpen, review }) => {
    const axiosSecure= useAxiosSecure()
    const { scholarshipName,
        universityName,
        comment,
        _id,
        userEmail,
        userName

    } = review || {}
    const [rating, setRating] = useState(review.rating)
    const [comments, setComments] = useState(comment)


    const handleReviewUpdate = async(e) => {
        e.preventDefault()
        const form= e.target
        const updateReview={
            userEmail:form.userEmail.value,
            userName:form.userName.value,
            comment: comments,
            rating
        }
        // console.log(updateReview)
        try{
            await axiosSecure.put(`/review/${_id}`, updateReview)
            refetch()
            toast.success('Review updated')
        }catch (err){
            // console.log(err)
        }finally{
            setIsEditModalOpen(false)
        }
    }
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={() => setIsEditModalOpen(false)}>
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </TransitionChild>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <TransitionChild
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <DialogPanel className="w-full max-w-3xl  transform overflow-hidden rounded-2xl bg-[#2C2536] p-6 text-left align-middle shadow-xl transition-all">
                                {/* Close Button */}
                                <button
                                    className="absolute top-2 right-2 "
                                    onClick={() => setIsEditModalOpen(false)}
                                >
                                    <RxCross2 size={24} />
                                </button>
                                {/* Close Button */}
                                <div>
                                    <form onSubmit={handleReviewUpdate} className="w-full bg-[#2C2536] lg:p-8 p-2 rounded-lg shadow-lg border border-gray-600">
                                        <h2 className="text-xl font-bold mb-4">UpdateYour Review</h2>

                                        <div>
                                                {/* Scholarship Name */}
                                                <div className='lg:flex w-full gap-5'>
                                                    <div className='lg:w-1/2'>
                                                        <label className="block mb-2">Scholarship Name</label>
                                                        <input disabled defaultValue={scholarshipName}  name='scholarshipName'
                                                            className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4" />

                                                    </div>
                                                    <div className='lg:w-1/2'>
                                                        <label className="block mb-2">University Name</label>
                                                        <input  disabled defaultValue={universityName} placeholder='Phone number' name='universityName'
                                                            className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4" />

                                                    </div>

                                                    {/* University Name */}
                                                   
                                                </div>
                                                <div className='lg:flex w-full gap-5'>
                                                    <div className='lg:w-1/2'>
                                                        <label className="block mb-2">User Email</label>
                                                        <input defaultValue={userEmail}  name='userEmail'
                                                            className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4" />

                                                    </div>
                                                    <div className='lg:w-1/2'>
                                                        <label className="block mb-2">User Name</label>
                                                        <input defaultValue={userName}  name='userName'
                                                            className="w-full p-2 rounded bg-gray-200 text-gray-800 mb-4" />

                                                    </div>

                                                    {/* University Name */}
                                                   
                                                </div>

                                               




                                                {/*  React Rating with Custom Styled Stars */}
                                                <label className="block mb-2 font-semibold">Rating:</label>
                                                <Rating
                                                    initialRating={rating}
                                                    onChange={setRating}
                                                    emptySymbol={<FaRegStar size={32} color="gray" />}
                                                    fullSymbol={<FaStar size={32} color="gold" />}
                                                />

                                                {/*  Review Comment */}
                                                <label className="block my-5 font-semibold">Review Comment:</label>
                                                <textarea
                                                    value={comments}
                                                    onChange={(e) => setComments(e.target.value)}
                                                    className="w-full p-2 border text-black bg-gray-200 rounded "
                                                    rows={3}
                                                    placeholder="Write your review here..."
                                                />

                                                {/* Submit Button */}
                                                <button
                                                    className="w-full bg-purple-500 hover:bg-yellow-400 text-white py-3 rounded-lg font-bold hover:text-black transition duration-300 "
                                                >
                                                    Update Review
                                                </button>
                                            </div>
                                    </form>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default UpdateReview;