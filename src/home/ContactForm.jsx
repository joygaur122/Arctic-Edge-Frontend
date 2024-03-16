import React, { useState } from 'react';
import "./contactform.css"
import axios from "axios";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/contact/submit-contact", {
        name,
        email,
        phone,
        message,
      });
      alert("Message sent successfully!");
      console.log(response.data);
    } catch (error) {
      if (error.response) {
       
        console.error(error.response.data);
        console.error(error.response.status);
        console.error(error.response.headers);
        alert("Error sending message: " + error.response.status);
      } else if (error.request) {

        console.error(error.request);
        alert("Error sending message: No response received");
      } else {

        console.error('Error', error.message);
        alert("Error sending message: " + error.message);
      }
    }
  }

  return (
    <div className="contact-container">
      <div className="contact-info">
        <p></p>
        <a>Phone</a>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          <h1>Make an inquiry</h1>
          <input 
            type="text"
            id="name" 
            name="name" 
            value={name} 
            onChange={(event) => setName(event.target.value)}
            placeholder="name"
          />
        </label>
        <label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={email} 
            onChange={(event) => setEmail(event.target.value)}
            placeholder="email"
          />
        </label>
        <label>
          <input 
            type="tel" 
            id="phone" 
            name="phone"
            value={phone} 
            onChange={(event) => setPhone(event.target.value)} 
            placeholder="phone"
          />
        </label>
        <label>
          <textarea 
            id="message" 
            name="message"
            value={message} 
            onChange={(event) => setMessage(event.target.value)} 
            placeholder="message"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
