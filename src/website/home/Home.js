import React from "react";
// Pages
import Banner from "./components/Banner";
import Product from "./components/Product";
import Testimonial from "./components/Testimonial";
import AboutEver from "./components/AboutEver";
import Service from "./components/Service";
import Count from "./components/Count";
import ConnectEver from "../common/ConnectEver";
import Feature from "./components/Feature";

const Home = () => {

  return (
    <div>
      <Banner />
      <AboutEver />
      <Product />
      <Feature />
      <Service /> 
      <Testimonial />
      <Count />
      <ConnectEver />
    </div>
  );
};

export default Home;
