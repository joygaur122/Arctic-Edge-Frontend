import React, { useState } from 'react';
import axios from 'axios';
import './contactform.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/contact/submit-contact", {
        name,
        email,
        phone,
        message,
      });
      setIsSubmitted(true); 
      alert("Message sent successfully!");
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error.message);
      alert('Error sending message: ' + error.message);
    }
  };

  return (
    <div className="contact-container">
      {isSubmitted && (
        <div
          className="thank-you-message"
          style={{
            backgroundColor: '#f0f0f0',
            padding: '10px',
            marginBottom: '20px',
            color: '#1a1ea7;',
            fontWeight: 'bold',
          }}
        >
          Thank you! We will be in touch shortly.
        </div>
      )}
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
