import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../../components/shared/GoogleLogin";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useState } from "react";
import { ImSpinner } from "react-icons/im";

const Login = () => {
    const { signIn } = useAuth()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        setLoading(true)
        try {
            //  login user
            await signIn(data?.email, data?.password)
            navigate('/')
            toast.success('Login success')

        } catch (err) {
            console.log(err)
            toast.error('Login failed')
        }finally{
            setLoading(false)
        }

    }

    return (
        <div className='flex justify-center items-center min-h-screen '>
            <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Log In</h1>
                    <p className='text-sm text-gray-400'>
                        Sign in to access your account
                    </p>
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
                                Email address
                            </label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                {...register("email", { required: true, })}
                                placeholder='Enter Your Email Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#1e172b] bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                            {errors.email && <span className='text-red-400 text-xs'>Invalid email </span>}
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
                                    required: true
                                })}
                                placeholder="Enter your password"
                                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#1e172b] bg-gray-200 text-gray-900"
                            />
                            {errors.password && <span className='text-red-400 text-xs'>Invalid password </span>}
                        </div>
                    </div>

                    <div>
                        <button
                            type='submit'
                            className='bg-[#1e172b] w-full rounded-md py-3 text-white'
                        >
                            {loading ? (
                                <ImSpinner className='animate-spin m-auto' />

                            ) : (
                                'Continue'
                            )}
                        </button>
                    </div>
                </form>
                <div className='space-y-1'>
                    <button className='text-xs hover:underline hover:-[#1e172b] text-gray-400'>
                        Forgot password?
                    </button>
                </div>
                <div className='flex items-center pt-4 space-x-1'>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    <p className='px-3 text-sm dark:text-gray-400'>
                        Login with social accounts
                    </p>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                </div>
                <GoogleLogin></GoogleLogin>
                <p className='px-6 text-md text-center '>
                    Don&apos;t have an account yet?{' '}
                    <Link
                        to='/signup'
                        className='hover:underline hover:text-[#1e172b] '
                    >
                        Sign up
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
};

export default Login;