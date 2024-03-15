import React, { useState, useEffect, useRef } from 'react';
import "./projectstats.css"

const ProjectStats = () => {
  const [clientsExperience, setClientsExperience] = useState(0);
  const [completedProjects, setCompletedProjects] = useState(0);
  const statsRef = useRef(null);

  useEffect(() => {
    const clientsExperienceInterval = setInterval(() => {
      setClientsExperience(prevClientsExperience => {
        if (prevClientsExperience < 500) {
          const intervalTime = 10 - Math.floor(prevClientsExperience / 100);
          return Math.min(prevClientsExperience + intervalTime, 500);
        } else {
          clearInterval(clientsExperienceInterval);
          return 500;
        }
      });
    }, 10);

    const experienceInterval = setInterval(() => {
      setCompletedProjects(prevCompletedProjects => {
        if (prevCompletedProjects < 20) {
          const intervalTime = 50 - Math.floor(prevCompletedProjects / 2);
          return Math.min(prevCompletedProjects + intervalTime, 20);
        } else {
          clearInterval(experienceInterval);
          return 20;
        }
      });
    }, 50);

    const projectsInterval = setInterval(() => {
      setCompletedProjects(prevCompletedProjects => {
        if (prevCompletedProjects < 500) {
          const intervalTime = 10 - Math.floor(prevCompletedProjects / 100);
          return Math.min(prevCompletedProjects + intervalTime, 500);
        } else {
          clearInterval(projectsInterval);
          return 500;
        }
      });
    }, 10);

    return () => {
      clearInterval(clientsExperienceInterval);
      clearInterval(experienceInterval);
      clearInterval(projectsInterval);
    };
  }, []);

  const displayProjectStats = () => {
    return (
      <div className="project-container">
        <div className="project-content">
          <h1>Numbers Speak for Themselves</h1>
          <div className="stats-container">
            <div className="stat">
              <h2>Satisfied Clients</h2>
              <button className="project-stat" href="#">{clientsExperience}</button>
              <span className="plus-sign">+</span>
            </div>
            <div className="stat">
              <h2>Years of Experience</h2>
              <button className="project-stat" href="#">{Math.floor(completedProjects / 25)}</button>
              <span className="plus-sign">+</span>
            </div>
            <div className="stat">
              <h2>Completed Projects</h2>
              <button className="project-stat" href="#">{completedProjects}</button>
              <span className="plus-sign">+</span>
            </div>
            </div>
          <h2 className="last-h2">With over 2 decades of experience in Heating, Cooling, and Ventilation, our team of qualified experts are here to help.</h2>
          <p>Contact our team today. We provide 24 hour emergency services to Los Angeles County. Based out of Wilmington, CA, our team will be at your home or business quickly to assess the problem, After our assessment, you will receive a thorough walkthrough of the problem, the cause, and what our team will do to create a long-term solution so that you don’t have to experience it again</p>

        </div>
      </div>
    );
  };

  return (
    <div ref={statsRef}>
      {displayProjectStats()}
    </div>
  );
};

export default ProjectStats;