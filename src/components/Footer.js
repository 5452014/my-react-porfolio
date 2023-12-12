import "./FooterStyle.css"

import React from 'react';
import {FaHome, FaPhone,FaMailBulk, FaFacebook, FaTwitter, FaLinkedin} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
    <div className="footer-container">
       <div className="left">
       <div className="location">
     <FaHome size={20} 
     style={{ color: '#fff', marginRight: "2rem" }} />
     <div> <p>k.R.M Society</p>
       <p>India,</p>
       </div>
       </div>   
       <div className="phone">
       <h4>
        <FaPhone 
        size={20} 
      style={{color:'#fff',
      marginRight:"2rem"}} /> 
      +91 88793 45898
      </h4>
      </div>
       
         <div className="email">
           <h4> 
           <Link to="nadeemshaikh24280@gmail.com">
           <FaMailBulk 
           size={20}
            style={{ color: '#fff',
             marginRight: "2rem" }} />
         nadeemshaikh24280@gmail.com</Link>
         </h4>
        </div>           
        </div>    
                                    
       
    <div className="right">
    <h4>  About Me  </h4>
   <p>This is Nadeem Shaikh .
    Bachlor of Engineer in Electronics & Telecom.
    Although  my background is related from EXtc Feild
    But, I have Good Understanding in React.js .</p>
     <div className="social" >
        <FaFacebook 
            size={30}
            style={{color:'#fff',
            marginRight:'1rem'}}
        />
         <FaTwitter
            size={30}
            style={{color: '#fff',              
            marginRight: '1rem'                  
             }}                  
             />    
             <Link to="https://www.linkedin.com/in/nadeem-shaikh-9b7b59281/"  >                     
            <FaLinkedin         
            size={30}              
             style={{color: '#fff',             
            marginRight: '1rem'                  
            }}                  
             />               
              </Link>                                 
     </div> 
   </div> 
    </div>
    </div>
  )
}

export default Footer