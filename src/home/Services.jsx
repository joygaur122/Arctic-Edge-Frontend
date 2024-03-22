import phone from "../assets/br2.jpg"
import "./services.css"
import { useNavigate } from "react-router-dom"

function Service() {
const navigate = useNavigate ();
const navigateToAppointment = () => {
 navigate("/appointment")
}

  return (
   <section className="services-container">
    <img src={phone} alt="" className="service-image"/>
    <div className="service-content">
      <h1>24 HOUR EMERGENCY SERVICES AVAILABLE NOW</h1>
      <p>Our team is on standy at any hour of the day each day of the week</p>
      <button className="service-button" onClick={navigateToAppointment}>Get Free Estimate</button>
    </div>
   </section>
  )
}

export default Service