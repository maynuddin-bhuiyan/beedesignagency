import React from 'react';
import { Box, Button, Grid } from '@mui/material';
import bannerImage from '../../../Images/Banner/BannerImage.png';
import Navigation from '../../Shared/Navigation/Navigation';

import './AboutUsBanner.css';


const AboutUsBanner = () => {
    return (
        <div className='AboutUsBanner'>
            <Box className='Container' sx={{ flexGrow: 1 }}>
                <Navigation />
                <Grid style={{ padding: "167px 0" }} container spacing={2}>
                    <Grid className="AboutUsText" item xs={7}>
                        <h3>The first option the tool allows you</h3>
                        <h2>You can choose as many or as few as you'd like these blank, the </h2>
                        <p>Another option you have is choosing the number of syllables of the words or the word length of the randomized words. There are also ways to further refine these by choosing the</p>
                        <Button className='AboutUsButton'>Get Start</Button>
                    </Grid>
                    <Grid className='AboutUsImage' item xs={5}>
                        <img src={bannerImage} alt="" />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default AboutUsBanner;