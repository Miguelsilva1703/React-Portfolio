import styled from "styled-components";

export const StyledForm = styled.form`
    height: 100%;
    width: 100%;

    @media screen and (max-width: 375px) {
        width: 100%;
    }
`;

export const FormTitle = styled.h1`
    text-align: center;
    font-size: 2.9rem;
    margin-top: 25px;
    color: #d5d5d5;
    text-shadow: 0px 2px 10px rgba(150, 150, 150, 1);
    text-transform: uppercase;
    h1 {
        font-weight: 700;
    }
`;

export const FormContents = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;

    div {
        margin-bottom: 5px;
    }

    label {
        text-shadow: 0px 2px 10px rgba(0, 0, 0, 1);
        font-size: 1.2rem;
        font-weight: 700;
        color: #de3b0b;
    }
    button {
        display: flex;
        align-self: center;
        background: #ff6600;
        color: #d5d5d5;
        align-items: center;
        text-transform: uppercase;
        border: 1px solid rgba(0, 0, 0, 0.64);
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
        padding: 5px;
        width: 25%;
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

export const FormInput = styled.input`
    display: block;
    width: 100%;
    height: 30px;
    margin-bottom: 15px;
    margin-top: 5px;
    font-size: 1rem;
    font-weight: 700;
    -webkit-box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.6);
    box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.6);
    border-radius: 5px;
`;

export const FormTextArea = styled.textarea`
    background-color: #eee;
    width: 100%;
    min-height: 100px;
    resize: none;
    font-size: 1rem;
    font-weight: 700;
    -webkit-box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.6);
    box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.6);
    border-radius: 5px;
    margin-top: 5px;
`;
