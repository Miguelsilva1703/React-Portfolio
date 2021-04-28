import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <Stylednav>
      <Link to="/" id="logo">
        <h1>
          <span className="logoSpan">MS</span> Dev
        </h1>
      </Link>

      <ul>
        <li>
          <Link to="/" exact>
            {" "}
            <span>Home</span>
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "50%" : "0%" }}
          />
        </li>

        <li>
          <Link to="/projects" exact>
            <span>Projects</span>
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/projects" ? "50%" : "0%" }}
          />
        </li>

        <li>
          <Link to="/contact">
            <span>Contact</span>
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
          />
        </li>
      </ul>
    </Stylednav>
  );
};

const Stylednav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  .logoSpan {
    color: #de3b0b;
    font-size: 2rem;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  a {
    color: white;
    text-decoration: none;
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
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #de3b0b;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 65%;
`;

export default Nav;
