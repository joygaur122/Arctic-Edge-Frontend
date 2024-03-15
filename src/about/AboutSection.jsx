import React from "react";
import "./aboutsection.css";
import ownerImage from "../assets/owner.jpg"

const AboutSection = () => {
  return (
    <div className="aboutsection-container">
      <div className="aboutsection-content">
        <h1>Who We Are</h1>
        <p className="first-p">California Comfort Heating and Air Conditioning was founded by James Lee. James moved to California from Kentucky in 2002 after working with his family’s Heating and Cooling Business there. Prior to that, James Graduated from MacMurray college in 1998 with a degree in Teaching and Special Education.</p>
        <p clasName="second-p">After arriving in California, James worked at a couple of different companies but was unsatisfied with the company’s views on its clients. This led to the formation of California Heating and Air Conditioning. </p>
        <p className="third-p">Due to prior experiences, the foundation of California Heating and Air Conditioning’s philosophies were simple</p>
        <div>
          <ul className="list-menu">
            <li>Treat the client as if you provided that service to your family.</li>
            <li>Treat any home or business our team enters as our own.</li>
            <li>Quality and Customer Service are top priorities.</li>
            <li>Keep prices fair. Establish a customer for life.</li>
          </ul>
        </div>
        <p className="4th">At California Heating and Air Conditioning, we only hire professional people who are like-minded. We personally train each service tech to do a great job, take no shortcuts, and to treat each customer like family. Our team will go above and beyond the call of duty, doing only what is best for the customer and not what’s best for the company.</p>
      </div>
      <div className="aboutsection-image">
        <img src={ownerImage} alt="Description" />
      </div>
    </div>
  );
}

export default AboutSection;
