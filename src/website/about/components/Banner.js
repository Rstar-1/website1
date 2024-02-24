import React from "react";
import RubberBand from "react-reveal/RubberBand";
import about from "../../../assets/about.png";

const Banner = () => {
  return (
    <div className="relative h-banner">
      <img
        src={about}
        alt="about"
        className="w-full filter-b5 h-banner object-cover"
      />
      <div className="absolute top-0 text-center left-0 flex items-center justify-center h-banner">
        <div className="w-70 sm-w-full sm-prpx4 sm-plpx4">
          <RubberBand>
            <h2 className="fsize45 mtpx1 mbpx1 textwhite sm-fsize20 text-center font-600">
              About Us
            </h2>
          </RubberBand>
        </div>
      </div>
    </div>
  );
};

export default Banner;
