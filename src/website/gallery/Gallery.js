import React from "react";
//Pages
import Banner from "./components/Banner";
import Grid from "./components/Grid";
import Count from "../home/components/Count";
import ConnectEver from "../common/ConnectEver";

const Gallery = () => {
  return (
    <div>
      <Banner />
      <Grid />
      <Count />
      <ConnectEver />
    </div>
  );
};

export default Gallery;
