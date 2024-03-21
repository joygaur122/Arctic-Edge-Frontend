import React from 'react';
import "./ventilation.css";
import ventImage from "../assets/fin2.jpg"
import VentilationServices from "../ventilation/VentilaionServices"
import VentInfo from "../ventilation/VentInfo"
import Conf from "../about/Conf"
import Footer from "../home/Footer"

const Ventilation = () => {
    return (
        <div className="vent-container">
          <img src={ventImage} lt="Vent Page" className="vent-image" />
          <div className="vent-content">
            <h1>Ventilation Services</h1>
          </div>
        <VentilationServices/>
        <VentInfo/>
        <Conf/>
       <Footer/>
        </div>
          )
        }
        
export default Ventilation