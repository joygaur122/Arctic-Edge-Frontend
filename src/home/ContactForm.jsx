import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

import "./contactform.css"; // Assuming you have a separate CSS file for styling

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => { // Add async keyword for asynchronous Axios call
    event.preventDefault();
    try {
      // Send form data to the server using Axios
      await axios.post("http://localhost:5000/contact/submit-contact", {
        name,
        email,
        phone,
        message,
      });
      setIsSubmitted(true); // Update isSubmitted state after successful submission
    } catch (error) {
      console.error('Error:', error.message);
      alert('Error sending message: ' + error.message);
    }
  };

  return (
    <div className="contact-container">
      <div className="login">
        <div className="avatar"></div>
        <h2>Contact Us</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="textbox">
            <input 
              type="text" 
              placeholder="Name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </div>
          <div className="textbox">
            <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="textbox">
            <input 
              type="tel" 
              placeholder="Phone" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
            />
          </div>
          <div className="textbox">
            <textarea 
              placeholder="Message" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      {isSubmitted && (
        <div 
          className="thank-you-message"
          style={{
            backgroundColor: 'black',
            padding: '10px',
            marginBottom: '20px',
            color: 'green',
            fontWeight: '700',
            position: "relative",
            bottom: "520px",
            right: "220px"
            
          }}
        >
          Thank you! We will be in touch shortly.
        </div>
      )}
    </div>
  );
};

export default ContactForm;
