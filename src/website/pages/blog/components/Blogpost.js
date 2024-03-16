import React from "react";

const Blogpost = () => {
  return (
    <div className="ptpx60 pbpx60">
      <div className="container mx-auto">
        <div className="flex w-full">
          <div className="w-70 mrpx30">
            <div className="mbpx40">
              <div className="relative blog-img">
                <img
                  src="https://html.creativegigstf.com/charles/images/home/20.jpg"
                  alt="servdetailsimg"
                  className="blog-img w-full filter-b6 rounded-10 flex object-cover"
                />
                <div className="absolute blog-img top-0 left-0 flex items-end">
                  <div className="p20">
                    <p className="textwhite fsize19 bgprimary ptpx4 pbpx4 plpx12 prpx12 rounded-5 font-500">
                      12/12/2023
                    </p>
                  </div>
                </div>
              </div>
              <h4 className="mtpx20 mbpx1 fsize30 textdark font-600">
                Business Services
              </h4>
              <p className="mtpx10 fsize18 textgray font-500">
                A tale of a fateful trip that started from this tropic port
                aboard this tiny ship today still wanted by the government
                apartment in the sky moving on up to the east side a family to
                explore strange new worlds to seek out new life and new
                civilizations to boldly go where no man has gone before you
                would see the biggest gift would be from me and the card
                attached would say thank you for being a friend.
              </p>
            </div>
            <div className="mbpx40">
              <div className="relative blog-img">
                <img
                  src="https://html.creativegigstf.com/charles/images/home/11.jpg"
                  alt="servdetailsimg"
                  className="blog-img w-full filter-b6 rounded-10 flex object-cover"
                />
                <div className="absolute blog-img top-0 left-0 flex items-end">
                  <div className="p20">
                    <p className="textwhite fsize19 bgprimary ptpx4 pbpx4 plpx12 prpx12 rounded-5 font-500">
                      12/12/2023
                    </p>
                  </div>
                </div>
              </div>
              <h4 className="mtpx20 mbpx1 fsize30 textdark font-600">
                Business Services
              </h4>
              <p className="mtpx10 fsize18 textgray font-500">
                A tale of a fateful trip that started from this tropic port
                aboard this tiny ship today still wanted by the government
                apartment in the sky moving on up to the east side a family to
                explore strange new worlds to seek out new life and new
                civilizations to boldly go where no man has gone before you
                would see the biggest gift would be from me and the card
                attached would say thank you for being a friend.
              </p>
            </div>
          </div>
          <div className="w-30 mlpx30">
            <div className="">
              <input placeholder="Search" className="w-full input-bordb" />
            </div>
            <h5 className="fsize24 sm-fsize18 mtpx20 mtpx5 mbpx1 textprimary font-500">
              Filter
            </h5>
            <div className="mtpx20 flex items-center gap-10 flex-wrap">
              <div className="bgprimary p7 rounded-5 cursor-pointer">
                <p className="fsize13 textwhite font-500">
                  Travel And Aviation
                </p>
              </div>
              <div className="border-primary p7 rounded-5 cursor-pointer">
                <p className="fsize13 textdark font-500"> Service</p>
              </div>
              <div className="border-primary p7 rounded-5 cursor-pointer">
                <p className="fsize13 textdark font-500">Business </p>
              </div>
              <div className="border-primary p7 rounded-5 cursor-pointer">
                <p className="fsize13 textdark font-500">Customer Products</p>
              </div>
              <div className="border-primary p7 rounded-5 cursor-pointer">
                <p className="fsize13 textdark font-500">Financial Services</p>
              </div>
            </div>
            <div className="mtpx40">
              <h6 className="fsize24 sm-fsize18 mtpx5 mbpx1 textprimary font-500">
                Contact Us
              </h6>
              <div className="mtpx10">
                <div className="mtpx10">
                  <input
                    className="ptpx6 w-full pbpx6 input-bordb"
                    placeholder="Email Addres"
                  />
                </div>
                <div className="mtpx10">
                  <input
                    className="ptpx6 w-full pbpx6 input-bordb"
                    placeholder="Phone No."
                  />
                </div>
                <div className="mtpx10">
                  <textarea
                    className="ptpx6 w-full pbpx6 text-bordb"
                    placeholder="Message"
                    rows={4}
                  ></textarea>
                </div>
                <button className="border-0 cursor-pointer font-500 bgprimary textwhite rounded-5 ptpx12 pbpx12 sm-ptpx6 sm-pbpx6 sm-plpx20 sm-prpx20 plpx35 prpx35 mtpx30 fsize17 sm-fsize13">
                  Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogpost;
