"use client"

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ImageCarousel from "../homepage/ImageCarousel";

import carouselData from "../json/CarouselData"

const CarouselContainer = () => {
  const settings = {
    dots: true,
    infinite: true, // Pertimbangkan untuk mengubah ini menjadi false jika masalah berlanjut
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1024, // screens larger than 1024px
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768, // screens between 768px and 1024px
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480, // screens smaller than 768px
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
      // ... Responsif settings ...
    ]
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {carouselData.map((data, index) => (
          <div key={data.id || index}> {/* Pastikan 'data.id' adalah unik */}
            <ImageCarousel {...data} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselContainer;
