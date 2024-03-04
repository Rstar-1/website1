import React from "react";

const Quote = () => {
  return (
    <div className="ptpx60 pbpx60">
      <div className="container mx-auto">
        <h4 className="fsize40 mtpx1 mbpx1 text-center textdark font-900">
          FREE CONSULTATION
        </h4>
        <hr className="quote-hr mtpx10" />
        <p className="text-center mtpx17 fsize17 textgray">
          A tale of a fateful trip that started from this tropic port aboard
          this tiny ship today stillers
        </p>
        <div className="flex bgwhite d-shadow mtpx60 rounded-10 overflow-hidden">
          <div className="w-50">
            <img
              src="https://html.creativegigstf.com/charles/images/home/9.jpg"
              alt="quote"
              className="quote-img object-cover flex"
            />
          </div>
          <div className="w-50 p20">
            <div className="grid-cols-2 mtpx20 gap-12">
              <div className="mlpx10 mrpx10 mtpx20">
                <input
                  className="ptpx6 w-full pbpx6 input-bordb"
                  placeholder="First Name"
                />
              </div>
              <div className="mlpx10 mrpx10 mtpx20">
                <input
                  className="ptpx6 w-full pbpx6 input-bordb"
                  placeholder="Last Name"
                />
              </div>
              <div className="mlpx10 mrpx10 mtpx20">
                <input
                  className="ptpx6 w-full pbpx6 input-bordb"
                  placeholder="Email Addres"
                />
              </div>
              <div className="mlpx10 mrpx10 mtpx20">
                <input
                  className="ptpx6 w-full pbpx6 input-bordb"
                  placeholder="Phone No."
                />
              </div>
            </div>
            <div className="mlpx10 mrpx10 mtpx40">
              <textarea
                className="ptpx6 w-full pbpx6 input-bordb"
                placeholder="Message"
                rows={5}
              ></textarea>
            </div>
            <button className="border-0 cursor-pointer font-500 bgprimary textwhite rounded-5 ptpx12 pbpx12 sm-ptpx6 sm-pbpx6 sm-plpx20 sm-prpx20 plpx35 prpx35 mtpx30 fsize17 sm-fsize13">
             Get Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
