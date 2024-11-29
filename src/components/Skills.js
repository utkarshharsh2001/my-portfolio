import React from "react";
import styled from "styled-components";
import ProgrammingSkills from "./ProgrammingSkills";
import DatabaseSkills from "./DatabaseSkills";
import SoftSkills from "./SoftSkills";
import Communication from "./Communication";
import ToolsPlatforms from "./ToolsPlatforms";

const Section = styled.section`
  padding: 30px;
  font-family: "Arial", sans-serif;
  background: linear-gradient(135deg, #f9f9f9, #ececec);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 40px;
  text-transform: uppercase;
`;

const Skills = () => (
  <Section>
    <Title>Skills & Expertise</Title>
    <ProgrammingSkills />
    <SoftSkills />
    <DatabaseSkills />
    <Communication />
    <ToolsPlatforms />
  </Section>
);

export default Skills;
