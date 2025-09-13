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
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ReviewModal = ({ application, isOpen, setIsReviewModalOpen }) => {
    // console.log(application?._id)
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const {user}=useAuth()
    const axiosSecure= useAxiosSecure()
    const navigate= useNavigate()
    // console.log(rating, comment)
    // const [reviewData, setReviewData] = useState({

    // })
    const handleReview = async() => {
        const reviewData={
            rating,
            comment,
            userName:user?.displayName,
            userEmail:user?.email,
            userPhoto:user?.photoURL,
            scholarshipName: application?.scholarInfo?.scholarName,
            universityName: application?.scholarInfo?.universityName,
            universityId: application?.scholarInfo?.scholarId,
            reviewDate: new Date().toISOString().split('T')[0]
        }
        // console.log(reviewData)
        try{
            await axiosSecure.post('/review', reviewData)

            // await axiosSecure.patch(`/scholar/${application?.scholarInfo?.scholarId}`, {rating})

            toast.success('review send successful!')
            navigate('/dashboard/myReview')

        }catch (err){
        //    console.log(err?.response?.data?.massage)

        }

    }
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={() => setIsReviewModalOpen(false)}>
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
                            <DialogPanel className="w-full max-w-lg  transform overflow-hidden rounded-2xl bg-[#2C2536] p-6 text-left align-middle shadow-xl transition-all">
                                {/* Close Button */}
                               {/* Close Button */}
                               <button
                                        className="absolute top-2 right-2 text-gray-600"
                                        onClick={() => setIsReviewModalOpen(false)}
                                    >
                                        <RxCross2 size={24} />
                                    </button>

                                    <h2 className="text-xl font-bold mb-4">Give Your Review</h2>

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
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                        className="w-full p-2 border text-black bg-gray-200 rounded "
                                        rows={3}
                                        placeholder="Write your review here..."
                                    />

                                    {/* Submit Button */}
                                    <button
                                            onClick={handleReview}
                                            className="w-full bg-purple-500 hover:bg-yellow-400 text-black py-3 rounded-lg font-bold hover:text-black transition duration-300 "
                                        >
                                            Submit Review
                                        </button>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default ReviewModal;

