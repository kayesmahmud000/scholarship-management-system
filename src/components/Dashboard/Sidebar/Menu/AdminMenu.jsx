import React from 'react';
import MenuItem from './MenuItem';
import { FaUserCog } from 'react-icons/fa';


const AdminMenu = () => {
    return (
        <>
             <MenuItem
                icon={FaUserCog}
                label='Manage User'
                address='/dashboard'
              />
             
        </>
    );
};

export default AdminMenu;