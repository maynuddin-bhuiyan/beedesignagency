import { Box } from "@mui/material";
import React from "react";
import logo from "../../../Images/AboutUs/Logo.png";
import Production from "../../../Images/Services/Group 4426.svg";
import Logo from "../../../Images/Services/Group 4427.svg";
import UiUx from "../../../Images/Services/Group 4428.svg";
import Web from "../../../Images/Services/Group 4429.svg";
import SCO from "../../../Images/Services/Group 4430.svg";
import Content from "../../../Images/Services/Group 4431.svg";

import "./Services.css";

const Services = () => {
  return (
    <div className="Services">
      <div className="ServicesBanner"></div>
      <Box className="Container" sx={{ flexGrow: 1 }}>
        <h3>
          <img style={{ width: "20px", height: "20px" }} src={logo} alt="" />
          <span style={{ marginLeft: "13px" }}>SERVICES</span>{" "}
        </h3>
        <h2>We Offer Following SEO Services</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        </p>
        <div className="ServicesItamAll">
          <div className="ServicesItam" item xs={4}>
            <img src={Production} alt="" />
            <h4>Image Post Production</h4>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore
            </p>
          </div>
          <div className="ServicesItam" item xs={4}>
            <img src={Logo} alt="" />

            <h4>Logo &#38; Brand Identity</h4>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore
            </p>
          </div>
          <div className="ServicesItam" item xs={4}>
            <img src={UiUx} alt="" />
            <h4>UI/UX Design</h4>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore
            </p>
          </div>
          <div className="ServicesItam" item xs={4}>
            <img src={Web} alt="" />
            <h4>Web Development</h4>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore
            </p>
          </div>
          <div className="ServicesItam" item xs={4}>
            <img src={SCO} alt="" />
            <h4>SEO Services</h4>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore
            </p>
          </div>
          <div className="ServicesItam" item xs={4}>
            <img src={Content} alt="" />
            <h4>Content Writing</h4>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore
            </p>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Services;
