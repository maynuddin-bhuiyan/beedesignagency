import { Box, Button, Grid } from "@mui/material";
import React from "react";
import bannerImage from "../../../Images/Banner/BannerImage.png";
import Navigation from "../../Shared/Navigation/Navigation";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="Banner">
      <Navigation />
      <Box className="Container" sx={{ flexGrow: 1 }}>
        <Grid style={{ padding: "167px 0" }} container spacing={2}>
          <Grid className="BannerText" item xs={7}>
            <h3>
              WE ARE <span className="DefultColor">BEE DESIGN</span>
            </h3>
            <h2>
              We have come to solve your{" "}
              <span className="DefultColor">Business </span>{" "}
              <div className="Line"></div>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            </p>
            <Button className="ButtonBanner">Get Started</Button>
          </Grid>
          <Grid className="BannerImage" item xs={5}>
            <img src={bannerImage} alt="" />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Banner;
