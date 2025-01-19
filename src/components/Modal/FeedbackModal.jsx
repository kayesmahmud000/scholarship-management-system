import {
    Dialog,
    Transition,
    TransitionChild,
    DialogPanel,
    
} from '@headlessui/react';
import { Fragment, useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const FeedbackModal = ({isOpen, application, refetch,setFeedbackModal}) => {
    const axiosSecure= useAxiosSecure()
    const[feedback, setFeedback]=useState('')
   
      const handleFeedback= async()=>{
        // console.log(application._id)
        // console.log(feedback)
        try{
            await axiosSecure.patch(`/application/${application._id}`, {feedback})
            toast.success('Feedback send success!')
            refetch()
        }catch (err){
            // console.logI(err)
        }finally{
            setFeedbackModal(false)
        }
      }
    return (
        <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setFeedbackModal(false)}>
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
                                    onClick={() => setFeedbackModal(false)}
                                >
                                    <RxCross2 size={24} />
                                </button>

                                <h2 className="text-xl font-bold text-center mb-4">Send A Feedback</h2>

                                {/*  React Rating with Custom Styled Stars */}

                                {/*  Review Comment */}
                                <textarea
                                    value={feedback}
                                    onChange={(e) => setFeedback(e.target.value)}
                                    className="w-full p-2 border text-black bg-gray-200 rounded "
                                    rows={3}
                                    placeholder="Write your feedback here..."
                                />

                                {/* Submit Button */}
                                <button
                                        onClick={handleFeedback}
                                        className="w-full bg-purple-500 hover:bg-yellow-400 text-white py-3 rounded-lg font-bold hover:text-black transition duration-300 "
                                    >
                                        Feedback
                                    </button>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </Transition>
    );
};

export default FeedbackModal;

