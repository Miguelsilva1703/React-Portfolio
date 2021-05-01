import styled from "styled-components";

export const HeroContainer = styled.div`
  position: relative;
  height: 90vh;
  @media only screen and (max-width: 320px) {
    width: 100%;
  }
`;

export const HeroImageBg = styled.img`
  width: 100%;
  height: 90vh;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  z-index: -1;
`;

export const HeroContents = styled.div`
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
    text-shadow: 0px 3px 10px #000000;
  }

  @media screen and (max-width: 768px) {
    top: 50%;
    right: 25%;
  }

  @media only screen and (max-width: 375px) {
    top: 30%;
    right: 1%;
  }
`;

export const HeroBtns = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
