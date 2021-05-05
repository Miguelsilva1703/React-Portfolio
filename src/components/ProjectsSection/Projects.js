import React from "react";
import { ProjectSection, ProjectsTitle, ProjectsArea, Card, CardHeader, CardImg, CardTitle, CardDescription, CardBtns, TopSpacer } from "./ProjectsElements.js";
import soon from "../../images/comingsoon.webp";

const Projects = () => {
    return (
        <>
            <ProjectSection id="projects">
                <TopSpacer />
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
                            <button>Project</button>
                            <button>Github</button>
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
                            <button>Project</button>
                            <button>Github</button>
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
                            <button>Project</button>
                            <button>Github</button>
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
                            <button>Project</button>
                            <button>Github</button>
                        </CardBtns>
                    </Card>
                </ProjectsArea>
            </ProjectSection>
        </>
    );
};

export default Projects;
