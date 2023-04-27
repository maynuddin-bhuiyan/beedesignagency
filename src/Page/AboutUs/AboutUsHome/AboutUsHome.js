import React from 'react';
import Footer from '../../Shared/Footer/Footer';
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
            <Footer />
        </div>
    );
};

export default AboutUsHome;