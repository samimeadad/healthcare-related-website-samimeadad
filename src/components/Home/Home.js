import React from 'react';
import Achievements from './Achievements';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner />
            <hr className="text-danger m-5" />
            <Achievements />
            <hr className="text-danger m-5" />
        </div >
    );
};

export default Home;