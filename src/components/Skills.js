import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SiAngular, SiReact, SiMongodb, SiNodedotjs, SiTypescript } from "react-icons/si";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const skills = [
    {
      name: "Angular",
      icon: SiAngular,
      color: "#DD0031",
      description: "Building dynamic single-page applications",
    },
    {
      name: "React",
      icon: SiReact,
      color: "#61DAFB",
      description: "Creating interactive user interfaces",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "#47A248",
      description: "Designing scalable database solutions",
    },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      color: "#339933",
      description: "Developing robust backend services",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "#3178C6",
      description: "Writing type-safe, maintainable code",
    },
  ];

  return (
    <section className="skill" id="skills" ref={skillsRef}>
      <Container>
        <Row>
          <Col xs={12}>
            <div className="skill-bx">
              <div
                className={
                  isVisible ? "animate__animated animate__fadeInUp" : ""
                }
              >
                <h2>Skills</h2>
                <p>
                  Here are the technologies I work with to bring ideas to
                  life. Each skill represents hours of practice and
                  real-world project experience.
                </p>
                <div className="skills-grid">
                  {skills.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                      <div
                        key={index}
                        className="skill-item"
                        style={{ "--skill-color": skill.color }}
                      >
                        <div className="skill-icon-wrapper">
                          <IconComponent
                            className="skill-icon"
                            size={60}
                            color={skill.color}
                          />
                        </div>
                        <h4>{skill.name}</h4>
                        <p>{skill.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="background"
      />
    </section>
  );
};

