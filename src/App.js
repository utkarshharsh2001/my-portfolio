// src/App.js
import React from "react";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import SoftSkills from "./components/SoftSkills";
import Communication from "./components/Communication";
import Achievements from "./components/Achievements";
import ToolsPlatforms from "./components/ToolsPlatforms";

function App() {
  return (
    <div className="App">
      <Header />
      <Summary />
      <Experience />
      <Education />
      <Skills />
      <SoftSkills />
      <Communication />
      <Achievements />
      <ToolsPlatforms />
    </div>
  );
}

export default App;
