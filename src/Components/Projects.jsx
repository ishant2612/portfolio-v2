import React from "react";
import "../Styles/Project.css";
import GitHubIcon from '@mui/icons-material/GitHub';
const Projects = () => {
  return (
    <div className="project-wrapper" id="projects">
      <div className="project-title">
        <p className="project-title-text">Projects</p>
        <div className="project-sec">
          <p className="project-sec-title">Some of my greatest projects....</p>
          <div className="pros">
            
          </div>
          <div className="pros"></div>
          <div className="pros"></div>
        </div>
          <GitHubIcon className="github-icon" style={{color: "#0E2341",
  fontSize: "2rem"}}/>
      </div>
    </div>
  );
};

export default Projects;
