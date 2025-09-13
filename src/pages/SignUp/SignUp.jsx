import React, { useState } from 'react';
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom';
import GoogleLogin from '../../components/shared/GoogleLogin';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import { imageUpload, saveUser } from '../../api/utils';
import { ImSpinner } from 'react-icons/im';
import PageHelmet from '../../components/PageHelmet';

const SignUp = () => {
    const {createUser, updateUserProfile}= useAuth()
    const [loading, setLoading]=useState(false)
    const {
            register,
            handleSubmit,
           
            formState: { errors },
        } = useForm()
        const navigate= useNavigate()
        const onSubmit =async(data) =>{
          setLoading(true)
            const email= data?.email
            const password= data?.password
            const name =data?.name
            const imageFile= data?.image[0]
            // console.log(imageFile)
            const photoURL= await imageUpload(imageFile) 
            // console.log(photoURL)
            try{
                //create user Account

             const result=  await createUser(email, password)
             await updateUserProfile( name, photoURL)

            //  console.log(result)
             await saveUser({...result?.user, displayName:name, photoURL})
             navigate('/')
             
             toast.success('Sign Up success')
            }catch (err){
                // console.log(err)
                toast.error(err?.message)
            }finally{
              setLoading(false)
            }
        } 

       
    return (
        <div className='flex justify-center items-center min-h-screen '>
          <PageHelmet title={'Sign Up'}/>
        <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
          <div className='mb-8 text-center'>
            <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
            <p className='text-sm text-gray-400'>Welcome to PlantNet</p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate=''
            action=''
            className='space-y-6 ng-untouched ng-pristine ng-valid'
          >
            <div className='space-y-4'>
              <div>
                <label htmlFor='email' className='block mb-2 text-sm'>
                  Name
                </label>
                <input
                  type='text'
                  {...register("name", { required: true, maxLength: 20 })}
                  id='name'
                  placeholder='Enter Your Name Here'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#1e172b]bg-gray-200 text-gray-900'
                  data-temp-mail-org='0'
                />
                {errors.name && <span className='text-red-400 text-xs'> name is required</span>}
              </div>
              <div>
                <label htmlFor='image' className='block mb-2 text-sm'>
                  Select Image:
                </label>
                <input
                
                  type='file'
                  id='image'
                  {...register("image", {  })}
                  accept='image/*'
                />
                 {/* {errors.image && <span className='text-red-400 text-xs'>image is required</span>} */}
              </div>
              <div>
                <label htmlFor='email' className='block mb-2 text-sm'>
                  Email address
                </label>
                <input
                  type='email'
                  {...register("email", { required: true,})}
                  id='email'
                 
                  placeholder='Enter Your Email Here'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#1e172b]bg-gray-200 text-gray-900'
                  data-temp-mail-org='0'
                />
                 {errors.email && <span className='text-red-400 text-xs'> email required</span>}
              </div>
              <div>
                <div className='flex justify-between'>
                  <label htmlFor='password' className='text-sm mb-2'>
                    Password
                  </label>
                </div>
                <input
                    type="password"
                    {...register('password', {
                        required: 'Password is required',
                        minLength: {
                            value: 6,
                            message: 'Password must be at least 6 characters long',
                        },
                        validate: {
                            hasCapitalLetter: (value) => /[A-Z]/.test(value) || 'Password must contain at least one capital letter',
                            hasSpecialCharacter: (value) => /[!@#$%^&*(),.?":{}|<>]/.test(value) || 'Password must contain at least one special character',
                        },
                    })}
                    placeholder="Enter your password"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#1e172b] bg-gray-200 text-gray-900"
                />
                {errors.password && <span className="text-red-400 text-xs">{errors.password.message}</span>}
              </div>
            </div>
  
            <div>
              <button
                type='submit'
                className='bg-white w-full rounded-md py-3 text-black'
              >
                
                {loading ? (
                  <ImSpinner className='animate-spin m-auto' />
                 
                ) : (
                  'Continue'
                )}
              </button>
            </div>
          </form>
          <div className='flex items-center pt-4 space-x-1'>
            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
            <p className='px-3 text-sm dark:text-gray-400'>
              Signup with social accounts
            </p>
            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          </div>
         <GoogleLogin/>
          <p className='px-6 text-md text-center '>
            Already have an account?{' '}
            <Link
              to='/login'
              className='hover:underline hover:text-[#1e172b] '
            >
              Login
            </Link>
            .
          </p>
        </div>
      </div>
    );
};

export default SignUp;