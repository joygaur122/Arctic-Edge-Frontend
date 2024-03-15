import "./imageinfo.css"
import imagePic from "../assets/40.jpg"

const ImageInfo = () => {
  return (
  <div className="imageinfo-container">
    <div className="imageinfo-content">
        <img src={imagePic} alt="image" className="image-card"/>
        <h2 className="image-title">Boilers & Water Heaters</h2>
        <p className="image-p" >  Boilers and water heaters are essential in keeping your home and business water running warm. Don’t let your home go with a cold shower or a poorly functioning boiler at your place of work. Our team provides emergency services to repair and replace your heating systems by showing up quickly after we receive your call. </p>
    </div>
    <div className="imageinfo-content">
        <img src={imagePic} alt="image" className="image-card"/>
        <h2 className="image-title">Boilers & Water Heaters</h2>
        <p className="image-p">Boilers and water heaters are essential in keeping your home and business water running warm. Don’t let your home go with a cold shower or a poorly functioning boiler at your place of work. Our team provides emergency services to repair and replace your heating systems by showing up quickly after we receive your call. </p>
    </div>
    <div className="imageinfo-content">
        <img src={imagePic} alt="image" className="image-card"/>
        <h2 className="image-title">Boilers & Water Heaters</h2>
        <p className="image-p" >Boilers and water heaters are essential in keeping your home and business water running warm. Don’t let your home go with a cold shower or a poorly functioning boiler at your place of work. Our team provides emergency services to repair and replace your heating systems by showing up quickly after we receive your call. </p>
    </div>
    <div className="imageinfo-content">
        <img src={imagePic} alt="image" className="image-card"/>
        <h2 className="image-title">Boilers & Water Heaters</h2>
        <p className="image-p" >Boilers and water heaters are essential in keeping your home and business water running warm. Don’t let your home go with a cold shower or a poorly functioning boiler at your place of work. Our team provides emergency services to repair and replace your heating systems by showing up quickly after we receive your call. </p>
    </div>
  </div>
  )
}

export default ImageInfo