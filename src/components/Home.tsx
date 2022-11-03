import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

interface HomeProps { }

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="home-container">
      <div className="hero">
        <Swiper loop={true}>
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Home