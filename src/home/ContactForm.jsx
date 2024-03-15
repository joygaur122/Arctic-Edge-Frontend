import React, { useState } from 'react';
import "./contactform.css"

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log('Form submitted with data:', { name, email, phone, message });
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        
        <p></p>
        <a>Phone</a>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          <h1>Make an inquiry</h1>
          
          <input type="text" id="name" name="name" value={name} onChange={handleNameChange} 
          placeholder="name"
          />
        </label>
        <label>
          
          <input type="email" id="email" name="email" value={email} onChange={handleEmailChange}
          placeholder="email"
          />
        </label>
        <label>
          
          <input type="tel" id="phone" name="phone" value={phone} onChange={handlePhoneChange} 
          placeholder="phone"
          />
        </label>
        <label>
          
          <textarea id="message" name="message" value={message} onChange={handleMessageChange} 
          placeholder="message"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
