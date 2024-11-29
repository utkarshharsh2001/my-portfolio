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
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  margin-top: 20px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ListItem = styled(motion.li)`
  background: #eef6ff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #003366;
  font-size: 1.1rem;
  line-height: 1.6;

  &:hover {
    background-color: #d0e7ff;
    transform: scale(1.02);
    transition: transform 0.3s ease-in-out, background-color 0.3s ease;
  }
`;

const SoftSkills = () => (
  <Section>
    <Title>Soft Skills</Title>
    <List>
      {[
        "Decision Making, Teamwork, Leadership",
        "Time Management, Problem Solving, Communication",
        "Adaptability, Analytical Thinking, Collaboration",
        "Conflict Resolution, Troubleshooting, Quick Learner, Debugging",
      ].map((skill, index) => (
        <ListItem
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          {skill}
        </ListItem>
      ))}
    </List>
  </Section>
);

export default SoftSkills;
