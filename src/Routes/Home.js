import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from "../components/HeroImg"
import Footer from '../components/Footer';
import Skill from '../components/Skill'
const Home = () => {
  return (
    <div>
   
      <Navbar />
      <HeroImg />
      <Skill/>
      <Footer />
    </div>
  )
}

export default Home