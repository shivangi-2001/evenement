import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "./Slider.css";
import photo1 from "../assets/1.jpg";
import photo2 from "../assets/2.jpg";
import photo3 from "../assets/3.jpg";
import photo4 from "../assets/w-3.jpg";
import photo5 from "../assets/w-1.jpg";

export default function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={photo1} alt="photo1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo2} alt="photo2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo3} alt="photo3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo4} alt="photo4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo5} alt="photo5" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
