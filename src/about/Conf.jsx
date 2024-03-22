import "./conf.css";
import confImage from "../assets/comf4.jpg";

const Conf = () => {
  return (
    <div style={{ position: 'relative' }}>
      <div className="conf-container" >
        <img src={confImage} alt="comfort" className="conf-image"  />
        <div className="conf-content">
          <h1>Live in California's Comfort</h1>
          <p>You can feel confident in our team’s dedication to serve you. We hold quality, timeliness, and professionalism to the highest degree. Our goal is to build lifelong relationships with our clients to help keep your business and home comfortable, the California way. </p>
          <button className="conf-button">Learn About Us</button>
        </div>
      </div>
    </div>
  );
}

export default Conf;
