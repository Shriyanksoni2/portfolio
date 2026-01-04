import React from "react";
import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, icon, imgUrl, technologies, link }) => {
  return (
    <Col xs={12} sm={6} md={4}>
      <div className="proj-imgbx">
        {icon ? (
          <div className="proj-icon">
            {icon}
          </div>
        ) : (
          <img src={imgUrl} alt={title} />
        )}
        <div className="proj-title-overlay">
          <h4>{title}</h4>
        </div>
        <div className="proj-txtx">
          <span>{description}</span>
          <div className="tech-tags">
            {technologies && technologies.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <button className="project-btn">View Project</button>
            </a>
          )}
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;

