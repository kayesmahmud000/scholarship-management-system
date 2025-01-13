import React from 'react';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
            <div  className="pt-24 min-h-[calc(100vh)]">
            <Outlet/>
            </div>
           
        </div>
    );
};

export default DashboardLayout;