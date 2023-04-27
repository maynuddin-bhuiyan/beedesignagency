import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Images/Logo/logo.png";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="Navigation">
      <div className="NavigationLine"></div>
      <div className="Container">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid className="LogoImage" item xs={4}>
              <img src={logo} alt="" />
            </Grid>
            <Grid className="TextItam" item xs={8}>
              <ul>
                <Link style={{ textDecoration: "none" }} to="/home">
                  <li> Home</li>
                </Link>
                <li> Services </li> <ArrowDropDownIcon />
                <li> Team</li>
                <li> Blogs</li>
                <Link style={{ textDecoration: "none" }} to="/aboutUs">
                  <li> About Us</li>
                </Link>
                <li> Contact</li>
              </ul>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Navigation;
