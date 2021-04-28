import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/ProjectsSection/Projects";
import { useLocation } from "react-router-dom";
import GlobalStyle from "./components/Styles/GlobalStyles";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Hero />
      <Projects />
    </div>
  );
}

export default App;
