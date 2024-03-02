import React from "react";
import { NavLink } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="w-full bgforth ptpx40 pbpx40 sm-ptpx20 sm-pbpx20">
      <div className="flex sm-block justify-between gap-12 container mx-auto">
        <div className="footlogo">
          <img src={logo} alt="banner" className="footerimg object-contain" />
        </div>
        <div className="footcontent">
          <div className="grid-cols-4 sm-grid-cols-1 gap-12">
            <div className="sm-mtpx15">
              <h6 className="fsize19 sm-fsize18 mtpx5 mbpx1 textwhite font-500">
                Know More
              </h6>
              <hr className="foot-hr" />
              <div className="mtpx20 mtpx8  ">
                <NavLink to="/about">
                  <p className="fsize15 sm-fsize12 textwhite mtpx5 mbpx1 font-500">
                    About Us
                  </p>
                </NavLink>
                <NavLink to="/gallery">
                  <p className="fsize15 sm-fsize12 textwhite mtpx5 mbpx1 font-500">
                    Gallery
                  </p>
                </NavLink>
              </div>
            </div>

            <div className="sm-mtpx15">
              <h6 className="fsize19 sm-fsize18 mtpx5 mbpx1 textwhite font-500">
                Our Services
              </h6>
              <hr className="foot-hr" />
              <div className="mtpx20 mtpx8">
                <NavLink to="/service">
                  <p className="fsize15 sm-fsize12 textwhite mtpx5 mbpx1 font-500">
                    Services
                  </p>
                </NavLink>
                <NavLink to="/connect">
                  <p className="fsize15 sm-fsize12 textwhite mtpx5 mbpx1 font-500">
                    Connect Us
                  </p>
                </NavLink>
              </div>
            </div>
            <div className="sm-mtpx15">
              <h6 className="fsize19 sm-fsize18 mtpx5 mbpx1 textwhite font-500">
                Help & Support
              </h6>
              <hr className="foot-hr" />
              <div className="mtpx20 mtpx8  ">
                <p className="fsize15 sm-fsize12 textwhite mtpx5 mbpx1 font-500">
                  Privacy Policy
                </p>
                <p className="fsize15 sm-fsize12 textwhite mtpx5 mbpx1 font-500">
                  Terms & Conditions
                </p>
                <p className="fsize15 sm-fsize12 textwhite mtpx5 mbpx1 font-500">
                  FAQ
                </p>
              </div>
            </div>

            <div className="sm-mtpx15">
              <h6 className="fsize19 sm-fsize20 mtpx5 mbpx1 textwhite font-500">
                Connect Us
              </h6>
              <hr className="foot-hr" />
              <div className="flex items-center gap-9 mtpx20 mtpx8  ">
                <div className="social-foot sm-mlpx6 flex items-center justify-center bgsecondary">
                  <FeatherIcon
                    icon="instagram"
                    size="18"
                    className="textwhite"
                  />
                </div>
                <div className="social-foot sm-mlpx6 flex items-center justify-center bgsecondary">
                  <FeatherIcon
                    icon="linkedin"
                    size="18"
                    className="textwhite"
                  />
                </div>
                <div className="social-foot sm-mlpx6 flex items-center justify-center bgsecondary">
                  <FeatherIcon icon="mail" size="18" className="textwhite" />
                </div>
                <div className="social-foot sm-mlpx6 flex items-center justify-center bgsecondary">
                  <FeatherIcon
                    icon="facebook"
                    size="18"
                    className="textwhite"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
