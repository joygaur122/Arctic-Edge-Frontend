import React from 'react';
import apptImage from "../assets/appt.jpg";
import "./appointment.css";
import Contact from "../contact/ContactInformation";
import ContactForm from "../home/ContactForm";
import Footer from "../home/Footer"

const Appointment = () => {
    return (
        <div className="appt-container">
          <img src={apptImage} alt="Appt Page" className="appt-image" />
          <div className="appt-content">
            <h1>Contact Us</h1>
          </div>
          <Contact />
          <Footer/>
        </div>
    );
};

export default Appointment;
