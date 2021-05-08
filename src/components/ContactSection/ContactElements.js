import styled from "styled-components";

export const ContactSection = styled.section`
    min-height: 100vh;
    width: 100%;
    position: relative;
`;

export const BgImg = styled.img`
    width: 100%;
    height: 100vh;
    -o-object-fit: cover;
    object-fit: cover;
    background-attachment: fixed;
    z-index: -1;
`;

export const ContactWrap = styled.div`
    display: flex;
    position: absolute;
    top: 20%;
    left: 36%;
    justify-content: center;
    align-items: center;
    height: 595px;
    width: 600px;
    border-radius: 10px;
    background: rgb(27, 27, 27, 0.2);
    -webkit-box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.6);
    box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.6);

    @media all and (min-width: 1024px) and (max-width: 1280px) {
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
    }

    @media screen and (max-width: 1000px) {
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
    }

    @media screen and (max-width: 768px) {
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
    }
    @media screen and (max-width: 375px) {
        height: 575px;
        width: 300px;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
        padding: 100px;
    }
`;

/*
margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;

*/
