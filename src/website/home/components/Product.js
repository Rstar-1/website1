import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper.min.css";

const Product = () => {
  const products = [
    {
      id: 1,
      img: "https://5.imimg.com/data5/SELLER/Default/2023/8/334829028/ER/ME/RT/21925577/430-stainless-steel-sheet-250x250.jpg",
    },
    {
      id: 2,
      img: "https://5.imimg.com/data5/SELLER/Default/2023/8/334830010/DU/PH/EN/21925577/441-stainless-steel-plate-250x250.jpg",
    },
    {
      id: 3,
      img: "https://5.imimg.com/data5/SELLER/Default/2023/7/329443384/ST/FZ/EZ/21925577/439-stainless-steel-coil-250x250.jpg",
    },
    {
      id: 4,
      img: "https://5.imimg.com/data5/SELLER/Default/2023/7/329454665/KG/SV/VL/21925577/409-stainless-steel-flat-bar-250x250.jpg",
    },
    {
      id: 5,
      img: "https://5.imimg.com/data5/SELLER/Default/2023/7/329451501/KI/FW/NR/21925577/304-stainless-steel-circle-250x250.jpg",
    },
    {
      id: 6,
      img: "https://5.imimg.com/data5/FR/RX/MY-21925577/303-stainless-steel-round-bar-250x250.jpg",
    },
    {
      id: 7,
      img: "https://5.imimg.com/data5/SELLER/Default/2023/7/329446682/TS/CA/SB/21925577/304-stainless-steel-pipe-250x250.jpg",
    },
    {
      id: 8,
      img: "https://5.imimg.com/data5/SELLER/Default/2023/7/329435828/BB/CA/VA/21925577/aluminium-alloy-sheet-250x250.jpg",
    },
  ];
  return (
    <div className="bg-fa ptpx60 pbpx60 sm-ptpx20 sm-pbpx20" id="product">
      <div className="container mx-auto">
        <h4 className="textforth font-600 mtpx1 mbpx1 fsize35 sm-fsize23">
          Our Products
        </h4>
        <Swiper
          grabCursor={true}
          loop
          className="mySwiper mtpx30"
          breakpoints={{
            1536: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            991: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 1.1,
              spaceBetween: 30,
            },
            425: {
              slidesPerView: 1.1,
              spaceBetween: 30,
            },
            325: {
              slidesPerView: 1.1,
              spaceBetween: 30,
            },
          }}
        >
          {products.map((e) => (
            <SwiperSlide>
              <div className="">
                <img
                  src={e.img}
                  alt="product"
                  className="product-img"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Product;
