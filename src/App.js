import { React, useState } from "react";
import Navbar from "./components/Nav/Nav";
import SideNav from "./components/Nav/SideNav";
import Hero from "./components/HeroSection/Hero";
import Projects from "./components/ProjectsSection/Projects";
import GlobalStyle from "./components/Styles/GlobalStyles";
import Contact from "./components/ContactSection/Contact";
import Footer from "./components/Footer/Footer";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="App">
            <GlobalStyle />
            <SideNav isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Hero />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
