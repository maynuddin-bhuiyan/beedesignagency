import React from 'react';
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";

const TestimonialDetail = ({testiMonialDetail}) => {
    const {name, address, description, img} = testiMonialDetail;
    console.log("testiMonialDetail"+testiMonialDetail)
    return (
        <Swiper
        spaceBetween={20}        
        slidesPerView={3}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
        <div class="item">
            <div class="shadow-effect">
                <img src={img} className='img-circle'/>
                <h3>MR TEDDY</h3>
                 <h4>Manager</h4>
                <p>{description}</p>
            </div>
                   </div>
        </SwiperSlide>
        </Swiper>

    );
};

export default TestimonialDetail;