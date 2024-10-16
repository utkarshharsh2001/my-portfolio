import React, { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [projects] = useState([
    { id: 1, name: "Project 1", description: "This is the first project." },
    { id: 2, name: "Project 2", description: "This is the second project." },
    { id: 3, name: "Project 3", description: "This is the third project." },
  ]);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="App">
      <header>
        <h1>My Portfolio</h1>
      </header>
      <main>
        <h2>Project Gallery</h2>
        <div className="project-gallery">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedProject(project)}
            >
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </motion.div>
          ))}
        </div>

        {selectedProject && (
          <motion.div
            className="project-details"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Selected Project: {selectedProject.name}</h3>
            <p>{selectedProject.description}</p>
          </motion.div>
        )}
      </main>
    </div>
  );
}

export default App;
