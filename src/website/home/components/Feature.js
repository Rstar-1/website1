import React from "react";
import Fade from "react-reveal/Fade";
import feature from "../../../assets/side1.jpg";

const Feature = () => {
  return (
    <div className="relative feature-img">
      <img
        src={feature}
        alt="feature"
        className="w-full filter-b5 feature-img object-cover"
      />
      <div className="absolute top-0 flex items-center left-0  feature-img">
        <div className="container mx-auto w-full">
          <div className="w-full">
            <Fade bottom cascade>
              <h2 className="textwhite font-600 sm-font-400 mtpx1 sm-text-justify mbpx1 fsize40 sm-fsize19">
                Stainless Steel Sheet
              </h2>
              <p className="textwhite font-400 mtpx9 leading mbpx1 fsize19 sm-fsize13">
                We are a leading Wholesale Trader of 430 Stainless Steel Sheet,
                441 Stainless Steel Sheet, 409 Stainless Steel Sheet, 316
                Stainless Steel Sheet, 409M Stainless Steel Sheet and 410S
                Stainless Steel Sheet from Mumbai, India.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
