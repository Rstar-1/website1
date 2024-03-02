import React from "react";
import Fade from "react-reveal/Fade";
import banner from "../../../assets/banner.png";
import { NavLink } from "react-router-dom";

const Banner = () => {

  return (
    <div className="relative banner-img">
      <img
        src={banner}
        alt="banner"
        className="w-full filter-b6 banner-img object-cover"
      />
      <div className="absolute top-0 text-left left-0 flex items-center justify-start banner-img">
        <div className="w-full container mx-auto">
          <Fade bottom cascade>
            <div>
              <p className="textwhite font-400 sm-text-justify mbpx1 fsize20 sm-fsize15">
                Quality with Integnity
              </p>
              <h3 className="textwhite font-600 sm-font-400 mtpx9 sm-mtpx6 leading mbpx1 fsize40 sm-fsize20">
                Krishi Engineering Works
              </h3>

              <div className="flex items-center justify-start gap-10">
                <NavLink to="/connect">
                  <button className="border-0 cursor-pointer font-500 textprimary rounded-5 ptpx12 pbpx12 sm-ptpx6 sm-pbpx6 sm-plpx20 sm-prpx20 plpx35 prpx35 mtpx20 fsize16 sm-fsize13 bgwhite">
                    Connect
                  </button>
                </NavLink>
                <NavLink to="/about">
                  <button className="cursor-pointer font-500 rounded-5 ptpx12 pbpx12 sm-ptpx6 sm-pbpx6 sm-plpx20 sm-prpx20 plpx35 prpx35 mtpx20 fsize16 sm-fsize13 whitebtn">
                    About Us
                  </button>
                </NavLink>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Banner;
