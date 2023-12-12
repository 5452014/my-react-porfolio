import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import AbountContent from '../components/AbountContent'
const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2  heading="ABOUT." text="I'm Friendly Front-End Developer"/>
      <AbountContent />
      <Footer />
    </div>
  )
}

export default About