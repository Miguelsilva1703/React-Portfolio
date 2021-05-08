import { React, useState } from "react";
import Navigation from "./components/Nav/Nav";
import SideNav from "./components/Nav/SideNav";
import HeroBoot from "./components/HeroSectionBootstrap/HeroBoot";
import GlobalStyle from "./components/Styles/GlobalStyles";
import Contact from "./components/ContactSection/Contact";
import Footer from "./components/Footer/Footer";
import ProjectsBoot from "./components/ProjectsSectionBootstrap/ProjectsBootstrap";
import TechStack from "./components/TechStackSection/TechStack";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="App">
            <GlobalStyle />
            <SideNav isOpen={isOpen} toggle={toggle} />
            <Navigation toggle={toggle} />
            <HeroBoot />
            <ProjectsBoot />
            <TechStack />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;

/**

 

             <GlobalStyle />
            <SideNav isOpen={isOpen} toggle={toggle} />
            <Navigation toggle={toggle} />
            <HeroBoot />
            <ProjectsBoot />
            <TechStack />
            <Contact />
            <Footer />




 */
