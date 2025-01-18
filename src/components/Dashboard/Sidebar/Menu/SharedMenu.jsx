import React from 'react';
import MenuItem from './MenuItem';
import { MdManageSearch, MdReviews } from 'react-icons/md';
import { IoMdSchool } from 'react-icons/io';
import { SlEnvolopeLetter } from 'react-icons/sl';
import useRole from '../../../../hooks/useRole';
// import { LuLetterText } from 'react-icons/lu';


const SharedMenu = () => {
  const [role]=useRole()
    return (
        <div>
            {
              role==='moderator'&& <> <MenuItem
              icon={MdReviews} label='All reviews' address='/dashboard/manageReview'/>
              <MenuItem icon={IoMdSchool} label='Add Scholarship' address='/dashboard/addScholarShip'/>
              <MenuItem icon={MdManageSearch} label='Manage Scholarship' address='/dashboard/manageScholarShip'/>
              <MenuItem
                icon={SlEnvolopeLetter}
                label='All applied Scholarship'
                address='/dashboard/appliedScholarship'
              />  </>
            }
            {
              role==='admin'&& <> <MenuItem
              icon={MdReviews} label='Manage Review' address='/dashboard/manageReview'/>
              <MenuItem icon={IoMdSchool} label='Add Scholarship' address='/dashboard/addScholarShip'/>
              <MenuItem icon={MdManageSearch} label='Manage Scholarship' address='/dashboard/manageScholarShip'/>
              <MenuItem
                icon={SlEnvolopeLetter}
                label='Manage Applied Application'
                address='/dashboard/appliedScholarship'
              />  </>
            }
           
        </div>
    );
};

export default SharedMenu;