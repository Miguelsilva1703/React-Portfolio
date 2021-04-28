import React from "react";
import styled from "styled-components";
import { Layout, Video, ImageBg, ButtonPri } from "./Styles/styles";
import warm from "../images/warm.jpg";

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <ImageBg src={warm} />

        <HeroContents>
          <h1>Hi, I'm Miguel</h1>
          <h3>Front-End Developer</h3>
          <HeroBtns>
            <ButtonPri to="#">My Resume</ButtonPri>
            <ButtonPri to="/projects">My Projects</ButtonPri>
          </HeroBtns>
        </HeroContents>
      </HeroContainer>
    </>
  );
};

const HeroContainer = styled.div`
  position: relative;
`;

const HeroContents = styled.div`
  position: absolute;
  top: 60%;
  right: 40%;
  margin: 0 auto;
  text-align: center;

  color: #d5d5d5;
  h1 {
    font-size: 4rem;
    text-shadow: 3px 5px 2px #000, 6px 7px 9px rgba(0, 0, 0, 0.6);
  }
  h3 {
    font-size: 2rem;
    text-shadow: 3px 5px 2px #000, 6px 7px 9px rgba(0, 0, 0, 0.6);
  }
`;

const HeroBtns = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Hero;
//style={{ backgroundImage: `url(${warm})` }}
