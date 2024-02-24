import React from "react";
//Pages
import Banner from "./components/Banner";
import ConnectEver from "../common/ConnectEver";
import Count from "../home/components/Count";
import Information from "./components/Information";
import Points from "./components/Points";
import Knowmore from "./components/Knowmore";

const Plans = () => {
  return (
    <div>
      <Banner />
      <Points />
      <Information />
      <Knowmore />
      <Count />
      <ConnectEver />
    </div>
  );
};

export default Plans;
