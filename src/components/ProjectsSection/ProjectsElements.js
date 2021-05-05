import styled from "styled-components";

export const ProjectSection = styled.section`
    margin-top: 3rem;
    margin-bottom: 3rem;
    min-height: 100vh;
    padding: 1rem;
    color: white;
    position: relative;
`;

export const ProjectsTitle = styled.div`
    display: flex;
    margin: 2rem auto 8rem auto;
    font-size: 3rem;
    align-items: center;
    justify-content: center;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.92);
    span {
        color: #de3b0b;
    }
`;

export const ProjectsArea = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    margin-bottom: 8rem;
`;

export const Card = styled.div`
    text-align: center;
    padding: 0 0 32px;
    margin: 48px auto;
    width: 300px;
    font-family: Quicksand, arial, sans-serif;
    -webkit-box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    background: #4f4f4f;
    &:hover {
        -webkit-box-shadow: 0px 5px 10px 20px rgba(0, 0, 0, 0.9);
        box-shadow: 0px 5px 10px 20px rgba(0, 0, 0, 0.9);
    }
    @media all and (min-width: 1024px) and (max-width: 1280px) {
        margin: 48px auto 0;
    }
`;

export const CardHeader = styled.div`
    height: 250px;
`;

export const CardImg = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 4px;
`;

export const CardTitle = styled.header`
    padding-top: 10px;
    padding: 15px 10px 10px 10px;
`;

export const CardDescription = styled.div`
    padding: 0 10px 10px 10px;
`;

export const CardBtns = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    button {
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
    }
`;
