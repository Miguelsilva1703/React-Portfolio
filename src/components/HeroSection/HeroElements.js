import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const HeroContainer = styled.section`
    position: relative;
    min-height: 100vh;
    width: 100vw;
    overflow-x: hidden;

    @media screen and (max-width: 320px) {
        width: 100%;
    }
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
`;

export const HeroImageBg = styled.img`
    width: 100%;
    height: 100vh;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    z-index: -1;
`;

export const HeroContents = styled.div`
    position: absolute;
    top: 67%;
    right: 40%;
    margin: 0 auto;
    text-align: center;

    color: #d5d5d5;
    h1 {
        font-size: 4rem;
        text-shadow: 3px 5px 2px #000, 6px 7px 9px rgba(0, 0, 0, 0.6);
    }
    h3 {
        font-size: 2rem;
        text-shadow: 0px 3px 10px #000000;
    }

    @media all and (min-width: 1024px) and (max-width: 1280px) {
        top: 72%;
        left: 45%;
        h1 {
            font-size: 1.8rem;
            text-shadow: 3px 5px 2px #000, 6px 7px 9px rgba(0, 0, 0, 0.6);
        }
        h3 {
            font-size: 1rem;
            text-shadow: 0px 3px 10px #000000;
        }
    }

    @media screen and (max-width: 768px) {
        top: 50%;
        right: 25%;
    }

    @media only screen and (max-width: 375px) {
        top: 30%;
        right: 1%;
    }
`;

export const HeroBtns = styled.div`
    display: flex;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    a {
        text-decoration: none;
    }
    button {
        display: flex;
        background: #ff6600;
        color: #d5d5d5;
        align-items: center;
        text-transform: uppercase;
        border: 1px solid rgba(0, 0, 0, 0.64);
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
        padding: 5px;
        width: 200px;
        height: 40px;
        font-size: 1.1rem;
        font-weight: 900;
        border-radius: 15px;
        margin: 15px 0 15px 0;
        -webkit-box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.44);
        box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.44);
        justify-content: center;
        cursor: pointer;
        &:hover {
            -webkit-box-shadow: 0px 5px 10px 5px #000000;
            box-shadow: 0px 5px 20px 5px #000000;
            background: #de3b0b;
        }
        @media all and (min-width: 1024px) and (max-width: 1280px) {
            margin: 5px 0 15px 0;
        }
    }
`;

export const IconArea = styled.div`
    position: relative;
    div {
        position: absolute;
        left: 38.5%;
    }

    @media all and (min-width: 1024px) and (max-width: 1280px) {
        top: 40%;
        left: -13%;
    }
`;

export const IconLink = styled(LinkS)`
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
`;
