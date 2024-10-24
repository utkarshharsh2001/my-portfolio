// src/components/Footer.js
import React from "react";
import "../css/Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <p>© 2024 Utkarsh Harsh. All rights reserved.</p>
      <p>
        <a
          href="https://www.linkedin.com/in/utkarsh-harsh-06feb2001"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        |
        <a
          href="https://github.com/utkarshharsh2001"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          GitHub
        </a>{" "}
        |<a href="mailto:utkarshharsh2001@gmail.com"> Email</a>
      </p>
    </div>
  </footer>
);

export default Footer;
