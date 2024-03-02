"use client"

// Import necessary libraries
import React, { Component } from "react";
import Slider from "react-slick";
import PartaiCarousel from "../homepage/PartaiCarousel"
import carouselPartyData from "../homepage/CarouselPartyData";

// Define and export the AutoPlaySlider component
export default class SliderCards extends Component {
  render() {
    // Settings for the Slider component
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 2,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 4000,
      cssEase: "",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };

    // Render the AutoPlaySlider component
    return (
      <>
      <div className=" mb-12">
        <div className='my-4 font-sans flex flex-col justify-center text-center'>
        <h1 className=' text-primary text-3xl'>Cek Partai Pilihanmu Disini!</h1>
        <h5 className=' text-abu'>Bijaklah dalam memilih</h5>
        
        </div>
        <Slider {...settings}>
          {/* Map over carouselData and render ImageCarousel for each item */}
          {carouselPartyData.map((item, index) => (
            <div key={index} >
              <PartaiCarousel src={item.src} alt={item.alt}/>
            </div>
          ))}
        </Slider>
      </div>
      </>
    );
  }
}
