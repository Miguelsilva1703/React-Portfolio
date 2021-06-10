import { React } from "react";
import { HeroSection, HeroBg, HeroImageBg, HeroContents, HeroBtns, IconArea, IconLink } from "./HeroBootElements";
import warm from "../../images/warm.jpg";
import { Container, Row, Col } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { BsChevronDown } from "react-icons/bs";
import { IconContext } from "react-icons";

const HeroBoot = () => {
    const fadeH1 = useSpring({
        from: { opacity: 0 },
        to: {
            opacity: 1,
        },
        config: {
            delay: 1150,
            duration: 2000,
        },
    });

    const fadeH3 = useSpring({
        from: { opacity: 0 },
        to: {
            opacity: 1,
        },
        config: {
            duration: 2000,
        },
        delay: 700,
    });

    const fadeBtns = useSpring({
        from: { opacity: 0 },
        to: {
            opacity: 1,
        },
        config: {
            duration: 2000,
        },
        delay: 3000,
    });

    const fadeIcon = useSpring({
        loop: true,
        to: [{ y: 0 }, { y: 5 }],
        from: { y: 5 },
        config: {
            duration: 550,
        },
        delay: 200,
    });

    return (
        <>
            <HeroSection id="home">
                <Container fluid>
                    <HeroBg>
                        <HeroImageBg src={warm} />
                    </HeroBg>
                    <Row className="vertRow">
                        <Col>
                            <HeroContents>
                                <animated.div>
                                    <animated.h1 style={fadeH1}>Hi, I'm Miguel</animated.h1>
                                    <animated.h3 style={fadeH3}>Front-End Developer</animated.h3>
                                </animated.div>

                                <animated.div style={fadeBtns}>
                                    <HeroBtns>
                                        <a href="https://docs.google.com/document/d/1iJy797Rh4j10x95meG_UbErD4V1KQsHeoHpP1muQdxk/edit?usp=sharing" target="_blank" rel="noreferrer">
                                            <button>My Resume</button>
                                        </a>
                                    </HeroBtns>

                                    <IconArea>
                                        <animated.div style={fadeIcon}>
                                            <IconContext.Provider value={{ color: "#d5d5d5", size: "60px" }}>
                                                <IconLink to="projects" smooth={true} duration={500} spy={true} offset={-80}>
                                                    {" "}
                                                    <BsChevronDown />
                                                </IconLink>
                                            </IconContext.Provider>
                                        </animated.div>
                                    </IconArea>
                                </animated.div>
                            </HeroContents>
                        </Col>
                    </Row>
                </Container>
            </HeroSection>
        </>
    );
};

export default HeroBoot;
