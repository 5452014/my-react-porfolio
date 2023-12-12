import "./HeroImgstyle.css";
import React from 'react';
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const HeroImg =()=> {
  return (
  <div className="hero">    
     <div className="mask">
    <img className="intro-img"
        src={IntroImg} alt="Into_img" />
         </div>
         <div className="content">
             <p> Hi, I'M NADEEM SHAIKH.</p>
             <h1>React Developer</h1>
        <div>
        <Link to="/project" className="btn">
        Projects
        </Link>
          <Link to="/contact" className="btn-light">
          Contacts
          </Link>
          </div>
          </div>
    </div>
  )
}

export default HeroImg