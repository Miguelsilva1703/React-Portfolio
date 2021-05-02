import React from "react";
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
            <a href="#" download="../../cv/MSilva2020.pdf" target="_blank">
              <button>My Resume</button>
            </a>
          </HeroBtns>
        </HeroContents>
      </HeroContainer>
    </>
  );
};

export default Hero;
