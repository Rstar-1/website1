import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import React from 'react'

const SerDetails = () => {
  return (
    <div className="ptpx60 pbpx60">
      <div className="container mx-auto">
        <div className="flex w-full">
          <div className="w-70 mrpx30">
            <img
              src="https://html.creativegigstf.com/charles/images/home/20.jpg"
              alt="servdetailsimg"
              className="servdetails-img object-cover"
            />
            <h4 className="mtpx20 mbpx1 fsize30 textdark font-600">
              Business Services
            </h4>
            <p className="mtpx10 fsize18 textgray font-500">
              A tale of a fateful trip that started from this tropic port aboard
              this tiny ship today still wanted by the government apartment in
              the sky moving on up to the east side a family to explore strange
              new worlds to seek out new life and new civilizations to boldly go
              where no man has gone before you would see the biggest gift would
              be from me and the card attached would say thank you for being a
              friend.<br></br> <br></br> That this group would somehow form a
              family that's the way we all became the Brady Bunch apartment in
              the sky moving on up to the east side a family to explore strange
              new worlds. This tropic port aboard this tiny ship today still
              wanted by the government apartment in the sky moving on up to the
              east side a family to explore strange new worlds to seek out new
              life and new civilizations to boldly go where no man has gone
              before you would see the biggest gift would be from me and the
              card.
            </p>
            <div className="mtpx32">
              <h5 className="mtpx1 mbpx1 fsize24 textdark font-500">
                Company Presentation:
              </h5>
              <p className="mtpx10 fsize18 textgray font-500">
                That this group would somehow form a family that's the way we
                all became the Brady Bunch apartment in the sky moving on up to
                the east side a family to explore strange new worlds.
              </p>
              <div className="mtpx39 w-50">
                <div className="flex items-center mbpx27">
                  <div>
                    <img
                      src="https://html.creativegigstf.com/charles/images/icon/6.png"
                      alt="serv-logo"
                      className="serv-logo object-cover"
                    />
                  </div>
                  <div className="mlpx15">
                    <h5 className="mtpx1 mbpx1 fsize20 textdark font-500">
                      Technology
                    </h5>
                    <p className="mtpx10 fsize16 textgray font-500">
                      The Love Boat soon will be making another run plore
                      strange.
                    </p>
                  </div>
                </div>
                <div className="flex items-center mbpx27">
                  <div>
                    <img
                      src="https://html.creativegigstf.com/charles/images/icon/8.png"
                      alt="serv-logo"
                      className="serv-logo object-cover"
                    />
                  </div>
                  <div className="mlpx15">
                    <h5 className="mtpx1 mbpx1 fsize20 textdark font-500">
                      Innovation
                    </h5>
                    <p className="mtpx10 fsize16 textgray font-500">
                      The Love Boat soon will be making another run plore
                      strange.
                    </p>
                  </div>
                </div>
                <div className="flex items-center mbpx27">
                  <div>
                    <img
                      src="https://html.creativegigstf.com/charles/images/icon/9.png"
                      alt="serv-logo"
                      className="serv-logo object-cover"
                    />
                  </div>
                  <div className="mlpx15">
                    <h5 className="mtpx1 mbpx1 fsize20 textdark font-500">
                      Integration
                    </h5>
                    <p className="mtpx10 fsize16 textgray font-500">
                      The Love Boat soon will be making another run plore
                      strange.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-30 mlpx30">
            <h5 className="fsize24 sm-fsize18 mtpx5 mbpx1 textprimary font-500">
              Our Solutions
            </h5>
            <div className="mtpx20">
              <div className="border-primary mbpx10 p15 rounded-10 ">
                <p className="fsize20 textprimary font-500">
                  Travel And Aviation
                </p>
              </div>
              <div className="border-primary mbpx10 p15 rounded-10 ">
                <p className="fsize20 textdark font-500">Business Service</p>
              </div>
              <div className="border-primary mbpx10 p15 rounded-10 ">
                <p className="fsize20 textdark font-500">Customer Products</p>
              </div>
              <div className="border-primary mbpx10 p15 rounded-10 ">
                <p className="fsize20 textdark font-500">Financial Services</p>
              </div>
            </div>
            <div className="mtpx40">
              <h6 className="fsize24 sm-fsize18 mtpx5 mbpx1 textprimary font-500">
                Brouchers
              </h6>
              <div className="bgprimary mtpx20 flex mbpx10 p19 rounded-10 items-center">
                <FeatherIcon icon="file" size='18' className='textwhite' />
                <p className="fsize17 textwhite mlpx10 font-500">Downloaded File.pdf</p>
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
}

export default SerDetails
