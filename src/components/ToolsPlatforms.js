import React from "react";
import { motion } from "framer-motion"; // For animation
import styled from "styled-components"; // For styled-components

const Section = styled.section`
  margin-top: 30px;
  max-width: 800px; /* Limit maximum width to prevent stretching */
  margin-left: auto; /* Center the section horizontally */
  margin-right: auto; /* Center the section horizontally */
`;

const Title = styled.h2`
  text-align: center;
  font-size: 1.5rem; /* Smaller font size */
  color: #444; /* Softer color to make it less prominent */
  margin-bottom: 15px;
  text-transform: uppercase;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(250px, 1fr)
  ); /* Grid layout for responsiveness */
  gap: 15px; /* Add spacing between grid items */
  margin-top: 15px;
`;

const ListItem = styled(motion.div)`
  background: #f9f9f9; /* Softer background */
  padding: 15px; /* Increased padding for better readability */
  border-radius: 6px;
  color: #666; /* Muted text color */
  font-size: 1rem;
  line-height: 1.4;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); /* Subtle shadow */
  display: flex;
  align-items: center;
  justify-content: center; /* Center-align the content */
  text-align: center;

  &:hover {
    transform: scale(1.02); /* Slight scaling effect on hover */
    transition: transform 0.3s ease-in-out;
  }
`;

const ToolsPlatforms = () => (
  <Section>
    <Title>Tools & Platforms</Title>
    <List>
      {[
        "Git, Docker, Maven, Android Studio, Kubernetes",
        "Postman, pgAdmin, AI Prompting, MySQL Workbench",
        "DBeaver, VS Code, IntelliJ, PyCharm, STS",
        "OpenSearch, Logstash, Kafka, PostgreSQL",
        "MongoDB, MySQL, Agile Development",
      ].map((tool, index) => (
        <ListItem
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          {tool}
        </ListItem>
      ))}
    </List>
  </Section>
);

export default ToolsPlatforms;
