import React from 'react';
import "./SwiperImg.css";
// import pic from "../pic.png"
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css"
import {Autoplay, Pagination, Navigation} from "swiper";
const SwiperImg = () => {
  return (
    <>
    <div style={{ width:"100%",height:"100%", overflow:"hidden"}}>
      <Swiper centeredSlides={true}
        autoplay={{
          delay:2500,
          disableOnInteraction:false
        }}
        navigation={true}
        modules={[ Autoplay, Pagination,Navigation ]}
        style={{marginTop:"10px"}}>
        <SwiperSlide>
          <img style={{width:"100vw", height:"280px"}} src='https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/d5e050dc3ec05bf3.jpg?q=50' alt="img"/>
        </SwiperSlide>

        <SwiperSlide>
          <img style={{width:"100vw", height:"280px"}} src='https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/56126c5fd881b9d7.jpg?q=50' alt='img'/>
        </SwiperSlide>

        <SwiperSlide>
          <img style={{width:"100vw", height:"280px"}} src='https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/7838292c8d5d2dd6.jpg?q=50' alt='img'/>
        </SwiperSlide>
      </Swiper>
      {/* <img src={pic} alt='img'/> */}
    </div>
    </>
  )
}

export default SwiperImg
