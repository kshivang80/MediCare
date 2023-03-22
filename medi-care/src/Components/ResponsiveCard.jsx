import React, { Component } from "react";

export let settings2 = {
  // dots: true,
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          focusOnSelect: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          //  dots: true
        },
      },
      {
        breakpoint: 900,
        settings: {
          focusOnSelect: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          focusOnSelect: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };