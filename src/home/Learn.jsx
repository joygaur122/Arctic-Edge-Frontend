import comfort from "../assets/comfort2.jpg"
import "./learn.css"
import { useNavigate } from "react-router-dom"

const Learn = () => {
    const navigate = useNavigate ();
    
    const navigateToAbout = () => {
      navigate("/about")
    }


  return (
    <div className="learn-container">
      <img src={comfort} alt="comfort" className="learn-image"/>
        <div className="image-content">
            <h1>Live in California's Comfort</h1>
            <p>You can feel confident in our team’s dedication to serve you. We hold quality, timeliness, and professionalism to the highest degree. Our goal is to build lifelong relationships with our clients to help keep your business and home comfortable, the California way. </p>
            <button className="learn-button" onClick={navigateToAbout}> Learn About Us</button>
        
         
        </div>
        
        </div>

  )
}

export default Learn