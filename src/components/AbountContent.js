import "./AboutContentStyle.css"
import React from 'react';
import react1 from "../assets/react1.jpg"
import react2 from "../assets/react2.webp"
import {Link} from "react-router-dom";

function AbountContent() {
  return (
    <div className="about"> 
      <div className="left">
        <h1>Who Am I?</h1>
        <p>I'm a React Front-End Developer.
        I Created responsive secure Website</p>
        <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack-top">
            <img className="img" src={react1} alt="react-img"/>
          </div>   
          <div className="img-stack-bottom">
              <img className="img" src={react2} alt="react-img" />
         </div>   
        </div>
      </div>
    </div>
  )
}

export default AbountContent