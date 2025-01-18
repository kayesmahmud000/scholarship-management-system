import React from 'react';
import MenuItem from './MenuItem';
import { FaUserCog } from 'react-icons/fa';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';


const AdminMenu = () => {
    return (
        <>
            <MenuItem
                icon={TbBrandGoogleAnalytics}
                label='Analytics'
                address='/dashboard'
            />

            <MenuItem
                icon={FaUserCog}

                label='Manage User'
                address='/dashboard/mangeUser'
            />

        </>
    );
};

export default AdminMenu;