import React from "react";
import { TechStackSection } from "./TechStackElements";
import { Container, Row, Col } from "react-bootstrap";
import { FaHtml5, FaCss3, FaReact, FaSass, FaGulp, FaJsSquare, FaBootstrap, FaPhp } from "react-icons/fa";
import { IconContext } from "react-icons";

const TechStack = () => {
    return (
        <TechStackSection>
            <Row className="TechTitle">
                <h1>My Tech Stack</h1>
            </Row>

            <Container className="TechIcons">
                <Row className="TechTop">
                    <Col className="TechStackItem">
                        <IconContext.Provider value={{ color: "#e54d26", size: "60px" }}>
                            <FaHtml5 />
                            HTML5
                        </IconContext.Provider>
                    </Col>
                    <Col className="TechStackItem">
                        <IconContext.Provider value={{ color: "#2163af", size: "60px" }}>
                            <FaCss3 />
                            CSS
                        </IconContext.Provider>
                    </Col>
                    <Col className="TechStackItem">
                        <IconContext.Provider value={{ color: "#cd6799", size: "60px" }}>
                            <FaSass />
                            SASS
                        </IconContext.Provider>
                    </Col>
                    <Col className="TechStackItem">
                        <IconContext.Provider value={{ color: "#563d7c", size: "60px" }}>
                            <FaBootstrap />
                            Bootstrap
                        </IconContext.Provider>
                    </Col>
                </Row>{" "}
                <Row className="TechBottom">
                    <Col className="TechStackItem">
                        <IconContext.Provider value={{ color: "#e7c62f", size: "60px" }}>
                            <FaJsSquare />
                            JavaScript
                        </IconContext.Provider>
                    </Col>
                    <Col className="TechStackItem">
                        <IconContext.Provider value={{ color: "#61dbfb", size: "60px" }}>
                            <FaReact />
                            REACT
                        </IconContext.Provider>
                    </Col>
                    <Col className="TechStackItem">
                        <IconContext.Provider value={{ color: "#c94444", size: "60px" }}>
                            <FaGulp />
                            GULP
                        </IconContext.Provider>
                    </Col>
                    <Col className="TechStackItem">
                        <IconContext.Provider value={{ color: "#3279B6", size: "60px" }}>
                            <FaPhp />
                            PHP
                        </IconContext.Provider>
                    </Col>
                </Row>
            </Container>
        </TechStackSection>
    );
};

export default TechStack;
