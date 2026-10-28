import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import Entrepreneurship from "./components/Entrepreneurship";
import CreativeWork from "./components/CreativeWork";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Highlights />
      <Skills />
      <Experience />
      <Projects />
      <Entrepreneurship />
      <CreativeWork />
      <Certifications />
      <Education />
      <Contact />
    </>
  );
}

export default App;
