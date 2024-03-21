import "./imageinfo.css"
import imagePic from "../assets/40.jpg"
import imagePic2 from "../assets/heating2.jpg"
import imagePic3 from "../assets/heating3.jpg"
import imagePic4 from "../assets/heat12.jpg"

const ImageInfo = () => {
  return (
  <div className="imageinfo-container">
    <div className="imageinfo-content">
        <img src={imagePic} alt="image" className="image-card"/>
        <h2 className="image-title">Boilers & Water Heaters</h2>
        <p className="image-p" >  Boilers and water heaters are essential in keeping your home and business water running warm. Don’t let your home go with a cold shower or a poorly functioning boiler at your place of work. Our team provides emergency services to repair and replace your heating systems by showing up quickly after we receive your call. </p>
    </div>
    <div className="imageinfo-content">
        <img src={imagePic2} alt="image" className="image-card"/>
        <h2 className="image-title">Home Heating Systems</h2>
        <p className="image-p">We have over 20 years of experience in working with commercial heating systems. Never let your business go cold with our help. We provide maintenance, repair, and installation of commercial heating systems to Los Angeles and Orange County. 

 

. </p>
    </div>
    <div className="imageinfo-content">
        <img src={imagePic3} alt="image" className="image-card"/>
        <h2 className="image-title">Commercial Heating Systems</h2>
        <p className="image-p" >Boilers and water heaters are essential in keeping your home and business water running warm. Don’t let your home go with a cold shower or a poorly functioning boiler at your place of work. Our team provides emergency services to repair and replace your heating systems by showing up quickly after we receive your call. </p>
    </div>
    <div className="imageinfo-content">
        <img src={imagePic4} alt="image" className="image-card"/>
        <h2 className="image-title">Heating System Design</h2>
        <p className="image-p" >Whether you are building a residential or commercial development, work with the experts who can help you design the systems you need to impress your next buyer. We use energy-  and cost-efficiency as important metrics when assessing your project. 

</p>
    </div>
  </div>
  )
}

export default ImageInfo