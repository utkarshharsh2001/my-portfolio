// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import SoftSkills from "./components/SoftSkills";
import Communication from "./components/Communication";
import Achievements from "./components/Achievements";
import ToolsPlatforms from "./components/ToolsPlatforms";
import "./App.css";
import "./Responsive.css";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/softskills" element={<SoftSkills />} />
          <Route path="/communication" element={<Communication />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/tools" element={<ToolsPlatforms />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
