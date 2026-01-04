import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section className="about" id="about" ref={aboutRef}>
      <Container>
        <Row className="align-items-center">
          <Col xs={12}>
            <div
              className={
                isVisible ? "animate__animated animate__fadeIn" : ""
              }
            >
              <h2>About Me</h2>
              <div className="about-content">
                <Row>
                  <Col md={6}>
                    <div className="about-text">
                      <p>
                        I'm a passionate full-stack developer specializing in
                        modern web technologies including React, Angular, Node.js, 
                        and MongoDB. I build scalable, performant applications 
                        with clean, efficient code.
                      </p>
                      <p>
                        My expertise spans real-time applications, authentication 
                        systems, responsive UI design, and production deployment. 
                        I enjoy solving complex problems and creating impactful 
                        digital experiences.
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="about-stats">
                      <div className="stat-item">
                        <h3>10+</h3>
                        <p>Projects Completed</p>
                      </div>
                      <div className="stat-item">
                        <h3>3+</h3>
                        <p>Years Experience</p>
                      </div>
                      <div className="stat-item">
                        <h3>1000+</h3>
                        <p>Hours of Coding</p>
                      </div>
                      <div className="stat-item">
                        <h3>10+</h3>
                        <p>Technologies Mastered</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

