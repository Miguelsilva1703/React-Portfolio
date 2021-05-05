import { React } from "react";
import { HeroContainer, HeroContents, HeroBtns, HeroBg, HeroImageBg, IconArea, IconLink } from "./HeroElements";
import warm from "../../images/warm.jpg";
import { useSpring, animated } from "react-spring";
import { BsChevronDown } from "react-icons/bs";
import { IconContext } from "react-icons";

const Hero = () => {
    const fadeH1 = useSpring({
        from: { opacity: 0, x: -900 },
        to: {
            opacity: 1,
            x: 5,
        },
        config: {
            delay: 1000,
            duration: 2000,
        },
    });

    const fadeH3 = useSpring({
        from: { opacity: 0, x: 800 },
        to: {
            opacity: 1,
            x: -5,
        },
        config: {
            duration: 2000,
        },
        delay: 1000,
    });

    const fadeBtns = useSpring({
        from: { opacity: 0 },
        to: {
            opacity: 1,
        },
        config: {
            duration: 2000,
        },
        delay: 2900,
    });

    const fadeIcon = useSpring({
        loop: true,
        to: [{ y: 0 }, { y: 5 }],
        from: { y: 5 },
        config: {
            duration: 550,
        },
        delay: 100,
    });

    return (
        <>
            <HeroContainer id="home">
                <HeroBg>
                    <HeroImageBg src={warm} />
                </HeroBg>

                <HeroContents>
                    <animated.div>
                        <animated.h1 style={fadeH1}>Hi, I'm Miguel</animated.h1>
                        <animated.h3 style={fadeH3}>Front-End Developer</animated.h3>
                    </animated.div>

                    <animated.div style={fadeBtns}>
                        <HeroBtns>
                            <a href="https://drive.google.com/file/d/1FoI4WcDGB8841lYPMnk5tmMSaQCFF9Jz/view?usp=sharing" target="_blank" rel="noreferrer">
                                <button>My Resume</button>
                            </a>
                        </HeroBtns>

                        <IconArea>
                            <animated.div style={fadeIcon}>
                                <IconContext.Provider value={{ color: "#d5d5d5", size: "60px" }}>
                                    <IconLink to="projects" smooth={true} duration={500} spy={true} exact="true" offset={0}>
                                        {" "}
                                        <BsChevronDown />
                                    </IconLink>
                                </IconContext.Provider>
                            </animated.div>
                        </IconArea>
                    </animated.div>
                </HeroContents>
            </HeroContainer>
        </>
    );
};

export default Hero;
