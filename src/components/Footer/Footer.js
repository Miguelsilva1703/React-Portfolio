import React from "react";
import { IconContext } from "react-icons";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FooterSection, Container, SocialMedia, FooterLink, FooterHr, FooterText, HrContainer } from "./FooterElements";

const Footer = () => {
    return (
        <FooterSection>
            <Container>
                <SocialMedia>
                    <FooterLink>
                        <IconContext.Provider value={{ color: "#d5d5d5", size: "60px" }}>
                            <a href="https://github.com/Miguelsilva1703" target="_blank">
                                <FaGithubSquare />
                            </a>
                        </IconContext.Provider>
                    </FooterLink>

                    <FooterLink>
                        <IconContext.Provider value={{ color: "#0A66C2", size: "60px" }}>
                            <a href="https://www.linkedin.com/in/miguel-silva-6145071a9/" target="_blank">
                                <FaLinkedin />
                            </a>
                        </IconContext.Provider>
                    </FooterLink>
                </SocialMedia>
                <HrContainer>
                    <FooterHr />
                </HrContainer>
                <FooterText>
                    <h3>&copy; Miguel Silva 2021</h3>
                </FooterText>
            </Container>
        </FooterSection>
    );
};

export default Footer;
