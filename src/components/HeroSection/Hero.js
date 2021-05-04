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
                        <a href="#" target="_blank">
                            <button>My Resume</button>
                        </a>
                    </HeroBtns>
                </HeroContents>
            </HeroContainer>
        </>
    );
};

export default Hero;
