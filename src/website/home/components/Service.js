import React from "react";
import Fade from "react-reveal/Fade";

const Service = () => {
  const servicecard = [
    {
      title: "GRADES",
      description:
        "We offer wide range of Femitic / Martensite / Austenitic Stainless Steels in various grades as ASTM, SAE & AISI 301, 303, 304, 304L, 316, 316L, 321, 309, 310, 310S, 410, 410S, 420, 409S, 420, 409M, 430 etc. For your various different applications.",
    },
    {
      title: "HOT ROLLED (HR) AND COLD ROLLED (CR)",
      description:
        "We offer you in HR and CR materials. In HR we offer finishes as mill finish No. a (Hot RolledAnnealed Finish NO.1 A & P and in CR we have finishes as 2D, 2B, BA, Finish No.3, Finish No.4, (popularly known as mat finish or Hairline finish), plastic coated sheets etc.",
    },
    {
      title: "DECOILED TO LENGTHS:",
      description:
        " We provide sheets in Coils for processing to length. We can cut lengths as per your requirments",
    },
    {
      title: "SHEARING FACILITIES:",
      description:
        "We offer you shearing facilities from '10 mm width to 1500 mm width & Coils of upto 9 tonnes & above. Sheets also are sheared as per your sizes. Rewinding of coils is also made available",
    },
    {
      title: "SHIMS:",
      description:
        "We do have shims from 0.32 mm to 0.005 mm in soft, half hard materials in grades as 304, 304L, 316, 316L etc. For your various purpose to obtain desired hardness materials can be tempered for you.",
    },
    {
      title: "WIRES:",
      description: "We stock wires in soft, half hard, full hard & in grades as ASTM & AlSl 304, 304L, 316, 316L 310 etc. from 7 swg to 50 swg.",
    },
  ];

  return (
    <div className="bg-fa ptpx60 pbpx60 sm-ptpx30 sm-pbpx30">
      <div className="container mx-auto">
        <h4 className="textprimary font-600 mtpx1 mbpx1 fsize30 sm-fsize18">
          Product Range (STAINLESS)
        </h4>
        <div className="grid-cols-2 sm-grid-cols-1 items-start mtpx50 sm-mtpx20 gap-12">
          {servicecard.map((e) => (
            <Fade top cascade>
              <div className="bg-ec sm-mtpx12 service-card p40 sm-p20 rounded-5">
                <h5 className="textforth font-600 sm-font-400 sm-fsize14 mtpx1 mbpx1 fsize22">{e.title}</h5>
                <p className="textgray font-500 mtpx5 text-left sm-text-justify mbpx1 fsize17 sm-fsize13">{e.description}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
