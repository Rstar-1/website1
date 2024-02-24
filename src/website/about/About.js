import React from "react";
//Pages
import Banner from "./components/Banner";
import About1 from "./components/About1";
import About2 from "./components/About2";
import ConnectEver from "../common/ConnectEver";
import Testimonial from "../home/components/Testimonial";
import Count from "../home/components/Count";
import Content from "./components/Content";

const About = () => {

  return (
    <div>
      <Banner />
      <About1 />
      <About2 />
      <Content />
      <Testimonial />
      <Count />
      <ConnectEver />
    </div>
  );
};

export default About;
