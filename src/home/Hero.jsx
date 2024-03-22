// Hero.jsx

import React from 'react';
import "./hero.css";
import ContactForm from "./ContactForm";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-left">
      <h1>Quality Heating & cooling<br/> Services For Orange County</h1>
      <p>
      With decades of experience in Heating and Cooling systems around Los Angeles, we have learned that  when we enter your home or business, we treat it as if it were our own. Our certified heating and cooling specialists will use our tried and true methods to solve your home or business problems. 
      </p>

      </div>
     <ContactForm/>
    </div>
  );
};

export default Hero;
