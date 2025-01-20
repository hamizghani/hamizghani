import React from "react";
import './index.css';
import Homepage from "./components/Homepage";
import About from "./components/About";
import Experience from "./components/Experience";
import Achievement from "./components/Achievement";
import Projects from "./components/Projects";
import Socials from "./components/Socials";

function App(){
  return(
    <div>
      <Homepage />
      <About />
      <Experience />
      <Projects />
      <Achievement />
      <Socials />
    </div>
  );
}

export default App;