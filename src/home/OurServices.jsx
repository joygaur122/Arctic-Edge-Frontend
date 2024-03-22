import React from 'react';
import { Link } from 'react-router-dom';
import heatingImage from '../assets/heating3.jpg';
import coolingImage from '../assets/cooling.jpg';
import installationsImage from '../assets/installation.jpg';
import ventilationImage from '../assets/vent.jpg';
import './ourservices.css';

const serviceData = [
  {
    id: 1,
    title: 'Heating Systems',
    description: 'Whether Winter or Summer, let us make sure your water and air systems don’t get too cool. Our team works with almost all heating systems on the market today.',
    image: heatingImage,
    route: '/heating',
  },
  {
    id: 2,
    title: 'Cooling Systems',
    description: 'Don’t let the summer heat slow you down. Our team will maintain your existing AC Unit or replace and install a new energy-efficient unit in your home or business.',
    image: coolingImage,
    route: '/cooling', 
  },
  {
    id: 3,
    title: 'Installations',
    description: 'Already bought the system? No problem. Our team is here to professionally install any heating or cooling systems so you don’t have to worry about improper installation.',
    image: installationsImage,
    route: '/installations', 
  },
  {
    id: 4,
    title: 'Ventilation Services',
    description: 'We help with repair, maintenance, and installation of ventilation and Duct systems. Feel confident that your home heating and cooling systems are running optimally.',
    image: ventilationImage,
    route: '/ventilation', 
  },
];

const OurServices = () => {
  return (
    <div>
        <h1 className="services-title">Our Services</h1>
    <div className="ourservices-container">
       
      {serviceData.map((service) => (
        <Link to={service.route} key={service.id} className="ourservice-link">
          <div className="ourservice-card">
            <img src={service.image} alt={`Service ${service.id}`} className="ourservice-image" />
            <div className="ourservice-text">
              <h3 className="ourservice-title">{service.title}</h3>
              <p className="ourservice-description">{service.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
    </div>
  );
};

export default OurServices;
