import React from "react";
import { IconContext } from "react-icons";
import { ProjectSection, ProjectsTitle, Card, CardHeader, CardImg, CardBtns } from "./ProjectsBootstrapElements";
import soon from "../../images/comingsoon.webp";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineEye } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";

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
                                <CardHeader>
                                    <CardImg src={soon} />
                                </CardHeader>

                                <CardBtns>
                                    <button>View Project</button>
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
                                </CardBtns>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardHeader>
                                    <CardImg src={soon} />
                                </CardHeader>

                                <CardBtns>
                                    <button>View Project</button>
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
                                </CardBtns>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardHeader>
                                    <CardImg src={soon} />
                                </CardHeader>

                                <CardBtns>
                                    <button>View Project</button>
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
                                </CardBtns>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardHeader>
                                    <CardImg src={soon} />
                                </CardHeader>

                                <CardBtns>
                                    <button>View Project</button>
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
