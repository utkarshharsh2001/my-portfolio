import React from "react";
import { motion } from "framer-motion"; // For animations
import styled from "styled-components"; // For styled-components

const Section = styled.section`
  padding: 20px;
  font-family: "Arial", sans-serif;
  background: linear-gradient(135deg, #f9f9f9, #ececec);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 1200px; /* Limit max width for better balance */
  margin: 0 auto; /* Center the content */
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(300px, 1fr)
  ); /* Two-column layout */
  gap: 20px; /* Add spacing between columns */
`;

const Institution = styled(motion.div)`
  background: #fff;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SubTitle = styled.h3`
  color: #0056b3;
  font-size: 1.25rem;
  margin-bottom: 8px;
`;

const CertificationItem = styled(motion.div)`
  background: #eef6ff;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  color: #003366;
`;

const Education = () => {
  return (
    <Section>
      <Title>Educational Background & Certifications</Title>
      <Container>
        {/* Left Column: Educational Background */}
        <div>
          <Title>Academic Qualifications</Title>

          <Institution
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SubTitle>Indian Institute of Technology, Delhi</SubTitle>
            <p>Bachelor of Technology, Chemical Engineering (2019 - 2023)</p>
            <p>GPA: 7.6</p>
          </Institution>

          <Institution
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <SubTitle>Public Central School, Samastipur</SubTitle>
            <p>Higher Secondary Education, Maths and Science (2016 - 2018)</p>
            <p>Grade: 90%</p>
          </Institution>

          <Institution
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <SubTitle>Sri Prakash Vidyaniketan, Visakhapatnam</SubTitle>
            <p>Lower Secondary Education (2014 - 2016)</p>
            <p>Grade: 10 CGPA</p>
          </Institution>
        </div>

        {/* Right Column: Certifications */}
        <div>
          <Title>Certifications</Title>
          {[
            "Effective Problem-Solving and Decision-Making",
            "Getting Started with Flutter Development",
            "Developing Back-End Apps with Node.js and Express",
            "Introduction to Cloud Computing",
            "Introduction to Web Development with HTML, CSS, JavaScript",
            "Supervised Machine Learning: Regression and Classification",
            "React Basics",
          ].map((certification, index) => (
            <CertificationItem
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <p>{certification}</p>
            </CertificationItem>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Education;
