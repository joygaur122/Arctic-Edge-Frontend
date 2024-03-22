import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import heroImage from '../assets/home.jpg';
import "./home.css";
import Hero from "../home/Hero";
import Services from "../home/Services";
import OurServices from "../home/OurServices"
import Learn from "../home/Learn"
import Footer from "../home/Footer";

const Home = () => {
  const navigate = useNavigate(); 

  const navigateToAppointment = () => {
    navigate('/appointment'); 
  };

  return (
    <div>
      <section className="container">
        <img
          src={heroImage}
          alt="California Comfort"
          className="home-image"
        />

        <div className="home-content">
          <h2>California Comfort Heating and Air Conditioning</h2>
          <h1>The Right Team For Your <br/>Home & Business</h1>
          <p>
            Our team of dedicated Heating and Cooling Specialists have decades of experience in Residential and Commercial.
          </p>
          <button className="home-button" onClick={navigateToAppointment}>Get Free Estimate</button>
        </div>
      </section>

      <Hero />
      <Services/>
      <OurServices/>
      <Learn/>
      <Footer/>
    </div>
  );
};

export default Home;
