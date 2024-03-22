import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

import "./contactinformation.css";

const ContactInformation = () => {
  return (
    <div className="contact-info">
     <h2 className="contact-heading">Contact Us</h2>
  <p className="team-availability">Our team is available 24 hours for emergency services. Call us today with any questions you have and our team will be ready to help you!</p>
  <p className="address"><FaMapMarkerAlt /> 616 Avalon Blvd. Wilmington CA 90744</p>
  <p className="phone"><FaPhone /> <a href="tel:424-342-9034">424-342-9034</a></p>
  <p className="email"><FaEnvelope /> <a href="mailto:cacomfortinc@yahoo.com">cacomfortinc@yahoo.com</a></p>
  <p className="availability"><FaClock /> Available 24 Hours</p>
      <p>Follow Us</p>
      <div className="social-icons">
        <a href="https://www.instagram.com"><FaInstagram /></a>
        <a href="https://www.facebook.com"><FaFacebook /></a>
        <a href="https://www.twitter.com"><FaTwitter /></a>
        <a href="https://www.linkedin.com"><FaLinkedin /></a>
      </div>
 
    </div>
  );
};

export default ContactInformation;
