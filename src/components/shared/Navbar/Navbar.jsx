import React, { useEffect, useState } from 'react';
import logo from '../../../assets/coin.png'
import Container from '../../Container';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import useAuth from '../../../hooks/useAuth';
import toast from 'react-hot-toast';

const Navbar = () => {
    const [scroll, setScroll] = useState(false);
    const [isOpen, setIsOpen]= useState(false)
    const [isHovered, setIsHovered]= useState(false)
    const {signout, user}=useAuth()

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLogOut=()=>{
        signout()
        .then(() => {
            toast.success('Logout success')
        })
        .catch(err => {
            // console.log(err)
        })

    }

    const link = <>
        <li><NavLink className={({ isActive }) => isActive ? "text-white underline  px-3 py-2  text-sm lg:text-lg" : " mb-4 px-3 text-sm lg:text-lg"} to={"/"}>Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "text-white underline  px-3 py-2  text-sm lg:text-lg" : " mb-4 px-3 text-sm lg:text-lg"} to={"/allScholar"}>All Scholarship</NavLink></li>
        
       
        <li><NavLink className={({ isActive }) => isActive ? "text-white underline  px-3 py-2  text-sm lg:text-lg" : " mb-4 px-3 text-sm lg:text-lg"} to={"/dashboard"}>Dashboard</NavLink></li>
        
      
    </>

    return (
        <div className={`navbar fixed z-50 w-full py-4 transition-all duration-300 ease-in-out ${scroll ? "bg-[#1e172b]    text-white shadow-lg" : "bg-transparent text-white"
            }`}>

            <Container>
                <div className="navbar items-center ">
                    <div className="navbar-start">
                      
                        <div className='flex  items-center'>
                            <img src={logo} className=" w-10 hidden md:flex  lg:w-20" alt="" />
                            <h1 className="font-bold md:text-3xl lg:text-5xl">SCHOLAR <span className='md:text-xl font-bold'>TRACK PRO</span></h1>
                        </div>

                    </div>

                    <div className="navbar-end flex gap-4 items-center">
                    <div className="dropdown">
                            <div tabIndex={0} onClick={()=>setIsOpen(!isOpen)} role="button" className="btn btn-ghost lg:hidden">
                            <AiOutlineMenu size={20}/>
                            </div>
                           {
                            isOpen &&  <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-[#1e172b] w-40 rounded-box z-[1] mt-3  p-2 shadow">
                           {
                            link
                           }
                        </ul>
                           }
                        </div>
                    <div className=" hidden lg:flex ">
                    <ul className="menu menu-horizontal gap-7  px-1">
                           {link}
                        </ul>
                       </div>

                       {
                        user && user?.email ? <div
                            className="user-photo relative "
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <img src={user?.photoURL} className='w-14 h-14 object-cover rounded-full' alt="User" />
                            {isHovered && <div className=' flex justify-center  absolute z-10    gap-3 rounded-xl shadow-md bg-gray-300 top-0 right-0 -left-5  w-fit p-2  flex-col'>
                                <span className="display-name lg:text-2xl text-start font-bold">{user?.displayName}</span>
                                <button onClick={handleLogOut} className=' btn btn-sm text-sm  mr-2 md:mr-4 bg-[#e63746] text-white hover:bg-white hover:text-black'>Logout</button></div>
                            }
                        </div> : <div className='flex gap-4'>
                        <Link to={'/login'}> <button className="btn btn-sm md:btn-md  bg-purple-500  md:rounded-full md:px-10 md:pb-1 border-none text-white font-bold rounded-lg 
          hover:bg-yellow-300 hover:text-black transition duration-300 text-center">Login</button></Link>
                            <Link to={'/signUp'} ><button className='btn hidden lg:flex btn-xs md:btn-md rounded-full  hover:bg-yellow-300 hover:text-black transition duration-300 text-center border-none px-5 font-bold'>Register</button></Link>
                        </div>
                    }
                   
                      
                    </div>
                </div>
            </Container>


        </div>
    );
};

export default Navbar;