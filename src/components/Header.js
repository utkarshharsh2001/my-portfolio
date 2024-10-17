// src/components/Header.js
import React from "react";
import { useSpring, animated } from "react-spring";

const Header = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

  return (
    <animated.header style={props}>
      <h1>Utkarsh Harsh</h1>
      <p>Software Developer</p>
      <p>
        Navi Mumbai, Maharashtra | +91 9523507101 | utkarshharsh2001@gmail.com
      </p>
    </animated.header>
  );
};

export default Header;
