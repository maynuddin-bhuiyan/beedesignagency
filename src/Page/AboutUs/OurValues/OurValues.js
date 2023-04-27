import { Box, Grid } from "@mui/material";
import React from "react";

import logo from "../../../Images/AboutUs/Logo.png";

import "./OurValues.css";
const OurValues = () => {
  return (
    <div className="OurValues">
      <Box className="Container" sx={{ flexGrow: 1 }}>
        <Grid style={{ padding: "100px 0" }} container spacing={2}>
          <Grid className="OurValuesText" item xs={4}>
            <h3>
              <img
                style={{ width: "20px", height: "20px" }}
                src={logo}
                alt=""
              />
              <span style={{ marginLeft: "13px" }}>Our Values</span>{" "}
            </h3>
            <h2>More about us</h2>
          </Grid>
          <Grid item xs={8}>
            <div className="OurValuesCard">
              <div className="Card">
                <h4>Who are we?</h4>
                <p>
                  Welcome to the website. If you're here, you're likely looking
                  to find random words.
                </p>
              </div>

              <div className="Card">
                <h4>Who are we?</h4>
                <p>
                  Welcome to the website. If you're here, you're likely looking
                  to find random words.
                </p>
              </div>

              <div className="Card">
                <h4>Who are we?</h4>
                <p>
                  Welcome to the website. If you're here, you're likely looking
                  to find random words.
                </p>
              </div>

              <div className="Card">
                <h4>Who are we?</h4>
                <p>
                  Welcome to the website. If you're here, you're likely looking
                  to find random words.
                </p>
              </div>

              <div className="Card">
                <h4>Who are we?</h4>
                <p>
                  Welcome to the website. If you're here, you're likely looking
                  to find random words.
                </p>
              </div>

              <div className="Card">
                <h4>Who are we?</h4>
                <p>
                  Welcome to the website. If you're here, you're likely looking
                  to find random words.
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default OurValues;
