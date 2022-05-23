import React from 'react';
import logo from '../../../Images/Logo/logo.png';
import {  Grid } from '@mui/material';
import { Box } from '@mui/system';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import './Navigation.css';


const Navigation = () => {
    return (
        <div className="Container">
    <Box className="Navigation" sx={{ flexGrow: 1 }}>
      <Grid  container spacing={2}>
          <Grid className='LogoImage' item xs={4}>
          <img  src={logo} alt="" />
  </Grid>
  <Grid className="TextItam" item xs={8}>
  
                <ul>
                    <li> Home</li>
                    <li> Services  </li> <ArrowDropDownIcon />
                    <li> Team</li>
                    <li> Blogs</li>
                    <li> About Us</li>
                    <li> Contact</li>
                </ul>

               
  </Grid>
  </Grid>
  </Box>
  </div>

           
            
       
    );
};

export default Navigation;