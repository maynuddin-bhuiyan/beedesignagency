import React from 'react';
import AboutUsBanner from '../AboutUsBanner/AboutUsBanner';
import OurPolice from '../OurPolice/OurPolice';
import OurTeam from '../OurTeam/OurTeam';
import OurValues from '../OurValues/OurValues';

const AboutUsHome = () => {
    return (
        <div>
            <AboutUsBanner />
            <OurPolice />
            <OurValues />
            <OurTeam />
        </div>
    );
};

export default AboutUsHome;