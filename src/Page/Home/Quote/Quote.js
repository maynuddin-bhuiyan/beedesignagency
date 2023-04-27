import { TextField } from "@mui/material";
import React from "react";
import { Form } from "react-bootstrap";
import QuoteBanner from "../../../Images/Quote/QuoteBannr.png";
import "./Quote.css";

const Quote = () => {
  return (
    <div className="Quote">
      <img src={QuoteBanner} alt="" />
      <div className="Container">
        <div className="QuoteFrom">
          <h1>Request A Quote</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et
          </p>
          <form>
            <TextField
              className="Input"
              id="standard-basic"
              label="First Name"
              type="text"
              variant="standard"
            />
            <TextField
              className="Input"
              id="standard-basic"
              label="Last Name"
              type="text"
              variant="standard"
            />
            <Form.Select
              className="SelectMenu"
              aria-label="Default select example"
            >
              <option>Services</option>
              <option value="1">Image Post Production</option>
              <option value="2">Logo &#38; Brand Identity</option>
              <option value="3">UI/UX Design</option>
              <option value="4">Web Development</option>
              <option value="5">SEO Services</option>
              <option value="6">Content Writing</option>
            </Form.Select>
            <TextField
              className="Input"
              id="standard-basic"
              label="Phone Number"
              type="number"
              variant="standard"
            />
            <textarea placeholder="Message" className="Textarea"></textarea>
            <button type="submit">Request A Quote</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Quote;
