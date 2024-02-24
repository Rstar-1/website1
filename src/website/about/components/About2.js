import React from "react";
import Fade from "react-reveal/Fade";
import about from "../../../assets/about2.png";

const About2 = () => {
  return (
    <div className="bg-fa ptpx60 pbpx60 sm-ptpx20 sm-pbpx20">
      <div className="container mx-auto">
        <div className="flex sm-block items-center w-full sm-mtpx1 gap-12">
          <div className="w-50 sm-mtpx30 sm-w-full prpx20 sm-prpx1">
            <img src={about} alt="about2" className="about2-img object-cover" />
          </div>

          <div className="w-50 sm-w-full plpx20 sm-plpx1">
            <Fade right>
              <h2 className="textforth font-600 mtpx20 mbpx1 fsize35 sm-fsize20">
                Why Us?
              </h2>
              <p className="textgray font-500 mtpx13 text-left sm-text-justify mbpx1 fsize16 sm-fsize13">
                By providing quality product and having experienced knowledge of
                the market, we have been able to attain huge client base.
              </p>
              <div className="grid-cols-2 sm-grid-cols-1 gap-12 mtpx18">
                <div className="flex items-center gap-2 sm-items-start">
                  <div className="bgprimary dot rounded-full"></div>
                  <p className="fsize14 sm-fsize14 textforth mlpx6 w-90">
                    In-depth industry knowledge
                  </p>
                </div>
                <div className="flex items-center gap-2 sm-items-start">
                  <div className="bgprimary dot rounded-full"></div>
                  <p className="fsize14 sm-fsize14 textforth mlpx6 w-90">
                    Timely completion of orders
                  </p>
                </div>
                <div className="flex items-center gap-2 sm-items-start">
                  <div className="bgprimary dot rounded-full"></div>
                  <p className="fsize14 sm-fsize14 textforth mlpx6 w-90">
                    Transparent business dealings
                  </p>
                </div>
                <div className="flex items-center gap-2 sm-items-start">
                  <div className="bgprimary dot rounded-full"></div>
                  <p className="fsize14 sm-fsize14 textforth mlpx6 w-90">
                    Qualified and trained team of professionals
                  </p>
                </div>
                <div className="flex items-center gap-2 sm-items-start">
                  <div className="bgprimary dot rounded-full"></div>
                  <p className="fsize14 sm-fsize14 textforth mlpx6 w-90">
                    Market leading prices
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
