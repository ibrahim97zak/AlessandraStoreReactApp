import React from 'react'
import Slider from "react-slick";
import style from './Header.module.css'
function Header() {
  
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    
    

  };
  return (
    <>

    <div className={`${style.slider}`}>


        <Slider {...settings}>
          <div className={`${style.imgFrame}`}>
           <div className={`${style.imgOne}`}></div>
          </div>
          <div className={`${style.imgFrame}`}>
          <div className={`${style.imgTwo} vh-100`}></div>
          </div>
          <div className={`${style.imgFrame}`}>
          <div className={`${style.imgThree} vh-100`}></div>
          </div>
          </Slider>
      </div>

    
    </>
  )
}

export default Header