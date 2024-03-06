import React from "react";
import FeatherIcon from "feather-icons-react";

const Footer = () => {
  return (
    <div className="w-full bgsecondary">
      <div className="container mx-auto ">
        <div className="ptpx50 pbpx50 flex sm-block gap-12">
          <div className="w-60 flex prpx20">
            <div className="w-50 prpx10">
              <div className="">
                <h6 className="fsize19 sm-fsize18 mtpx5 mbpx1 textwhite font-500">
                  ABOUT OUR CONSULTING
                </h6>
                <p className="fsize16 sm-fsize12 textgray mtpx26 mbpx1 font-500">
                  That started from this tropic port aboard this tiny ship today
                  still want by theam government they survive on up to thetre
                  east side to a deluxe as soldiers of artics fortune.
                </p>
                <div className="flex items-center mtpx28">
                  <FeatherIcon
                    icon="phone"
                    size="19"
                    className="flex textwhite"
                  />
                  <p className="textwhite fsize16 mlpx10">
                    Any Queries : (+1) 234 567 900
                  </p>
                </div>
              </div>
            </div>
            <div className="w-50 plpx10">
              <div className="">
                <h6 className="fsize19 sm-fsize18 mtpx5 mbpx1 textwhite font-500">
                  RECENT POSTS
                </h6>

                <div className="flex items-center bordb pbpx10 mtpx26">
                  <div className="w-20">
                    <img
                      src="https://html.creativegigstf.com/charles/images/blog/1.jpg"
                      alt="blogs"
                      className="footerimg rounded-10"
                    />
                  </div>
                  <div className="w-80 plpx15">
                    <h6 className="fsize17 sm-fsize12 textwhite mtpx1 mbpx1 font-500">
                      Till wanted by theam govern they survive as soldiers.
                    </h6>
                    <p className="fsize15 sm-fsize12 textgray mtpx6 mbpx1 font-500">
                      Feb 06, 2018
                    </p>
                  </div>
                </div>
                <div className="flex items-center bordb pbpx10 mtpx20">
                  <div className="w-20">
                    <img
                      src="https://html.creativegigstf.com/charles/images/blog/1.jpg"
                      alt="blogs"
                      className="footerimg rounded-10"
                    />
                  </div>
                  <div className="w-80 plpx15">
                    <h6 className="fsize17 sm-fsize12 textwhite mtpx1 mbpx1 font-500">
                      Till wanted by theam govern they survive as soldiers.
                    </h6>
                    <p className="fsize15 sm-fsize12 textgray mtpx6 mbpx1 font-500">
                      Feb 06, 2018
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-40 flex plpx20">
            <div className="w-50">
              <div className="">
                <h6 className="fsize19 sm-fsize18 mtpx5 mbpx1 textwhite font-500">
                  SOLUTIONS
                </h6>
                <div className="mtpx28">
                  <div className="flex items-center ">
                    <FeatherIcon
                      icon="circle"
                      size="15"
                      className="flex textfoot"
                    />
                    <p className="textfoot fsize15 mlpx10">
                      Travel and Aviation
                    </p>
                  </div>
                  <div className="flex items-center mtpx10">
                    <FeatherIcon
                      icon="circle"
                      size="15"
                      className="flex textfoot"
                    />
                    <p className="textfoot fsize15 mlpx10">Business Services</p>
                  </div>
                  <div className="flex items-center mtpx10">
                    <FeatherIcon
                      icon="circle"
                      size="15"
                      className="flex textfoot"
                    />
                    <p className="textfoot fsize15 mlpx10">Consumer Products</p>
                  </div>
                  <div className="flex items-center mtpx10">
                    <FeatherIcon
                      icon="circle"
                      size="15"
                      className="flex textfoot"
                    />
                    <p className="textfoot fsize15 mlpx10">
                      Financial Services
                    </p>
                  </div>
                  <div className="flex items-center mtpx10">
                    <FeatherIcon
                      icon="circle"
                      size="15"
                      className="flex textfoot"
                    />
                    <p className="textfoot fsize15 mlpx10">Software Research</p>
                  </div>
                  <div className="flex items-center mtpx10">
                    <FeatherIcon
                      icon="circle"
                      size="15"
                      className="flex textfoot"
                    />
                    <p className="textfoot fsize15 mlpx10">
                      Quality Resourcing
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-50">
              <div className="">
                <h6 className="fsize19 sm-fsize18 mtpx5 mbpx1 textwhite font-500">
                  NEWSLETTER
                </h6>
                <div className="mtpx26">
                  <div className="mtpx10">
                    <input
                      className="ptpx6 w-full pbpx6 input-bordb bgtransparent"
                      placeholder="Email Addres"
                    />
                  </div>
                  <div className="mtpx10">
                    <input
                      className="ptpx6 w-full pbpx6 input-bordb bgtransparent"
                      placeholder="Phone No."
                    />
                  </div>
                  <button className="border-0 cursor-pointer font-500 textprimary bgwhite rounded-5 ptpx12 pbpx12 sm-ptpx6 sm-pbpx6 sm-plpx20 sm-prpx20 plpx35 prpx35 mtpx30 fsize17 sm-fsize13">
                   Newsletter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ptpx20 pbpx20 bgprimary">
        <div className="container mx-auto">
          <div className="flex justify-between w-full">
            <p className="fsize16 textwhite font-500">
              © Copyrights 2018. All Rights Reserved.
            </p>
            <div className="flex items-center gap-4">
              <p className="fsize16 mlpx10 textwhite font-500">About</p>
              <p className="fsize16 mlpx10 textwhite font-500">Solutions</p>
              <p className="fsize16 mlpx10 textwhite font-500">FAQ's</p>
              <p className="fsize16 mlpx10 textwhite font-500">Contact</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
