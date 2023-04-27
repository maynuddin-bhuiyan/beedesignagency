import React from "react";
import logo from "../../../Images/Footer/logo (2).svg";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import { Button } from "@mui/material";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="FooterLine"></div>
      <div className="Container">
        <div className="HeaderFooter">
          <img src={logo} alt="" />
          <p>Enter Your email For Newsletter</p>
          <input
            type="email"
            id="email"
            pattern=".+@globex\.com"
            placeholder="Your email"
            required
          />
          <Button className="FooterButton">Submit</Button>
        </div>
        <div className="SubHeaderFooter">
          <div className="SubFooter">
            <h4>Need Help?</h4>
            <ul>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>

              <p>youremail@email.com</p>
            </ul>
          </div>

          <div className="SubFooter">
            <h4>Customer Service</h4>
            <ul>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>

          <div className="SubFooter">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
            </ul>
          </div>

          <div className="SubFooter">
            <h4>Follow Us</h4>

            <div className="AllIcone">
              <div className="FooterIcon">
                <FacebookIcon style={{ fontSize: "30px" }} />
              </div>

              <div className="FooterIcon">
                <InstagramIcon style={{ fontSize: "30px" }} />
              </div>

              <div className="FooterIcon">
                <TwitterIcon style={{ fontSize: "30px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
