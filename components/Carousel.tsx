"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import './Carousel.css';

interface CarouselProps {
  images: any;
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
  };

  return (
    <div className="carousel-container bg-white">
      <Slider {...settings}>
        {images?.map((image:any, index:number) => (
          <div key={index} className="carousel-slide">
            <Image src={image.imageUrl} alt={`Slide ${index + 1}`} width={1080} height={720} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
