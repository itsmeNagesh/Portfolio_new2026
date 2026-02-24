import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Experience from "./components/Experiance";
import Contact from "./components/Contact";
// import ParticleBackground from "./components/ParticleBackground";

function App() {
  return (
    <div className="App relative bg-gradient-to-b from-[#0a0e27] via-[#10132e] to-[#0a0e27] min-h-screen text-white overflow-x-hidden">
      {/* <ParticleBackground /> */}
      <Hero />
      <Skills />
      <Services />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;


