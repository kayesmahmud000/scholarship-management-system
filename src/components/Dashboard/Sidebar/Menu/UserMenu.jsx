import React from 'react';
import MenuItem from './MenuItem';
import { RxLetterCaseCapitalize } from 'react-icons/rx';
import { FcRating } from 'react-icons/fc';

const UserMenu = () => {
    return (
        <div>
            <MenuItem icon={RxLetterCaseCapitalize} label='My Application' address={'/dashboard/myApplication'}/>
            <MenuItem icon={FcRating} label='My Review' address={'/dashboard/myReview'}/>
        </div>
    );
};

export default UserMenu;