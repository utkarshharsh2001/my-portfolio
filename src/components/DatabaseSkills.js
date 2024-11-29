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

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled(motion.li)`
  background: #f9f9f9;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  color: #333;
`;

const DatabaseSkills = () => (
  <Section>
    <SubTitle>Database</SubTitle>
    <List>
      <ListItem
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <strong>PostgreSQL, MySQL, MongoDB:</strong> Advanced hands-on
        experience with relational and NoSQL databases.
      </ListItem>
    </List>
  </Section>
);

export default DatabaseSkills;
