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

const Sidebar = () => {
    const [isActive, setIsActive] = useState(false)
    const [role]=useRole()
    const handleToggle = () => {
        setIsActive(!isActive)
    }
    return (

        <>
            {/* Small Screen Navbar */}
            <div className=' bg-[#1e172b]   flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link to='/'>
                            <div className='flex  items-center'>
                                <img src={logo} className=" w-10  " alt="" />
                                <h1 className="font-bold md:text-3xl lg:text-5xl">SCHOLAR <span className='md:text-xl font-bold'>TRACK PRO</span></h1>
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
                                <div className='flex  items-center'>                                <img src={logo} className=" w-20 " alt="" />
                                    <h1 className="font-bold text-3xl">SCHOLAR <span className='md:text-xl font-bold'>TRACK PRO</span></h1>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        <nav>
                            {/*  Menu Items */}
                            {/* {role==="customer"&&  <CustomerMenu />}
               {role==="seller"&&   <SellerMenu />}
               {role==="admin"&&  <AdminMenu />} */}


                           {role==='admin' &&  <AdminMenu />}
                           {role !=='user' && <SharedMenu />}
                            {/* <ModeratorMenu></ModeratorMenu> */}
                           {role ==='user' &&  <UserMenu></UserMenu>}


                        </nav>
                    </div>
                </div>

                <div>
                    <hr />
                    <MenuItem
                        icon={FcSettings}
                        label='Profile'
                        address='/dashboard/profile'
                    />
                    <button

                        className='flex w-full items-center px-4 py-2 mt-5  hover:bg-gray-300    transition-colors duration-300  hover:text-gray-700 transform'
                    >
                        <GrLogout className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </>
        //     <div className='  flex justify-between md:hidden'>
        //         <div>
        //             <div className='block cursor-pointer p-4 font-bold'>
        //                 <Link to='/'>
        //                     <div className='flex  items-center'>
        //                         <img src={logo} className=" w-10 hidden md:flex  lg:w-20" alt="" />
        //                         <h1 className="font-bold md:text-3xl lg:text-5xl">SCHOLAR <span className='md:text-xl font-bold'>TRACK PRO</span></h1>
        //                     </div>
        //                 </Link>
        //             </div>
        //         </div>

        //         <button
        //             onClick={handleToggle}
        //             className='mobile-menu-button p-4 focus:outline-none '
        //         >
        //             <AiOutlineBars className='h-5 w-5' />
        //         </button>
        //         <div
        //             className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden  w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
        //                 }  md:translate-x-0  transition duration-200 ease-in-out`}
        //         >
        //             <div>
        //                 <div className=''>
        //                     <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center  mx-auto'>
        //                         <Link to='/'>
        //                             <div className='flex  items-center'>
        //                                 <img src={logo} className=" w-10 hidden md:flex  lg:w-20" alt="" />
        //                                 <h1 className="font-bold md:text-3xl lg:text-5xl">SCHOLAR <span className='md:text-xl font-bold'>TRACK PRO</span></h1>
        //                             </div>
        //                         </Link>
        //                     </div>
        //                 </div>

        //                 {/* Nav Items */}
        //                 <div className='flex flex-col justify-between flex-1 mt-6'>
        //                     <nav>
        //                         {/*  Menu Items */}
        //                         {/* {role==="customer"&&  <CustomerMenu />}
        //  {role==="seller"&&   <SellerMenu />}
        //  {role==="admin"&&  <AdminMenu />} */}

        //                         <AdminMenu />
        //                         <SharedMenu />
        //                         <UserMenu></UserMenu>


        //                     </nav>
        //                 </div>
        //             </div>

        //             <div>
        //                 <hr />

        //                 <MenuItem
        //                     icon={FcSettings}
        //                     label='Profile'
        //                     address='/dashboard/profile'
        //                 />
        //                 <button

        //                     className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
        //                 >
        //                     <GrLogout className='w-5 h-5' />

        //                     <span className='mx-4 font-medium'>Logout</span>
        //                 </button>
        //             </div>
        //         </div>
        //     </div>
    );
};

export default Sidebar;