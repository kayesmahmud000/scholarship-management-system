

import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react'
import { Fragment, } from 'react'

import UpdateScholershipFrom from '../Form/UpdateScholershipFrom'
import { RxCross2 } from 'react-icons/rx'

const ScholarshipUpdateModal = ({ setIsEditModalOpen, isOpen, scholarship, refetch }) => {



  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10'
        onClose={() => setIsEditModalOpen(false)}
      >
        <TransitionChild
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </TransitionChild>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <TransitionChild
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <DialogPanel className='w-full max-w-5xl transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all'>
                <DialogTitle
                  as='h3'
                  className='text-lg font-medium text-center leading-6 text-gray-900'
                >
                  Update Scholar Information

                </DialogTitle>

                <div className='mt-2 relative w-full'>
                  <div className='absolute top-5 left-5'>
                    <button onClick={() => setIsEditModalOpen(false)}
                    ><RxCross2 size={30} /></button>
                  </div>
                  <UpdateScholershipFrom scholarship={scholarship} setIsEditModalOpen={setIsEditModalOpen} refetch={refetch} />
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}



export default ScholarshipUpdateModal
