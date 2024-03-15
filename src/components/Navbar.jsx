import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from "../assets/eagle3.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt=""/>
      </div>
      <ul className="nav-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/heating">Heating</Link></li>
        <li><Link to="/cooling">Cooling</Link></li>
        <li><Link to="/ventilation">Ventilation</Link></li>
        <li><Link to="/appointment">Appointment</Link></li>
        <li><Link to="/auth">Auth</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
