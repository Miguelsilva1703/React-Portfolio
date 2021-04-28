import { React } from "react";
import styled from "styled-components";

export const ProjectSection = styled.section`
  height: 100vh;
  padding: 1rem;
  color: white;
  position: relative;
`;

export const ProjectsTitle = styled.div`
  display: flex;
  margin: 5rem auto;
  font-size: 3rem;
  align-items: center;
  justify-content: center;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.92);
  span {
    color: #de3b0b;
  }
`;

export const ProjectsArea = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
`;

export const Card = styled.div`
  overflow: hidden;
  text-align: center;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  -webkit-box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  background: #4f4f4f;
  &:hover {
    -webkit-box-shadow: 0px 5px 10px 20px rgba(0, 0, 0, 0.9);
    box-shadow: 0px 5px 10px 20px rgba(0, 0, 0, 0.9);
  }
`;
export const CardHeader = styled.div`
  height: 250px;
`;
export const CardImg = styled.img`
  height: 100%;
  width: 100%;
`;
export const CardTitle = styled.header`
  padding-top: 10px;
  padding: 15px 10px 10px 10px;
`;
export const CardDescription = styled.div`
  padding: 0 10px 10px 10px;
`;
export const CardBtns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
