import React from "react";
import Fade from "react-reveal/Fade";
import about from "../../../assets/about1.png";

const About1 = () => {

  return (
    <div className="bgwhite ptpx60 pbpx60 sm-ptpx20 sm-pbpx20">
      <div className="container mx-auto">
        <div className="flex sm-block items-center w-full sm-mtpx1 gap-12">
          <div className="w-50 sm-w-full prpx20 sm-prpx1">
            <Fade left>
              <h2 className="textforth font-600 mtpx20 mbpx1 fsize35 sm-fsize20">
               About Us
              </h2>
              <p className="textgray font-500 mtpx13 text-left sm-text-justify mbpx1 fsize16 sm-fsize13">
                Established in the year 2011 at Mumbai, Maharashtra, We “Krishi
                Engineering Works” are a Sole Proprietorship based firm, engaged
                as the foremost Wholesale Trader of Stainless Steel Flat Bar,
                Stainless Steel Circle, Stainless Steel Coil, etc. Our products
                are high in demand due to their premium quality and affordable
                prices. Furthermore, we ensure to timely deliver these products
                to our clients, through this, we have gained a huge clients base
                in the market.
              </p>
            </Fade>
          </div>
          <div className="w-50 sm-mtpx30 sm-w-full plpx20 sm-plpx1">
            <img src={about} alt="about2" className="about1-img object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;
