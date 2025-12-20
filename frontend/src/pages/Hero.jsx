import React from 'react'
import './Hero.css'
import InfiniteScroll from '../components/InfiniteScroll'
import Box from '../components/Box'
import Team from '../components/Team'
import Choose from '../components/Choose'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import HeroC from '../components/HeroC'

const Hero = () => {
  return (
    <>
        <HeroC/>
        <InfiniteScroll/>
        <Box/>
        <Cards/>
        <Choose/>
        <Team/>
        <Footer/>
    </>
  )
}

export default Hero

