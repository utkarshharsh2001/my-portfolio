import React from "react";
import { motion } from "framer-motion"; // For animation
import styled from "styled-components"; // For styled-components

const Section = styled.section`
  margin-top: 30px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: #0056b3;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-top: 20px;
`;

const ListItem = styled(motion.li)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #eef6ff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #003366;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 10px;

  &:hover {
    background-color: #d0e7ff;
    transform: scale(1.02);
    transition: transform 0.3s ease-in-out, background-color 0.3s ease;
  }
`;

const Proficiency = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  span {
    font-size: 0.9rem;
    color: #0056b3;
  }

  .bar {
    height: 8px;
    width: 100px;
    border-radius: 4px;
    background: #cce4ff;
    overflow: hidden;
    position: relative;

    &:after {
      content: "";
      display: block;
      height: 100%;
      background: #0056b3;
      width: ${(props) => props.level}%;
      transition: width 0.3s ease-in-out;
    }
  }
`;

const Communication = () => (
  <Section>
    <Title>Communication</Title>
    <List>
      {[
        {
          language: "English",
          level: 90,
          description: "Fluent with a wide vocabulary",
        },
        { language: "Hindi", level: 85, description: "Fluent" },
        {
          language: "Telugu",
          level: 40,
          description: "Basic communication skills",
        },
      ].map((lang, index) => (
        <ListItem
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          <span>{lang.language}:</span>
          <span>{lang.description}</span>
          <Proficiency level={lang.level}>
            <div className="bar"></div>
            <span>{lang.level}%</span>
          </Proficiency>
        </ListItem>
      ))}
    </List>
  </Section>
);

export default Communication;
