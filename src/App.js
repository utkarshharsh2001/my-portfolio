// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import "./App.css";
import "./Responsive.css";
import Footer from "./components/Footer";

const BASE_PATH = "/my-portfolio"; // Define your base path here

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path={BASE_PATH} element={<Home />} />
          <Route
            path={`${BASE_PATH}/home`}
            element={<Navigate replace to={BASE_PATH} />}
          />
          <Route path={`${BASE_PATH}/experience`} element={<Experience />} />
          <Route path={`${BASE_PATH}/education`} element={<Education />} />
          <Route path={`${BASE_PATH}/skills`} element={<Skills />} />
          {/* <Route path={`${BASE_PATH}/softskills`} element={<SoftSkills />} /> */}
          {/* <Route
            path={`${BASE_PATH}/communication`}
            element={<Communication />}
          /> */}
          <Route
            path={`${BASE_PATH}/achievements`}
            element={<Achievements />}
          />
          {/* <Route path={`${BASE_PATH}/tools`} element={<ToolsPlatforms />} /> */}
        </Routes>
      </MainLayout>
      <Footer />
    </Router>
  );
}

export default App;
