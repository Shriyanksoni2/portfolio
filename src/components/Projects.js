import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import fullStackAppImg from "../assets/img/full-stack-app.png";

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  const projects = {
    web: [
      {
        title: "Portfolio Website",
        description:
          "Personal portfolio showcasing projects, skills, and experience with responsive design and smooth animations.",
        icon: (
          <svg width="100" height="100" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="3" width="20" height="14" rx="2" fill="#4A90E2" stroke="#fff" strokeWidth="1"/>
            <rect x="4" y="5" width="16" height="10" rx="1" fill="#fff"/>
            <circle cx="8" cy="8" r="1.5" fill="#4A90E2"/>
            <rect x="11" y="7" width="5" height="1" fill="#666"/>
            <rect x="11" y="9" width="3" height="1" fill="#666"/>
            <rect x="6" y="12" width="8" height="1" fill="#4A90E2"/>
            <path d="M20 19H4a1 1 0 01-1-1v-1h18v1a1 1 0 01-1 1z" fill="#333"/>
          </svg>
        ),
        technologies: ["React", "Bootstrap", "CSS3"],
        link: "https://shriyankportfolio.netlify.app/",
      },
      {
        title: "Online Code Editor",
        description:
          "Robust online code editor with real-time syntax highlighting, Judge0 API integration for multiple languages, and code import/export functionality.",
        icon: (
          <svg width="100" height="100" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="20" height="16" rx="2" fill="#2D3748" stroke="#4A5568" strokeWidth="1"/>
            <rect x="3" y="3" width="18" height="2" fill="#4A5568"/>
            <circle cx="5" cy="4" r="0.5" fill="#F56565"/>
            <circle cx="6.5" cy="4" r="0.5" fill="#ED8936"/>
            <circle cx="8" cy="4" r="0.5" fill="#48BB78"/>
            <text x="4" y="9" fontSize="3" fill="#E53E3E" fontFamily="monospace">&lt;/&gt;</text>
            <rect x="4" y="11" width="6" height="0.5" fill="#68D391"/>
            <rect x="4" y="12.5" width="8" height="0.5" fill="#63B3ED"/>
            <rect x="4" y="14" width="5" height="0.5" fill="#F6AD55"/>
            <rect x="4" y="15.5" width="7" height="0.5" fill="#B794F6"/>
            <rect x="2" y="19" width="20" height="3" rx="1" fill="#1A202C"/>
          </svg>
        ),
        technologies: ["React", "Bootstrap", "CodeMirror", "Judge0"],
        link: "https://code-deck.vercel.app/",
      },
    ],
    mobile: [
    ],
    fullstack: [
      {
        title: "Full-Stack Chat Application",
        description:
          "Real-time chat app with one-to-one and group messaging, media sharing, JWT authentication, and responsive UI with theme toggle.",
        imgUrl: fullStackAppImg,
        technologies: ["React", "Tailwind CSS", "DaisyUI", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
        link: "https://fullstack-chatapp-db5q.onrender.com/login",
      },
    ],
  };

  return (
    <section className="project" id="projects" ref={projectsRef}>
      <Container>
        <Row>
          <Col xs={12}>
            <div
              className={
                isVisible ? "animate__animated animate__fadeIn" : ""
              }
            >
              <h2>Projects</h2>
              <p>
                Here are some of my recent projects that showcase my skills
                and experience in web development.
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Web Apps</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Mobile Apps</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Full Stack</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content
                  className={
                    isVisible ? "animate__animated animate__slideInUp" : ""
                  }
                >
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.web.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>
                      {projects.mobile.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row>
                      {projects.fullstack.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};

