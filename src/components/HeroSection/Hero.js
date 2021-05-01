import React from "react";
import styled from "styled-components";
import { Layout, Video, ImageBg, ButtonPri } from "../Styles/styles";
import {
  HeroContainer,
  HeroContents,
  HeroBtns,
  HeroImageBg,
} from "./HeroElements";
import warm from "../../images/warm.jpg";

const Hero = () => {
  return (
    <>
      <HeroContainer id="home">
        <HeroImageBg src={warm} />

        <HeroContents>
          <h1>Hi, I'm Miguel</h1>
          <h3>Front-End Developer</h3>
          <HeroBtns>
            <ButtonPri to="../../cv/MSilva2020.pdf">My Resume</ButtonPri>
          </HeroBtns>
        </HeroContents>
      </HeroContainer>
    </>
  );
};

export default Hero;
