import React from 'react'
import InfiniteScroll from '../components/InfiniteScroll'
import Box from '../components/Box'
import Team from '../components/Team'
import Choose from '../components/Choose'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import HeroC from '../components/HeroC'
import Navbar from '../components/Navbar'

const Hero = () => {
  return (
    <>
    <style>
      {`@import url('https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Cursive:wght@400..700&display=swap');
.heading{
    margin-left: 20px;
    margin-top: 40px;
}
.baseline{
    margin-right: 20px;
    font-family: "Edu NSW ACT Cursive", cursive;
}`}
    </style>
        <Navbar/>
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

