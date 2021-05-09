import styled from "styled-components";

export const FooterSection = styled.section`
    height: 300px;
    width: 100%;
    background-color: #1b1b1b;
`;

export const Container = styled.div`
    padding: 10px;
`;

export const SocialMedia = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
`;

export const FooterLink = styled.a`
    cursor: pointer;
    margin-right: 30px;
`;

export const HrContainer = styled.div`
    position: relative;
`;

export const FooterHr = styled.hr`
    width: 80%;
    margin: 0.2rem auto;
    height: 2px;
    background-color: #fff;

    @media screen and (max-width: 375px) {
        position: absolute;
        left: 10%;
    }
`;

export const FooterText = styled.div`
    padding: 30px;
    text-align: center;
    h3 {
        font-size: 1.3rem;
        color: #d5d5d5;
    }

    @media screen and (max-width: 375px) {
        position: absolute;
        left: 0;
        h3 {
            font-size: 1.3rem;
            color: #d5d5d5;
        }
    }
`;
