import React from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Stylednav, NavLinks, NavLogo, MobileIcon, NavMenu, NavItem } from "./NavElements";

const Nav = ({ toggle }) => {
    return (
        <Stylednav>
            <NavLogo to="home" smooth={true} duration={500} spy={true} exact="true" offset={-40} id="logo">
                <h1>
                    <span className="logoSpan">MS</span> Dev
                </h1>
            </NavLogo>
            <IconContext.Provider value={{ color: "#fff" }}>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
            </IconContext.Provider>

            <NavMenu>
                <NavItem>
                    <NavLinks to="home" smooth={true} duration={500} spy={true} exact="true" offset={0}>
                        {" "}
                        <span>Home</span>
                    </NavLinks>
                </NavItem>

                <NavItem>
                    <NavLinks to="projects" smooth={true} duration={500} spy={true} exact="true">
                        <span>Projects</span>
                    </NavLinks>
                </NavItem>

                <NavItem>
                    <NavLinks to="contact" smooth={true} duration={500} spy={true} exact="true" offset={0}>
                        <span>Contact</span>
                    </NavLinks>
                </NavItem>
            </NavMenu>
        </Stylednav>
    );
};

export default Nav;
