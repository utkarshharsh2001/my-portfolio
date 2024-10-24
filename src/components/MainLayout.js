// src/components/MainLayout.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "../App.css";
import "../Responsive.css";

const BASE_PATH = "/my-portfolio"; // Define your base path here

const MainLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header>
        <nav>
          <h1
            style={{
              color: "lightgray",
              fontFamily: "'Pacifico', cursive", // Choose a font from Google Fonts or similar
              fontSize: "2rem", // Adjust font size as needed
              margin: 0, // Remove default margin for better control
              letterSpacing: "2px", // Add spacing between letters
            }}
          >
            Utkarsh Harsh
          </h1>

          <FaBars className="hamburger" onClick={toggleMenu} />
          <ul className={isOpen ? "nav-links open" : "nav-links"}>
            <li>
              <Link to={BASE_PATH} onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to={`${BASE_PATH}/experience`} onClick={toggleMenu}>
                Experience
              </Link>
            </li>
            <li>
              <Link to={`${BASE_PATH}/education`} onClick={toggleMenu}>
                Education
              </Link>
            </li>
            <li>
              <Link to={`${BASE_PATH}/skills`} onClick={toggleMenu}>
                Skills
              </Link>
            </li>
            {/* <li>
              <Link to={`${BASE_PATH}/softskills`} onClick={toggleMenu}>
                Soft Skills
              </Link>
            </li>
            <li>
              <Link to={`${BASE_PATH}/communication`} onClick={toggleMenu}>
                Communication
              </Link>
            </li> */}
            <li>
              <Link to={`${BASE_PATH}/achievements`} onClick={toggleMenu}>
                Achievements
              </Link>
            </li>
            {/* <li>
              <Link to={`${BASE_PATH}/tools`} onClick={toggleMenu}>
                Tools & Platforms
              </Link>
            </li> */}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
