import React from "react";
import { IconContext } from "react-icons";
import { ProjectSection, ProjectsTitle, Card, CardHeader, CardImg, CardTitle, CardDescription, CardBtns } from "./ProjectsBootstrapElements";
import soon from "../../images/comingsoon.webp";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineEye } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import Project1 from "../../images/Project1.png";
import VirtualBank from "../../images/VirtualBank.png";
import mediaPlayer from "../../images/mediaPlayer.png";

const ProjectsBoot = () => {
    return (
        <>
            <ProjectSection id="projects">
                <Row>
                    <ProjectsTitle>
                        <h1>
                            <span>My</span> Projects.
                        </h1>
                    </ProjectsTitle>
                </Row>
                <Container fluid>
                    <Row>
                        <Col>
                            <Card>
                                <CardTitle>
                                    <h1>BoniFood</h1>
                                </CardTitle>
                                <CardHeader>
                                    <CardImg src={Project1} />
                                </CardHeader>

                                <CardDescription>
                                    <p>Created a website for a fictional restaurant using HTML and CSS only. My very first project.</p>
                                </CardDescription>

                                <CardBtns>
                                    <div>
                                        <a href="https://mystifying-wright-a31e22.netlify.app/" target="_blank" rel="noreferrer">
                                            <button>View Project</button>
                                        </a>
                                        <div className="IconPosTop">
                                            <IconContext.Provider value={{ color: "#d5d5d5", size: "30px" }}>
                                                <AiOutlineEye />
                                            </IconContext.Provider>
                                        </div>

                                        <div className="IconPosbottom">
                                            <IconContext.Provider value={{ color: "#d5d5d5", size: "25px" }}>
                                                <FiGithub />
                                            </IconContext.Provider>
                                        </div>

                                        <a href="https://github.com/Miguelsilva1703/Bonifood-Project" target="_blank" rel="noreferrer">
                                            <button>GitHub</button>
                                        </a>
                                    </div>
                                </CardBtns>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardTitle>
                                    <h1>DCO Bank</h1>
                                </CardTitle>
                                <CardHeader>
                                    <CardImg src={VirtualBank} />
                                </CardHeader>
                                <CardDescription>
                                    <p>Site for fictional virtual bank created using React, Bootstrap, JSX, CSS and JavaScript.</p>
                                </CardDescription>

                                <CardBtns>
                                    <div>
                                        <a href="https://heuristic-newton-bdcdae.netlify.app/" target="_blank" rel="noreferrer">
                                            <button>View Project</button>
                                        </a>
                                        <div className="IconPosTop">
                                            <IconContext.Provider value={{ color: "#d5d5d5", size: "30px" }}>
                                                <AiOutlineEye />
                                            </IconContext.Provider>
                                        </div>

                                        <div className="IconPosbottom">
                                            <IconContext.Provider value={{ color: "#d5d5d5", size: "25px" }}>
                                                <FiGithub />
                                            </IconContext.Provider>
                                        </div>

                                        <a href="https://github.com/Miguelsilva1703/DCO-Bank" target="_blank" rel="noreferrer">
                                            <button>GitHub</button>
                                        </a>
                                    </div>
                                </CardBtns>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardTitle>
                                    <h1>Media Player</h1>
                                </CardTitle>
                                <CardHeader>
                                    <CardImg src={mediaPlayer} />
                                </CardHeader>
                                <CardDescription>
                                    <p>Created my own media player using React, Bootstrap, JSX, CSS and JavaScript.</p>
                                </CardDescription>

                                <CardBtns>
                                    <div>
                                        <a href="https://dreamy-bose-df7123.netlify.app/" target="_blank" rel="noreferrer">
                                            <button>View Project</button>
                                        </a>
                                        <div className="IconPosTop">
                                            <IconContext.Provider value={{ color: "#d5d5d5", size: "30px" }}>
                                                <AiOutlineEye />
                                            </IconContext.Provider>
                                        </div>

                                        <div className="IconPosbottom">
                                            <IconContext.Provider value={{ color: "#d5d5d5", size: "25px" }}>
                                                <FiGithub />
                                            </IconContext.Provider>
                                        </div>
                                        <a href="https://github.com/Miguelsilva1703/My-music-player" target="_blank" rel="noreferrer">
                                            <button>Github</button>
                                        </a>
                                    </div>
                                </CardBtns>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardHeader>
                                    <CardImg src={soon} />
                                </CardHeader>

                                <CardBtns>
                                    <div>
                                        <a href="/#" target="_blank" rel="noreferrer">
                                            <button>View Project</button>
                                        </a>
                                        <div className="IconPosTop">
                                            <IconContext.Provider value={{ color: "#d5d5d5", size: "30px" }}>
                                                <AiOutlineEye />
                                            </IconContext.Provider>
                                        </div>

                                        <div className="IconPosbottom">
                                            <IconContext.Provider value={{ color: "#d5d5d5", size: "25px" }}>
                                                <FiGithub />
                                            </IconContext.Provider>
                                        </div>

                                        <button>Github</button>
                                    </div>
                                </CardBtns>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </ProjectSection>
        </>
    );
};

export default ProjectsBoot;
