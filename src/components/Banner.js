import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { FaArrowRight } from "react-icons/fa";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef(null);
  const toRotate = ["Web Developer", "Full Stack Developer", "Software Engineer"];
  const period = 2000;

  useEffect(() => {
    const element = bannerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta, isDeleting, loopNum, toRotate, period]);

const scrollToConnect = () => {
    const connectSection = document.getElementById("connect");
    if (connectSection) {
      connectSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="banner" id="home" ref={bannerRef}>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div
              className={isVisible ? "animate__animated animate__fadeIn" : ""}
            >
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>
                {`Hi! I'm a `}
                <span className="txt-rotate">
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p>
                I'm a passionate developer specializing in building modern
                web applications using React, Angular, Node.js, and MongoDB.
                I love creating interactive, user-friendly experiences that
                make a difference.
              </p>
              <button onClick={scrollToConnect}>
                Let's Connect <FaArrowRight size={20} />
              </button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
              <img src={headerImg} alt="Header Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

