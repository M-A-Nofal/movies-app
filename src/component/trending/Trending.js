import React, { useState } from 'react';
import { trending } from '../../dummyData';
import HomeCard from '../homes/HomeCard';
import './trending.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SampleNextArrow = (props) => {
    const { onClick } = props
    return (
        <div className='control-btn' onClick={onClick}>
            <button className='next'>
            <i className='fa fa-chevron-right'></i>
            </button>
        </div>
    )
}

const SamplePrevArrow = (props) => {
    const { onClick } = props
    return (
        <div className='control-btn' onClick={onClick}>
            <button className='prev'>
            <i className='fa fa-chevron-left'></i>
            </button>
        </div>
    )
}

function Trending() {
    const [items , setItems] = useState(trending);

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
        <section className='trending'>
            <div className='homeContainer'>
            <Slider {...settings}>
            {items.map((item) => {
                return (
                    <HomeCard key={item.id} item={item} />
                )
            })}
            </Slider>
            </div>
        </section>
    </>
  )
  // return (
  //   <>
  //       <section className='trending'>
  //           <Home items={items}/>
  //       </section>
  //   </>
  // )
}

export default Trending