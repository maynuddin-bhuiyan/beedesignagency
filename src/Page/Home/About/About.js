import React from 'react';
import { Box, Button, Grid } from '@mui/material';
import aboutHigh from '../../../Images/AboutUs/AboutHigh.png'
import aboutCreative from '../../../Images/AboutUs/AboutCreative.png'
import aboutPixel from '../../../Images/AboutUs/AboutPixel.png';
import logo from '../../../Images/AboutUs/Logo.png';



import './About.css';

const About = () => {
    return (
        <div>
            <Box className='Container' sx={{ flexGrow: 1 }}>            
                <Grid style={{padding: "100px 0"}} container spacing={2}>
                    
                    <Grid className="AboutImage" item xs={6}>
                        <div className="FullImage">
                            <img src={aboutHigh} alt="" />

                        </div>
                        
                        <div className="HafeImages">

                            <div className="BigImag">

                            <img src={aboutCreative} alt="" />
                            </div>
                            <div className="SmallImag">

                            <img src={aboutPixel} alt="" />
                            </div>

                        </div>


                    </Grid>

                    <Grid className='AboutText' item xs={6}>
                        <h3><img style={{width: "21px", height: "24px"}} src={logo} alt="" /><span>ABOUT US</span> </h3>



                            
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default About;