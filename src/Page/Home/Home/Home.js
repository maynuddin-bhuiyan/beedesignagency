import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Progressive from '../Slider/Progressive';


const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Services />
            <Progressive />
        </div>
    );
};

export default Home;