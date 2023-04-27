import React from "react";
import logo from "../../../Images/AboutUs/Logo.png";
import "./WeWork.css";

import image1 from "../../../Images/WeWork/Group 4458.svg";
import image2 from "../../../Images/WeWork/Group 4459.svg";
import image3 from "../../../Images/WeWork/Group 4460.svg";
import image4 from "../../../Images/WeWork/Group 4461.svg";
import image5 from "../../../Images/WeWork/Group 4462.svg";
import image6 from "../../../Images/WeWork/Group 4463.svg";
import image7 from "../../../Images/WeWork/Group 4464.svg";

const WeWork = () => {
  return (
    <div className="WeWork">
      <div className="Container">
        <div className="header">
          <img
            style={{ width: "20px", height: "20px", marginTop: "-7px" }}
            src={logo}
            alt=""
          />
          <h3>WORKING PROCESS </h3>
        </div>
        <h2>How We Work</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem
        </p>
        <div className="Work">
          <div className="WeDo">
            <img src={image1} alt="" />
            <p>1. Requirement Gathering</p>
          </div>
          <div className="WeDo">
            <img src={image2} alt="" />
            <p>2. UI/UX Design</p>
          </div>
          <div className="WeDo">
            <img src={image3} alt="" />
            <p>3. Prototype </p>
          </div>
          <div className="WeDo">
            <img src={image4} alt="" />
            <p>4. Development</p>
          </div>         
          <div className="WeDo">
            <img src={image5} alt="" />
            <p>5. Quality Assurance</p>
          </div>
          <div className="WeDo">
            <img src={image6} alt="" />
            <p>6. Deployment</p>
          </div>
          <div className="WeDo">
            <img src={image7} alt="" />
            <p>7. Support &#38; Maintenance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeWork;
