import React from "react";
import { IconContext } from "react-icons";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import {
  FooterSection,
  Container,
  SocialMedia,
  FooterLink,
  FooterHr,
  FooterText,
  hrContainer,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <SocialMedia>
          <FooterLink>
            <IconContext.Provider value={{ color: "#d5d5d5", size: "60px" }}>
              <FaGithubSquare />
            </IconContext.Provider>
          </FooterLink>

          <FooterLink>
            <IconContext.Provider value={{ color: "#0A66C2", size: "60px" }}>
              <FaLinkedin />
            </IconContext.Provider>
          </FooterLink>
        </SocialMedia>
        <hrContainer>
          <FooterHr />
        </hrContainer>
        <FooterText>
          <h3>&copy; Miguel Silva 2021</h3>
        </FooterText>
      </Container>
    </FooterSection>
  );
};

export default Footer;
