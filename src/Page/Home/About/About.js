import { Box, Grid } from "@mui/material";
import React from "react";
import aboutCreative from "../../../Images/AboutUs/AboutCreative.png";
import aboutHigh from "../../../Images/AboutUs/AboutHigh.png";
import aboutPixel from "../../../Images/AboutUs/AboutPixel.png";
import creativeIcon from "../../../Images/AboutUs/CreativeIcon.png";
import highIcon from "../../../Images/AboutUs/HighIcon.png";
import logo from "../../../Images/AboutUs/Logo.png";
import pixcalIcon from "../../../Images/AboutUs/PixelIcon.png";
import "./About.css";

const About = () => {
  return (
    <div>
      <Box className="Container" sx={{ flexGrow: 1 }}>
        <Grid style={{ padding: "100px 0" }} container spacing={2}>
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
          <Grid className="AboutText" item xs={6}>
            <h3>
              <img
                style={{ width: "20px", height: "20px" }}
                src={logo}
                alt=""
              />
              <span style={{ marginLeft: "13px" }}>ABOUT US</span>{" "}
            </h3>
            <h2>We are more than just a digital agency.</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            </p>
            <div className="AboutBox">
              <div className="Design">
                <img src={pixcalIcon} alt="" />
                <h4>
                  PIXEL <br /> PERFECT
                </h4>
              </div>
              <div className="Design">
                <img src={creativeIcon} alt="" />
                <h4>CREATIVE DESIGN</h4>
              </div>
              <div className="Design">
                <img src={highIcon} alt="" />
                <h4>HIGH PERFORMANCE</h4>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default About;
