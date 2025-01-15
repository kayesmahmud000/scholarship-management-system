import React from 'react';
import MenuItem from './MenuItem';
import { MdManageSearch, MdReviews } from 'react-icons/md';
import { IoMdSchool } from 'react-icons/io';
import { SlEnvolopeLetter } from 'react-icons/sl';
// import { LuLetterText } from 'react-icons/lu';


const SharedMenu = () => {
    return (
        <div>
             <MenuItem
              icon={MdReviews} label='Manage Review' address='/dashboard/manageReview'/>
              <MenuItem icon={IoMdSchool} label='Add Scholarship' address='/dashboard/addScholarShip'/>
              <MenuItem icon={MdManageSearch} label='Manage Scholarship' address='/dashboard/manageScholarShip'/>
              <MenuItem
                icon={SlEnvolopeLetter}
                label='All applied Scholarship'
                address='/dashboard/appliedScholarship'
              />  
              {/* <MenuItem icon={LuLetterText} label='Manage Applied Application' address='/dashboard/manageApplication'/> */}
        </div>
    );
};

export default SharedMenu;