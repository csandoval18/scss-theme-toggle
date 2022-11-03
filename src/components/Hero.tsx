import React from 'react'
import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/swiper-bundle.css'
import 'swiper/swiper.min.css'
import '../style/Hero.scss'

interface HeroSwiperProps { }

const Hero: React.FC<HeroSwiperProps> = () => {
  return (
    <div className='hero'>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={30}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="hero-swiper"
      >
        <SwiperSlide className="slide slide-1">Slide 1</SwiperSlide>
        <SwiperSlide className="slide slide-2">Slide 2</SwiperSlide>
        <SwiperSlide className="slide slide-3">Slide 3</SwiperSlide>
        <SwiperSlide className="slide slide-4">Slide 4</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero