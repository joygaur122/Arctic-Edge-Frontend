import aboutImage from "../assets/about.jpg"
import "./about.css"
import AboutSection from "../about/AboutSection"
import Conf from "../about/Conf"
import ProjectStats from "../about/ProjectStats"
import Footer from "../home/Footer"
const About = () => {
  return (
<div className="about-container">
  <img src={aboutImage} alt="" className="about-image"/>
<div className="about-content">
  <h1>About Us</h1>

</div>
<AboutSection/>
<Conf/>
<ProjectStats/>
<Footer/>
</div>

  )
}

export default About