import React from 'react';
import Achievements from './Achievements';
import Angels from './Angels';
import Banner from './Banner';
import PremiumDoctors from './PremiumDoctors';
import PremiumTreatments from './PremiumTreatments';

//component for home page
const Home = () => {
    return (
        <div>
            <Banner />
            <hr className="text-info m-5" />
            <Achievements />
            <hr className="text-info m-5" />
            <PremiumTreatments />
            <hr className="text-info m-5" />
            <PremiumDoctors />
            <hr className="text-info m-5" />
            <Angels></Angels>
            <hr className="text-info m-5" />
        </div >
    );
};

export default Home;