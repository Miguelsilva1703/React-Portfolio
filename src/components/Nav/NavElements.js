import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Stylednav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    margin-top: -80px !important;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 2rem;
    background: #282828;
    position: sticky;
    top: 0;
    z-index: 10;
    .logoSpan {
        color: #de3b0b;
        font-size: 2rem;
    }
    span {
        font-size: 1.3rem;
        font-weight: 700;
        letter-spacing: 2px;
    }
    #logo {
        font-size: 1.7rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
    }
    @media screen and (max-width: 768px) {
        padding: 0.5rem 1rem;
    }
`;

export const NavLogo = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    justify-self: flex-start;
    justify-content: flex-start;
    text-decoration: none;
    height: 100%;
    cursor: pointer;
    @media screen and (max-width: 768px) {
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;

    @media screen and (max-width: 850px) {
    }
`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #de3b0b;
    }
`;

/* export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #de3b0b;
    }
`;*/
