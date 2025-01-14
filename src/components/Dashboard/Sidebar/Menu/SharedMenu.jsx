import React from 'react';
import MenuItem from './MenuItem';
import { MdManageSearch, MdReviews } from 'react-icons/md';
import { IoMdSchool } from 'react-icons/io';
// import { LuLetterText } from 'react-icons/lu';


const SharedMenu = () => {
    return (
        <div>
             <MenuItem
              icon={MdReviews} label='Manage Review' address='/dashboard/manageReview'/>
              <MenuItem icon={IoMdSchool} label='Add ScholarShip' address='/dashboard/addScholarShip'/>
              <MenuItem icon={MdManageSearch} label='Manage ScholarShip' address='/dashboard/manageScholarShip'/>
              {/* <MenuItem icon={LuLetterText} label='Manage Applied Application' address='/dashboard/manageApplication'/> */}
        </div>
    );
};

export default SharedMenu;