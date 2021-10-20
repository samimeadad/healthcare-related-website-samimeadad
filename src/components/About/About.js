import React from 'react';
import AboutTop from './AboutTop';
import AboutUs from './AboutUs';

//component for about page
const About = () => {
    return (
        <div className="m-5">
            <AboutTop></AboutTop>
            <hr className="m-5 text-info" />
            <AboutUs></AboutUs>
            <hr className="m-5 text-info" />
        </div>
    );
};

export default About;