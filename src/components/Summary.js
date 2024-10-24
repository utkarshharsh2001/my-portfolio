// src/components/Summary.js
import React from "react";

const Summary = () => (
  <section className="summary-section">
    <h2 className="summary-heading">Career Highlights</h2>
    <p className="summary-text">
      Utkarsh Harsh is an accomplished software developer based in Navi Mumbai,
      Maharashtra, with a strong focus on Java and Python development. He has
      extensive experience architecting robust backend systems, particularly at
      Jio Platform Limited, where he spearheaded the design and implementation
      of highly resilient SIEM applications using
      <strong style={{ marginLeft: "5px", marginRight: "5px" }}>
        Java (Spring Boot)
      </strong>
      and developed a scalable backend for the Price Engine using
      <strong style={{ marginLeft: "5px", marginRight: "5px" }}>
        Python (FastAPI)
      </strong>
      .
    </p>
    <p className="summary-text">
      Utkarsh is skilled in managing large-scale PostgreSQL databases,
      streamlining data flows through Kafka, and devising efficient data storage
      solutions with MySQL and MongoDB. His deep expertise in Java and Python
      has been pivotal to building performance-optimized systems that handle
      complex data management tasks.
    </p>
    <p className="summary-text">
      With a B.Tech. from the Indian Institute of Technology, Delhi, Utkarsh
      combines academic rigor with real-world experience.
    </p>
  </section>
);

export default Summary;
