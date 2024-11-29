import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Section = styled.div`
  margin-bottom: 40px;
`;

const SubTitle = styled.h3`
  font-size: 1.8rem;
  color: #0056b3;
  margin-bottom: 20px;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const SkillCard = styled(motion.div)`
  background: #eef6ff;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
  }
`;

const ProgressBar = styled.div`
  height: 10px;
  background: #cce4ff;
  border-radius: 5px;
  margin-top: 10px;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    display: block;
    height: 100%;
    background: #0056b3;
    width: ${(props) => props.level}%;
    transition: width 0.5s ease-in-out;
  }
`;

const ProgrammingSkills = () => {
  const skills = [
    { name: "C++", description: "DSA for problem-solving", level: 80 },
    {
      name: "Java",
      description: "Real-world projects (SpringBoot)",
      level: 90,
    },
    {
      name: "Python",
      description: "Scripting and real-world projects (FastAPI)",
      level: 85,
    },
    {
      name: "Flutter",
      description: "Small-scale projects",
      level: 50, // Decreased proficiency
    },
  ];

  return (
    <Section>
      <SubTitle>Programming</SubTitle>
      <SkillsGrid>
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <h4>{skill.name}</h4>
            <p>{skill.description}</p>
            <ProgressBar level={skill.level}></ProgressBar>
          </SkillCard>
        ))}
      </SkillsGrid>
    </Section>
  );
};

export default ProgrammingSkills;
