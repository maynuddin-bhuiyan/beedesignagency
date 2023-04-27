import React from "react";
import Footer from "../../Shared/Footer/Footer";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import Progressive from "../Progressive/Progressive";
import Question from "../Question/Question";
import Quote from "../Quote/Quote";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import WeWork from "../WeWork/WeWork";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Progressive />
      <Testimonial />
      <WeWork />
      <Quote />
      <Question />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
