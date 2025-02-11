import React from 'react'
import HeroSection from './HeroSection'
import Slider from './Slider'
import AboutSection from './AboutSection'
// import Footer from './Footer'

const Home = () => {
  return (
    <div className="absolute inset-0 z-0 min-h-screen w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#3e6_100%)]">
      <HeroSection/>
      <Slider/>
      <AboutSection/>
      {/* <Footer/> */}
    </div>
  )
}

export default Home
