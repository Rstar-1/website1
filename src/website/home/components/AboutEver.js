import React from "react";
import Fade from "react-reveal/Fade";
import about from "../../../assets/bed.png"

const AboutEver = () => {

  return (
    <div className="bgwhite ptpx60 pbpx60 sm-ptpx20 sm-pbpx20">
      <div className="container mx-auto">
        <div className="flex sm-block w-full gap-12">
          <div className="w-50 sm-w-full sticky top-0 aboutleft-img sm-relative prpx40 sm-prpx1">
            <img
              src={about}
              alt="about"
              className="w-full aboutleft-img object-contain"
            />
          </div>
          <div className="w-50 sm-mtpx20 sm-w-full">
            <Fade right>
              <h2 className="textprimary font-600  mbpx1 mtpx1 fsize32 sm-fsize20">
                Statement of quality assurance
              </h2>
              <p className="textforth mlpx5 sm-fsize13 sm-mtpx5 font-500 text-left sm-text-justify fsize14">
                KRISHI ENGINEERING WORKS is totally committed to achieve the
                highest levels of quality in all its materials that we supply to
                our customers and if we are to succeed this objective must be
                shared by us.
              </p>
            </Fade>
            <Fade bottom>
              <div className="grid-cols-1 gap-12 mtpx20">
                <div className="bg-glass p17 sm-p10 rounded-5 flex sm-block items-center gap-12">
                  <h3 className="bgprimary ptpx10 pbpx10 prpx15 plpx15 textwhite w-max mtpx1 fsize23 sm-fsize16 mbpx1 rounded-5">
                    01
                  </h3>
                  <p className="textforth mlpx5 sm-fsize13 sm-mtpx5 font-500 text-left sm-text-justify fsize14">
                    Our customer judge us by the materials we supply and
                    therefore we must be totally committed in our outlook with
                    regard to quality.
                  </p>
                </div>
                <div className="bg-glass p17 sm-p10 rounded-5 flex sm-block items-center gap-12 mtpx10">
                  <h3 className="bgprimary ptpx10 pbpx10 prpx15 plpx15 textwhite w-max mtpx1 fsize23 sm-fsize16 mbpx1 rounded-5">
                    02
                  </h3>
                  <p className="textforth mlpx5 sm-fsize13 sm-mtpx5 font-500 text-left sm-text-justify fsize14">
                    All materials stocked are prime and purchased or imported
                    from reputed mills. Storage handling and packing are such
                    that materials reach customers in first class condition.
                  </p>
                </div>
                <div className="bg-glass p17 sm-p10 rounded-5 flex sm-block items-center gap-12 mtpx10">
                  <h3 className="bgprimary ptpx10 pbpx10 prpx15 plpx15 textwhite w-max mtpx1 fsize23 sm-fsize16 mbpx1 rounded-5">
                    03
                  </h3>
                  <p className="textforth mlpx5 sm-fsize13 sm-mtpx5 font-500 text-left sm-text-justify fsize14">
                    All materials are fully tracable
                  </p>
                </div>
                <div className="bg-glass p17 sm-p10 rounded-5 flex sm-block items-center gap-12 mtpx10">
                  <h3 className="bgprimary ptpx10 pbpx10 prpx15 plpx15 textwhite w-max mtpx1 fsize23 sm-fsize16 mbpx1 rounded-5">
                    04
                  </h3>
                  <p className="textforth mlpx5 sm-fsize13 sm-mtpx5 font-500 text-left sm-text-justify fsize14">
                    Please do not hesitate to contact us should you have any
                    querries
                  </p>
                </div>
                <div className="bg-glass p17 sm-p10 rounded-5 flex sm-block items-center gap-12 mtpx10">
                  <h3 className="bgprimary ptpx10 pbpx10 prpx15 plpx15 textwhite w-max mtpx1 fsize23 sm-fsize16 mbpx1 rounded-5">
                    05
                  </h3>
                  <p className="textforth mlpx5 sm-fsize13 sm-mtpx5 font-500 text-left sm-text-justify fsize14">
                    A General lndication of materials that we can offerfrom
                    ex-stock delivery is listed below. Details of all items are
                    listed in product range.
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

export default AboutEver;
