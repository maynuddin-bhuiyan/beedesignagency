import React from "react";
import "./OurPolice.css";

import OurPoliceIcon from "../../../Images/AboutPage/OurPoliceIcon/OurPoliceOne.png";

const OurPolice = () => {
  return (
    <div className="OurPolice">
      <div className="Container">
        <h2>This our Police</h2>
        <p>
          Welcome to the website. If you're here, you're likely looking to find
          random words. Random Word Generator is the perfect tool to help you do
          this.
        </p>

        <div className="AllCared">
          <div className="PoliceCard">
            <img src={OurPoliceIcon} alt="" />
            <h4>Welcome to the website.</h4>
          </div>

          <div className="PoliceCard">
            <img src={OurPoliceIcon} alt="" />
            <h4>Welcome to the website.</h4>
          </div>

          <div className="PoliceCard">
            <img src={OurPoliceIcon} alt="" />
            <h4>Welcome to the website.</h4>
          </div>

          <div className="PoliceCard">
            <img src={OurPoliceIcon} alt="" />
            <h4>Welcome to the website.</h4>
          </div>

          <div className="PoliceCard">
            <img src={OurPoliceIcon} alt="" />
            <h4>Welcome to the website.</h4>
          </div>

          <div className="PoliceCard">
            <img src={OurPoliceIcon} alt="" />
            <h4>Welcome to the website.</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPolice;
