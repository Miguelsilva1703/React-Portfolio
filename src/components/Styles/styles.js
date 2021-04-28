import styled from "styled-components";
import { motion } from "framer-motion";
import { Link as LinkS } from "react-scroll";

export const Layout = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  position: relative;
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;

  h2 {
    font-weight: lighter;
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const ImageBg = styled.img`
  width: 100%;
  height: 90vh;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  z-index: -1;
`;

export const Hide = styled.div`
  overflow: hidden;
`;

export const Video = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: fixed;
`;

export const ButtonPri = styled(LinkS)`
  display: flex;
  background: #ff6600;
  color: #d5d5d5;
  align-items: center;
  text-transform: uppercase;
  border: 1px solid rgba(0, 0, 0, 0.64);
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  padding: 5px;
  width: 85%;
  height: 40px;
  font-size: 1.1rem;
  font-weight: 900;
  border-radius: 15px;
  margin: 10px 0 0 0;
  -webkit-box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.44);
  box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.44);
  justify-content: center;
  cursor: pointer;
  &:hover {
    -webkit-box-shadow: 0px 5px 10px 5px #000000;
    box-shadow: 0px 5px 20px 5px #000000;
    background: #de3b0b;
  }
`;
