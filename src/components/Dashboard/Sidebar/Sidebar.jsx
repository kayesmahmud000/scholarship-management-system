import React, { useState } from 'react';
import { AiOutlineBars } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import AdminMenu from './Menu/AdminMenu';
import SharedMenu from './Menu/SharedMenu';
import UserMenu from './Menu/UserMenu';
import logo from '../../../assets/coin.png'
import MenuItem from './Menu/MenuItem';
import { FcSettings } from 'react-icons/fc';
import { GrLogout } from 'react-icons/gr';
import useRole from '../../../hooks/useRole';
import useAuth from '../../../hooks/useAuth';
import LoadingSpinner from '../../LoadingSpinner';
import { CgProfile } from 'react-icons/cg';
import { FaHome } from 'react-icons/fa';

const Sidebar = () => {
    const [isActive, setIsActive] = useState(false)
    const { loading, signout } = useAuth()
    const [role, isLoading] = useRole()
    const handleToggle = () => {
        setIsActive(!isActive)
    }
    if (loading && isLoading) return <LoadingSpinner />
    return (

        <>
            {/* Small Screen Navbar */}
            <div className=' bg-[#1e172b]   flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link to='/'>
                            <div className='flex  items-center'>
                                <img src={logo} className=" w-10 -mt-2 hidden md:flex  lg:w-16" alt="" />
                                <h1 className="font-bold text-xl md:text-3xl lg:text-5xl">SCHOLAR <span className=' text-sm md:text-xl font-bold border-b border-yellow-300'>TRACK PRO</span></h1>
                            </div>
                        </Link>
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none '
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`z-10 md:fixed bg-[#1e172b] flex flex-col justify-between overflow-x-hidden w-64 md:w-80 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <div>
                        <div className='w-full  hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center  mx-auto'>
                            <Link to='/'>
                                <div className='flex  items-center'>                                <img src={logo} className=" w-10 -mt-2 hidden md:flex  lg:w-16" alt="" />
                                    <h1 className="font-bold text-xl md:text-3xl ">SCHOLAR <span className=' text-sm md:text-xl font-bold border-b border-yellow-300'>TRACK PRO</span></h1>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        <nav>
                            {
                                role === 'admin' ? <MenuItem
                                    icon={CgProfile}
                                    label=' Admin Profile'
                                    address='/dashboard/profile'
                                /> : <MenuItem
                                    icon={CgProfile}
                                    label='Profile'
                                    address='/dashboard/profile'
                                />
                            }

                            {role === 'admin' && <AdminMenu />}
                            {role !== 'user' && <SharedMenu />}
                            {role === 'user' && <UserMenu></UserMenu>}


                        </nav>
                    </div>
                </div>

                <div>
                    <hr />

                    <button

                        className='flex w-full items-center px-4 py-2 mt-5  hover:bg-purple-500 text-white    transition-colors duration-300   transform'
                    >
                        <FaHome className='w-5 h-5' />
                        <Link to={'/'}>
                            <button className='mx-4 font-medium'>Home</button>
                        </Link>
                    </button>
                    <button

                        className='flex w-full items-center px-4 py-2 mt-5  hover:bg-purple-500    transition-colors duration-300  text-white transform'
                    >
                        <GrLogout className='w-5 h-5' />

                        <button onClick={signout} className='mx-4 font-medium'>Logout</button>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Sidebar;