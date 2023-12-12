import React from 'react'
import Navbar from '../components/Navbar';
import HeroImg2 from '../components/HeroImg2';
import Footer from '../components/Footer'

import Work from '../components/Work';
const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Projects." text="Some of my
      most recent Work" />
      <Work/>
    
      <Footer />
    </div>
  )
}

export default Project