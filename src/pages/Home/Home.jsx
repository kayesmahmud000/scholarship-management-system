import React from 'react';
import Slider from '../../components/Home/Slider';
import LatestScholarships from '../../components/Home/LatestScholarships';
import ScholarshipsCountries from '../../components/Home/ScholarshipsCountries';
import FaQ from '../../components/Home/FaQ';
import PageHelmet from '../../components/PageHelmet';
import ScholarshipCategory from '../../components/Home/scholarshipCategory';
import SubjectCategory from '../../components/Home/SubjectCategory';
import ApplicationProcess from '../../components/Home/ApplicationProcess ';

const Home = () => {
    return (
        <div>
          <PageHelmet title={'Home | Scholar Track Pro'}/>
          <Slider/>
          <LatestScholarships/>
          <ScholarshipsCountries/>
          <ScholarshipCategory/>
          <SubjectCategory/>
        <ApplicationProcess/>
          <FaQ/>
        </div>
    );
};

export default Home;