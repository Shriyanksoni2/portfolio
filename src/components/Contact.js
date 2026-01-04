import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from 'emailjs-com';

export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    
    try {
      // Send email to you (owner)
      await emailjs.sendForm(
        'service_7p1ad0c',
        'template_jqg07ag',
        e.target,
        'Ibe2nhFJkB1D6tOTc'
      );
      
      // Send confirmation email to sender
      await emailjs.sendForm(
        'service_7p1ad0c',
        'template_hfvruqg',
        e.target,
        'Ibe2nhFJkB1D6tOTc'
      );
      
      setButtonText("Send");
      setFormDetails(formInitialDetails);
      setStatus({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      setButtonText("Send");
      setStatus({ success: false, message: "Failed to send message. Please try again." });
    }
    
    setTimeout(() => {
      setStatus({});
    }, 5000);
  };

  return (
    <section className="contact" id="connect" ref={contactRef}>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <img
              className={
                isVisible
                  ? "animate__animated animate__zoomIn"
                  : ""
              }
              src={contactImg}
              alt="Contact Us"
            />
          </Col>
          <Col xs={12} md={6}>
            <div
              className={
                isVisible ? "animate__animated animate__fadeIn" : ""
              }
            >
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col xs={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="firstName"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) =>
                            onFormUpdate("firstName", e.target.value)
                          }
                        />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="lastName"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          onChange={(e) =>
                            onFormUpdate("lastName", e.target.value)
                          }
                        />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input
                          type="email"
                          name="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                        />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          name="phone"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) =>
                            onFormUpdate("phone", e.target.value)
                          }
                        />
                      </Col>
                      <Col xs={12} className="px-1">
                        <textarea
                          rows="6"
                          name="message"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                        ></textarea>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p
                            className={
                              status.success === false ? "danger" : "success"
                            }
                          >
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

