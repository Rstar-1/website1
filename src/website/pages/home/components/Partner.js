import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/swiper.min.css";

const Partner = () => {
    SwiperCore.use([Autoplay]);
  return (
    <div className="bg-f8faff ptpx20 pbpx20">
      <div className="container mx-auto">
        <div className="flex items-center w-full">
          <div className="w-30">
            <h6 className="fsize20 mtpx1 mbpx1 textdark">
              Our<br></br>Partner
            </h6>
          </div>
          <div className="w-70">
            <Swiper
              grabCursor={true}
              className="mySwiper"
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                1536: {
                  slidesPerView: 5,
                },
                1280: {
                  slidesPerView: 5,
                },
                1024: {
                  slidesPerView: 5,
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
                <div>
                  <img
                    src="https://html.creativegigstf.com/charles/images/logo/p-1.png"
                    alt="banner"
                    className="partner-img object-contain"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    src="https://html.creativegigstf.com/charles/images/logo/p-2.png"
                    alt="banner"
                    className="partner-img object-contain"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    src="https://html.creativegigstf.com/charles/images/logo/p-3.png"
                    alt="banner"
                    className="partner-img object-contain"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    src="https://html.creativegigstf.com/charles/images/logo/p-4.png"
                    alt="banner"
                    className="partner-img object-contain"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    src="https://html.creativegigstf.com/charles/images/logo/p-5.png"
                    alt="banner"
                    className="partner-img object-contain"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    src="https://html.creativegigstf.com/charles/images/logo/p-2.png"
                    alt="banner"
                    className="partner-img object-contain"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    src="https://html.creativegigstf.com/charles/images/logo/p-4.png"
                    alt="banner"
                    className="partner-img object-contain"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partner
