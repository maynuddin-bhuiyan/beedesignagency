import React from 'react';
import {  Button, Grid } from '@mui/material';
import logo from '../../../Images/AboutUs/Logo.png';

import ProgressShadow from '../../../Images/Progress/ProgressShadow.png'






import './Progressive.css';
import Slider from 'react-slick';

const Progressive = () => {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };

      


    return (
        <div className='Progressive'>
         <div className="ProgressShadow">

<img src={ProgressShadow} alt="" />
          </div>
          
        <div  className='Container'>
           

            <Grid  container spacing={2}>
                <Grid className="ProgressiveImage" item xs={6}>
              


                </Grid>
                <Grid className='ProgressiveText' item xs={6}>
                <h3><img style={{ width: "20px", height: "20px" }} src={logo} alt="" /><span style={{ marginLeft: "13px" }}>OUR PROGRESS</span> </h3>
                    <h2>We are more than just a digital agency.</h2>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>

                    <Slider {...settings}> 
                  
            <h3  style={{height: "250px"}}>
                <div className="Skills-bar">
    <div className="bar">
        <div className="info">
            <span>Image Edit</span>
        </div>
        <div className="Progress-line image"><span></span></div>
    </div>


    <div className="bar">
        <div className="info">
            <span>Logo &amp;  Brand Identity</span>
        </div>
        <div className="Progress-line brand"><span></span></div>
    </div>



    <div className="bar">
        <div className="info">
            <span>UI/UX Design</span>
        </div>
        <div className="Progress-line uiUx"><span></span></div>
    </div>

</div></h3>

<h3><div className="Skills-bar">
    <div className="bar">
        <div className="info">
            <span>Web Development</span>
        </div>
        <div className="Progress-line web"><span></span></div>
    </div>


    <div className="bar">
        <div className="info">
            <span>SEO Services</span>
        </div>
        <div className="Progress-line seo"><span></span></div>
    </div>



    <div className="bar">
        <div className="info">
            <span>Content Writing</span>
        </div>
        <div className="Progress-line content"><span></span></div>
    </div>

</div></h3>
          




</Slider>
<Button className='ProgressiveButton'>Get Started</Button>









                   

                    

                    



                </Grid>
            </Grid>
            



        </div>
        </div>
    );
};

export default Progressive;