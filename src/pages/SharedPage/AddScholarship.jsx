import React from 'react';
// import { useForm } from 'react-hook-form';
import AddScholarFrom from '../../components/Form/AddScholarFrom';
import PageHelmet from '../../components/PageHelmet';
// import useAuth from '../../hooks/useAuth';

const AddScholarship = () => {
 
    return (
        <div data-aos="zoom-in"
        data-aos-duration="2000">
            <PageHelmet title={'Add Scholarships | Dashboard'}/>
           <AddScholarFrom ></AddScholarFrom>
        </div>
    );
};

export default AddScholarship;