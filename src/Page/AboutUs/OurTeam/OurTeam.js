import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";

import RaselAhmed from "../../../Images/AboutPage/OurPoliceIcon/ImageEditor.jpg";
import Shuvo from "../../../Images/AboutPage/OurPoliceIcon/OurPoliceOne.png";
import Shahoriar from "../../../Images/AboutPage/OurPoliceIcon/Sorad.jpg";
import Afsar from "../../../Images/AboutPage/OurPoliceIcon/afser.jpg";
import Maynuddin from "../../../Images/AboutPage/OurPoliceIcon/profile_logo_LinkedIn_61229744.webp";

import "./OurTeam.css";

const OurTeam = () => {
  return (
    <div className="OurTeam">
      <div className="Container">
        <h2>Our Passionate Team</h2>
        <p className="HeadeText">
          This tool isn't a word creator, it is a word generator that will
          generate random words for a variety of activities or uses.
        </p>
        <div className="TeamMember">
          <div className="Member">
            <img src={RaselAhmed} alt="" />
            <h3>Robiul Islam</h3>
            <p>e-Commerce Photo Specialist</p>
            <LinkedInIcon />
          </div>

          <div className="Member">
            <img src={Maynuddin} alt="" />
            <h3>Maynuddin Bhuiyan</h3>
            <p>Frontend &amp; Backend Developer</p>
            <LinkedInIcon />
          </div>

          <div className="Member">
            <img src={Afsar} alt="" />
            <h3>Afsar Bhuiyan</h3>
            <p>
              Logo &amp; Branding <br /> Designer
            </p>
            <LinkedInIcon />
          </div>

          <div className="Member">
            <img src={Shahoriar} alt="" />
            <h3>Shahoriar Shourov</h3>
            <p>
              Ui/Ux Designer &amp; XD <br /> Expert
            </p>
            <LinkedInIcon />
          </div>

          <div className="Member">
            <img src={Shuvo} alt="" />
            <h3>Chris Hemsworth</h3>
            <p>
              Image Editor &amp; Figma <br /> Proficient
            </p>
            <LinkedInIcon />
          </div>

          <div className="Member">
            <img src={Shuvo} alt="" />
            <h3>Donald Trump</h3>
            <p>Adobe-Photoshop Experienced</p>
            <LinkedInIcon />
          </div>

          <div className="Member">
            <img src={Shuvo} alt="" />
            <h3>Tony Stark</h3>
            <p>
              Product Packaging <br /> Sagacious
            </p>
            <LinkedInIcon />
          </div>

          <div className="Member">
            <img src={Shuvo} alt="" />
            <h3>Robert Evans</h3>
            <p>Adobe-Photoshop Specialist</p>
            <LinkedInIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
