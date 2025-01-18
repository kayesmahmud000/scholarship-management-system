import React from 'react';
import Slider from '../../components/Home/Slider';
import LatestScholarships from '../../components/Home/LatestScholarships';
import ScholarshipsCountries from '../../components/Home/ScholarshipsCountries';
import FaQ from '../../components/Home/FaQ';

const Home = () => {
    return (
        <div>
          <Slider/>
          <LatestScholarships/>
          <ScholarshipsCountries/>
          <FaQ/>
        </div>
    );
};

export default Home;