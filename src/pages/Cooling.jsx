import React from 'react'
import coolingImage from "../assets/fin.jpg"
import "./cooling.css"
import CoolServices from "../cooling/CoolServices"
import ImageCooling from "../cooling/ImageCooling"
import Conf from "../about/Conf"
import Footer from "../home/Footer"

const Cooling = () => {
  return (
    <div className="cooling-container">
      <img src={coolingImage} lt="Ceating Page" className="cooling-image" />
      <div className="cooling-content">
        <h1>Cooling Services</h1>
      </div>
     <CoolServices/>
     <ImageCooling/>
     <Conf/>
     <Footer/>
    </div>
      )
    }
    
    export default Cooling