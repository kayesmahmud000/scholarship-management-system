import {
    Dialog,
    Transition,
    TransitionChild,
    DialogPanel,
    DialogTitle,
  } from '@headlessui/react'
  import { Fragment, useState, } from 'react'
import { RxCross2 } from 'react-icons/rx';
import ApplicationForm from '../Form/ApplicationForm';
import useAuth from '../../hooks/useAuth';
import { imageUpload } from '../../api/utils';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ApplicationModal = ({ setIsEditModalOpen,  scholar,  isOpen ,}) => {
    const [loading, setLoading] = useState(false)
    const axiosSecure= useAxiosSecure()
    const {user}=useAuth()
    const navigate= useNavigate()
    
    const handleApplication=async(e)=>{
      setLoading(true)
        e.preventDefault()
        const form= e.target
       const photoFile= form.photo.files[0]
     
               const imageUrl = await imageUpload(photoFile)
       console.log(imageUrl)

    const scholarInfo={
      scholarId:scholar._id,
      scholarName:scholar.scholarshipName,
      deadline:scholar.applicationDeadline,
      degree: form.degree.value,
      universityName: form.universityName.value,
      scholarshipCategory: form.scholarshipCategory.value,
      subjectCategory: form.subjectCategory.value,
     }
        const applicationData = {
          phoneNumber: form.phoneNumber.value,
          applicantEmail:user?.email,
          applicantName:user?.displayName,
          photo:imageUrl,
          // userId:'',
          village: form.village.value,
          district: form.district.value,
          country:form.country.value,
          gender: form.gender.value,
          hscResult: form.hscResult.value,
          studyGap: form.studyGap.value ,
          sscResult: form.sscResult.value,
          scholarInfo,
          status:"pending",
          applicationDate:new Date().toISOString().split('T')[0]
        
        
      };
      console.log(applicationData)
      try{
        // post the application on db application collection
        await axiosSecure.post('/application', applicationData)
        toast.success('Application Successful!')
        navigate('/dashboard/myApplication')
      }catch (err){
        console.log(err)
      }finally{
        setLoading(false)
      }
       
      

    }
    return (
        <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-50'
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
                  
                    
                  </DialogTitle>
                  
                  <div className='mt-2 relative w-full'>
                  <div className='absolute top-5 left-5'>
                    <button  onClick={() => setIsEditModalOpen(false)}
                    ><RxCross2 size={30} /></button>
                  </div>
                  <ApplicationForm loading={loading}   scholar={scholar} handleApplication={handleApplication} setIsEditModalOpen={setIsEditModalOpen}/>
                  {/* <UpdateScholershipFrom scholar={scholar} setIsEditModalOpen={setIsEditModalOpen} refetch={refetch}/> */}
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    );
};

export default ApplicationModal;