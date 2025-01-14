import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../../components/LoadingSpinner';

const Profile = () => {
    const {user, loading}=useAuth()
    if(loading) return <LoadingSpinner/>
    return (
        <div className="h-screen flex items-center justify-center bg-[#1A1423] text-white p-6">
            <div className="bg-[#2C2536] p-8 rounded-lg shadow-lg w-full max-w-md text-center border border-gray-600">
                <h1 className="text-4xl font-bold mb-6">My Profile</h1>

                {/* User Image */}
                {user.photoURL ? (
                    <img
                        src={user.photoURL}
                        alt="User Avatar"
                        className="w-32 h-32 rounded-full mx-auto border-4 border-purple-500 shadow-lg"
                    />
                ) : (
                    <div className="w-32 h-32 rounded-full bg-gray-600 flex items-center justify-center mx-auto text-2xl">
                        No Image
                    </div>
                )}
                  {user?.role && user?.role !== 'user' && (
                        <p><span className="font-semibold">Role:</span> {user?.role}</p>
                    )}

                {/* User Info Section */}
                <div className="mt-6 text-lg space-y-3">
                    <p><span className="font-semibold">Name:</span> {user.displayName || "N/A"}</p>
                    <p className='text-xs lg:text-lg'><span className="font-semibold ">Email:</span> {user.email}</p>

                    {/* Role Display Logic */}
                  
                </div>

                {/* Action Button */}
                <Link to={'/dashboard/updateProfile'}>
                <button
                    className="mt-6 bg-purple-600 hover:bg-yellow-400 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
                >
                   Update Profile
                </button>
                </Link>
            </div>
        </div>
    );
};

export default Profile;