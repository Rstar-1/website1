import React from "react";
import banner from "../../../../assets/banner.png";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative banner-img">
      <img
        src="https://html.creativegigstf.com/charles/images/home/slide-1.jpg?1709375557004"
        // src="https://html.creativegigstf.com/charles/images/home/slide-2.jpg?1709375558076"
        // src="https://html.creativegigstf.com/charles/images/home/slide-3.jpg?1709375570288"
        alt="banner"
        className="w-full banner-img object-cover"
      />
      <div className="absolute top-0 text-left left-0 flex items-center justify-start banner-img">
        <div className="w-full container mx-auto">
          <div className="w-50 ">
            <p className="textdark font-400 sm-text-justify mbpx1 fsize23 sm-fsize15">
              The government of fortune
            </p>
            <h3 className="textprimary font-800 sm-font-400 mtpx9 sm-mtpx6 leading mbpx1 fsize55 sm-fsize20">
              WE IMPROVE YOUR SALES EFFICIENCY
            </h3>

            <NavLink to="/connect">
              <button className="border-0 cursor-pointer font-500 bgprimary textwhite rounded-5 ptpx12 pbpx12 sm-ptpx6 sm-pbpx6 sm-plpx20 sm-prpx20 plpx35 prpx35 mtpx20 fsize17 sm-fsize13">
                Connect
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
