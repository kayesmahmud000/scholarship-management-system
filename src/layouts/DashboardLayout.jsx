import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Dashboard/Sidebar/Sidebar';

const DashboardLayout = () => {
    return (
        <div>
            <div className='relative min-h-screen md:flex '>
                {/* Left Side: Sidebar Component */}
                <Sidebar />
                {/* Right Side: Dashboard Dynamic Content */}
                <div className='flex-1  md:ml-80'>
                    <div className='p-5'>
                        {/* Outlet for dynamic contents */}
                        <Outlet />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;