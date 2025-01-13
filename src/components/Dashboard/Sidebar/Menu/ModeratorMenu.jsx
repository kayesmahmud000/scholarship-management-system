import React from 'react';
import MenuItem from './MenuItem';
import { SlEnvolopeLetter } from 'react-icons/sl';

const ModeratorMenu = () => {
    return (
        <>
           <MenuItem
                icon={SlEnvolopeLetter}
                label='All applied Scholarship'
                address='/dashboard/appliedScholarship'
              />  
        </>
    );
};

export default ModeratorMenu;