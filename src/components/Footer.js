import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const Logo = () => (
  <svg width="60" height="60" viewBox="0 0 50 50" fill="none">
    <circle cx="25" cy="25" r="23" fill="url(#gradient)" stroke="#fff" strokeWidth="2"/>
    <text x="25" y="32" fontSize="20" fontWeight="bold" fill="#fff" textAnchor="middle" fontFamily="Arial, sans-serif">S</text>
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#AA367C"/>
        <stop offset="100%" stopColor="#4A2FBD"/>
      </linearGradient>
    </defs>
  </svg>
);

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={6} className="text-center text-sm-start mb-3 mb-sm-0">
            <Logo />
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

