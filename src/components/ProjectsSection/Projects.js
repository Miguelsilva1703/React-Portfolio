import React from "react";
import styled from "styled-components";
import { ButtonPri } from "../Styles/styles";
import {
  ProjectSection,
  ProjectsTitle,
  ProjectsArea,
  Card,
  CardHeader,
  CardImg,
  CardTitle,
  CardDescription,
  CardBtns,
} from "./ProjectsElements.js";
import soon from "../../images/comingsoon.webp";

const Projects = () => {
  return (
    <>
      <ProjectSection>
        <ProjectsTitle>
          <h1>
            <span>My</span> Projects.
          </h1>
        </ProjectsTitle>
        <ProjectsArea>
          <Card>
            <CardHeader>
              <CardImg src={soon} />
            </CardHeader>
            <CardTitle>
              <h1>This is a title</h1>
            </CardTitle>
            <CardDescription>
              <p>This is a description</p>
            </CardDescription>
            <CardBtns>
              <ButtonPri>button1</ButtonPri>
              <ButtonPri>button2</ButtonPri>
            </CardBtns>
          </Card>

          <Card>
            <CardHeader>
              <CardImg src={soon} />
            </CardHeader>
            <CardTitle>
              <h1>This is a title</h1>
            </CardTitle>
            <CardDescription>
              <p>This is a description</p>
            </CardDescription>
            <CardBtns>
              <ButtonPri>button1</ButtonPri>
              <ButtonPri>button2</ButtonPri>
            </CardBtns>
          </Card>

          <Card>
            <CardHeader>
              <CardImg src={soon} />
            </CardHeader>
            <CardTitle>
              <h1>This is a title</h1>
            </CardTitle>
            <CardDescription>
              <p>This is a description</p>
            </CardDescription>
            <CardBtns>
              <ButtonPri>button1</ButtonPri>
              <ButtonPri>button2</ButtonPri>
            </CardBtns>
          </Card>

          <Card>
            <CardHeader>
              <CardImg src={soon} />
            </CardHeader>
            <CardTitle>
              <h1>This is a title</h1>
            </CardTitle>
            <CardDescription>
              <p>This is a description</p>
            </CardDescription>
            <CardBtns>
              <ButtonPri>button1</ButtonPri>
              <ButtonPri>button2</ButtonPri>
            </CardBtns>
          </Card>
        </ProjectsArea>
      </ProjectSection>
    </>
  );
};

export default Projects;
