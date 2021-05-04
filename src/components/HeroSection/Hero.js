import { React } from "react";
import { HeroContainer, HeroContents, HeroBtns, HeroImageBg } from "./HeroElements";
import warm from "../../images/warm.jpg";
import { useSpring, animated } from "react-spring";

const Hero = () => {
    const fade = useSpring({
        from: { opacity: 0, y: 800 },
        to: {
            opacity: 1,
            y: -5,
        },
        config: {
            delay: 1000,
            duration: 1000,
        },
    });

    return (
        <>
            <HeroContainer id="home">
                <HeroImageBg src={warm} />

                <HeroContents>
                    <animated.div style={fade}>
                        <h1>Hi, I'm Miguel</h1>
                        <h3>Front-End Developer</h3>
                    </animated.div>

                    <HeroBtns>
                        <a href="https://docs.google.com/document/d/1RmtW75eTc0lwHk6FfuRa3zHr-ddC82kjbuf3Y-UMQUs/edit?usp=sharing" target="_blank" rel="noreferrer">
                            <button>My Resume</button>
                        </a>
                    </HeroBtns>
                </HeroContents>
            </HeroContainer>
        </>
    );
};

export default Hero;
