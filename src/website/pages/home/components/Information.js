import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper.min.css";

const Information = () => {
  return (
    <div>
      <Swiper
        grabCursor={true}
        className="mySwiper"
        breakpoints={{
          1536: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 4,
          },
          991: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 1.1,
          },
          425: {
            slidesPerView: 1.1,
          },
          325: {
            slidesPerView: 1.1,
          },
        }}
      >
        <SwiperSlide>
          <div className="bg-fa info-hei">
            <div className="plpx20 prpx20">
              <div className="flex justify-center">
                <img
                  src="https://html.creativegigstf.com/charles/images/icon/1.png"
                  alt="banner"
                  className="info-img object-contain"
                />
              </div>
              <h3 className="fsize25 mtpx5 mbpx1 text-center textdark font-600">
                Customer Insights
              </h3>
              <hr className="info-hr mtpx10" />
              <p className="text-center mtpx17 fsize17 textgray">
                The east side to a deluxe apartment in move on up to the east
                side
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-f6f6f6 info-hei">
            <div className="plpx20 prpx20">
              <div className="flex justify-center">
                <img
                  src="https://html.creativegigstf.com/charles/images/icon/3.png"
                  alt="banner"
                  className="info-img object-contain"
                />
              </div>
              <h3 className="fsize25 mtpx5 mbpx1 text-center textdark font-600">
                Customer Insights
              </h3>
              <hr className="info-hr mtpx10" />
              <p className="text-center mtpx17 fsize17 textgray">
                The east side to a deluxe apartment in move on up to the east
                side
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-efefef info-hei">
            <div className="plpx20 prpx20">
              <div className="flex justify-center">
                <img
                  src="https://html.creativegigstf.com/charles/images/icon/2.png"
                  alt="banner"
                  className="info-img object-contain"
                />
              </div>
              <h3 className="fsize25 mtpx5 mbpx1 text-center textdark font-600">
                Customer Insights
              </h3>
              <hr className="info-hr mtpx10" />
              <p className="text-center mtpx17 fsize17 textgray">
                The east side to a deluxe apartment in move on up to the east
                side
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-e9e9e9 info-hei">
            <div className="plpx20 prpx20">
              <div className="flex justify-center">
                <img
                  src="https://html.creativegigstf.com/charles/images/icon/4.png"
                  alt="banner"
                  className="info-img object-contain"
                />
              </div>
              <h3 className="fsize25 mtpx5 mbpx1 text-center textdark font-600">
                Customer Insights
              </h3>
              <hr className="info-hr mtpx10" />
              <p className="text-center mtpx17 fsize17 textgray">
                The east side to a deluxe apartment in move on up to the east
                side
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Information
