"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    arrows: false,
    customPaging: function(i:any) {
        return (
          <div className="text-black mr-2 pr-2 text-transparent">.</div>
        );
      },
    appendDots: (dots:any) => (
      <ul className="">
        {dots.map((dot:any, index:any) => (
          <li
            key={index}
            className={`!mx-2 rounded-full cursor-pointer ${
              dot.props.className.includes('slick-active') ? 'bg-primary/70' : 'bg-secondary/25'
            }`}
          >
            {dot}
          </li>
        ))}
      </ul>
    ),
  };

  return (
    <div className="">
      <Slider {...settings}>
        {images?.map((image: any, index: number) => (
          <div key={index} className="h-[400px]">
            <Image
              src={image.imageUrl}
              alt={`Slide ${index + 1}`}
              width={1080}
              height={720}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
