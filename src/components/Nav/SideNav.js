import React from "react";
import {
  SideNavContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrapper,
  SidebarRoute,
} from "./SideNavElements";

const SideNav = ({ isOpen, toggle }) => {
  return (
    <SideNavContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="home"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            Home
          </SidebarLink>
          <SidebarLink
            to="projects"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            Projects
          </SidebarLink>
          <SidebarLink
            to="contact"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SideNavContainer>
  );
};

export default SideNav;
