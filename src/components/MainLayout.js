// src/components/MainLayout.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "../App.css";
import "../Responsive.css";

const MainLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header>
        <nav>
          <FaBars className="hamburger" onClick={toggleMenu} />
          <ul className={isOpen ? "nav-links open" : "nav-links"}>
            <li>
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/experience" onClick={toggleMenu}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="/education" onClick={toggleMenu}>
                Education
              </Link>
            </li>
            <li>
              <Link to="/skills" onClick={toggleMenu}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="/softskills" onClick={toggleMenu}>
                Soft Skills
              </Link>
            </li>
            <li>
              <Link to="/communication" onClick={toggleMenu}>
                Communication
              </Link>
            </li>
            <li>
              <Link to="/achievements" onClick={toggleMenu}>
                Achievements
              </Link>
            </li>
            <li>
              <Link to="/tools" onClick={toggleMenu}>
                Tools & Platforms
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
