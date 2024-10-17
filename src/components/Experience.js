// src/components/Experience.js
import React from "react";

const Experience = () => (
  <section>
    <h2>Work Experience</h2>
    <div>
      <h3>Jio Platform Limited</h3>
      <h4>Java Developer (2024-02 - present)</h4>
      <ul>
        <li>
          Developed a robust SIEM (Security Information and Event Management)
          service backend using OpenSearch and Kafka, enhancing the system's
          ability to process and analyze logs efficiently.
        </li>
        <li>
          Implemented service to generate actionable alerts based on predefined
          parameters and user-defined criteria, improving threat detection and
          response capabilities.
        </li>
        <li>
          Implemented Kafka for real-time handling and insertion of large data
          volumes, ensuring high throughput and scalability of the SIEM service.
        </li>
        <li>
          Designed and developed APIs to facilitate seamless data exchange
          between the SIEM service and other platform components, enhancing
          interoperability and system integration.
        </li>
        <li>
          Created APIs for the frontend to display alerts with various
          user-defined filters and relationships, incorporating diverse visual
          interpretations to improve user experience.
        </li>
        <li>
          Maintained integration consistency across the platform by adhering to
          established standards and practices, ensuring uniformity and
          reliability.
        </li>
        <li>
          Leveraged the Spring Boot framework to build scalable and robust
          solutions, contributing to the overall stability and performance of
          the platform.
        </li>
        <li>
          Consistently proofread and refined code and documentation to ensure
          accuracy, professionalism, and error-free presentation.
        </li>
      </ul>
    </div>
    <div>
      <h4>Python Developer (2023-08 - 2024-01)</h4>
      <ul>
        <li>
          Developed and optimized CRUD APIs with authentication using FastAPI,
          enhancing performance for speed and responsiveness in retrieving
          product prices.
        </li>
        <li>
          Designed and implemented a comparator tool to evaluate and compare
          product configurations against offerings from GCP, AWS, and Azure.
        </li>
        <li>
          Conducted research to identify and utilize reliable endpoints for
          fetching price data from various cloud services.
        </li>
        <li>
          Managed and processed large JSON datasets using Python, effectively
          parsing and filtering data to extract relevant information.
        </li>
        <li>
          Stored data in MongoDB, employing fuzzy search techniques to deliver
          accurate results.
        </li>
        <li>
          Collaborated with cross-functional teams to ensure seamless
          integration of backend solutions with frontend applications, enhancing
          the overall user experience.
        </li>
      </ul>
    </div>
  </section>
);

export default Experience;
