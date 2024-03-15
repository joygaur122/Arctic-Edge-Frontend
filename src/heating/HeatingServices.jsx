import React, { useState } from 'react';
import "./heatingservices.css"

const HeatingServices = () => {
  const [qualityMaterialsExpanded, setQualityMaterialsExpanded] = useState(false);
  const [professionalTeamExpanded, setProfessionalTeamExpanded] = useState(false);
  const [emergencyServiceExpanded, setEmergencyServiceExpanded] = useState(false);
  const [repairInstallationExpanded, setRepairInstallationExpanded] = useState(false);

  const toggleQualityMaterials = () => {
    setQualityMaterialsExpanded(!qualityMaterialsExpanded);
  };

  const toggleProfessionalTeam = () => {
    setProfessionalTeamExpanded(!professionalTeamExpanded);
  };

  const toggleEmergencyService = () => {
    setEmergencyServiceExpanded(!emergencyServiceExpanded);
  };

  const toggleRepairInstallation = () => {
    setRepairInstallationExpanded(!repairInstallationExpanded);
  };

  return (
    <div className="heating-services-container">
      <h1 className="heating-services-title">Professional Heating Services</h1>
      <p className="heating-services-description">Having qualified heating professionals is essential to maintaining the value and functionality of your home and business. The team at California Comfort Heating and Air Conditioning pride themselves in that we do not take shortcuts. By delivering the highest quality heating services in Wilmington and Los Angeles, we have raised the bar on what it means to be a professional heating technician.</p>
      <p className="heating-services-description">If you are experiencing any issues with your home or business’s heating systems and are located in Wilmington or Los Angeles, we provide free estimates to our customers. Call us today to see why we have become a staple name in our customers’ homes.</p>
      <div className="heating-services-category" onClick={toggleQualityMaterials}>
        <h3 className="heating-services-category-name">Quality Materials</h3>
        {qualityMaterialsExpanded && (
          <p className="heating-services-category-description">Our Team uses only the highest quality of materials available so your home and business does not experience a breakdown of our services rendered.</p>
        )}
      </div>
      <div className="heating-services-category" onClick={toggleProfessionalTeam}>
        <h3 className="heating-services-category-name">Professional Team</h3>
        {professionalTeamExpanded && (
          <p className="heating-services-category-description">Our team focuses on customer service, professionalism, and high standards of work.</p>
        )}
      </div>
      <div className="heating-services-category" onClick={toggleEmergencyService}>
        <h3 className="heating-services-category-name">24 Hour Emergency Service</h3>
        {emergencyServiceExpanded && (
          <p className="heating-services-category-description">Any day and any time, our team is here to help you quickly.</p>
        )}
      </div>
      <div className="heating-services-category" onClick={toggleRepairInstallation}>
        <h3 className="heating-services-category-name">Repair & Installation</h3>
        {repairInstallationExpanded && (
          <p className="heating-services-category-description">Whether you need a repair or have a new piece of equipment that requires professional installation, our technicians are here to help.</p>
        )}
      </div>
    </div>
  );
};

export default HeatingServices;