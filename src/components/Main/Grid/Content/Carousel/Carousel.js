import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import './Carousel.scss';
import img1 from '../../../../.././images/carousel/carousel1.jpg'
import img2 from '../../../../.././images/carousel/carousel2.jpg'
import img3 from '../../../../.././images/carousel/carousel3.jpg'
import img4 from '../../../../.././images/carousel/carousel4.jpg'
import img5 from '../../../../.././images/carousel/carousel5.jpg'
import img6 from '../../../../.././images/carousel/carousel6.jpg'
import img7 from '../../../../.././images/carousel/carousel7.jpg'
import img8 from '../../../../.././images/carousel/carousel8.jpg'

function Carousel() {

  const carousel = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <div className="carousel">
      <Swiper
        className="swiper"
        slidesPerView={3.45}
        spaceBetween={12}
        freeMode={true}
        modules={[FreeMode]}
      >
        {carousel.map(el => 
          <SwiperSlide
            className="swiper__slide"
            key={el}
          >
          <img
            className="swiper__img"
            src={el}
            alt={el}
          >
          </img>
        </SwiperSlide>
        )}
      </Swiper>
    </div>

  );
}

export default Carousel;