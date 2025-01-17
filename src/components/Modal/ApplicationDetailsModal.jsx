import {
    Dialog,
    Transition,
    TransitionChild,
    DialogPanel,
    
} from '@headlessui/react';
import { Fragment, useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
const ApplicationDetailsModal = ({isOpen, application, setDetailsModal}) => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setDetailsModal(false)}>
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
                                    className="absolute top-2 right-2 text-gray-200"
                                    onClick={() => setDetailsModal(false)}
                                >
                                    <RxCross2 size={24} />
                                </button>

                                <h2 className="text-xl font-bold text-center mb-4">Application Details</h2>

                                <div className="space-y-4">
                            <p className="text-lg"><span className="font-semibold">University Name:</span> {application?.scholarInfo?.universityName}</p>
                            <p className="text-lg"><span className="font-semibold">Degree:</span> { application?.scholarInfo?.degree}</p>
                            <p className="text-lg"><span className="font-semibold">Scholarship Category:</span> { application?.scholarInfo?.scholarshipCategory}</p>
                            <p className="text-lg"><span className="font-semibold">Name:</span> { application?.applicantName}</p>
                            <p className="text-lg"><span className="font-semibold">Email:</span> { application?.applicantEmail}</p>
                            <p className="text-lg"><span className="font-semibold">Phone Number:</span> { application?.phoneNumber}</p>
                            <p className="text-lg"><span className="font-semibold">Country:</span> { application?.country}</p>
                            <p className="text-lg"><span className="font-semibold">District:</span> { application?.district}</p>
                            <p className="text-lg"><span className="font-semibold">Gender:</span> { application?.gender}</p>
                            <p className="text-lg"><span className="font-semibold">HSC Result:</span> { application?.hscResult}</p>
                            <p className="text-lg"><span className="font-semibold">SSC Result:</span> { application?.sscResult}</p>
                            <p className="text-lg"><span className="font-semibold">Study Gap:</span> { application?.studyGap}</p>
                        </div>
                               
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </Transition>
    );
};

export default ApplicationDetailsModal;