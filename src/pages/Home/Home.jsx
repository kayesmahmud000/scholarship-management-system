import React from 'react';
import Slider from '../../components/Home/Slider';
import LatestScholarships from '../../components/Home/LatestScholarships';
import ScholarshipsCountries from '../../components/Home/ScholarshipsCountries';
import FaQ from '../../components/Home/FaQ';
import PageHelmet from '../../components/PageHelmet';
import ScholarshipCategory from '../../components/Home/scholarshipCategory';

const Home = () => {
    return (
        <div>
          <PageHelmet title={'Home | Scholar Track Pro'}/>
          <Slider/>
          <LatestScholarships/>
          <ScholarshipsCountries/>
          <ScholarshipCategory/>
          <FaQ/>
        </div>
    );
};

export default Home;