import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "./Card";
import axios from "axios";

export const FreeBook = () => {
  const [book , setBook] = useState([])
  useEffect(()=>{
    const getBook = async () => {
      try{
        const res = await axios.get("http://localhost:4001/book")
        setBook(res.data)
      }catch(err){
        console.log(err)
      }
    } 
    getBook()
  },[])
  const filterBook = book.filter((book) => book.catagory === "free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1328,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="pb-5 max-w-screen-2xl container mx-auto md:px-20 px-4 bg-slate-200 text-slate-900 dark:bg-slate-900 dark:text-white">
        <h1 className="text-2xl font-bold pb-2">Free books</h1>
        <p className="pb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
          doloribus in atque officia minima error! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Modi omnis ad officiis.
        </p>
        <div className="slider-container py-4 ">
          <Slider {...settings}>
            {filterBook.map((item) => <Card item={item} key={item.id} />)}
          </Slider>
        </div>
      </div>
    </>
  );
};
