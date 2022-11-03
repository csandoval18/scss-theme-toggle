import React from 'react'
import 'swiper/css'
import Hero from "./Hero"

interface HomeProps { }

const Home: React.FC<HomeProps> = () => {
  return (
    <div className='home-container'>
      <Hero />
    </div>
  )
}

export default Home
