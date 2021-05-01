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
  top: 30%;
  left: 36%;
  justify-content: center;
  align-items: center;
  height: 510px;
  width: 600px;
  border-radius: 10px;
  background: rgb(27, 27, 27, 0.2);
  -webkit-box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.6);
  @media screen and (max-width: 1000px) {
    top: 30%;
    left: 15%;
  }

  @media screen and (max-width: 768px) {
    top: 30%;
    left: 10%;
  }
  @media screen and (max-width: 375px) {
    width: 80%;
    top: 20%;
    min-height: 570px;
  }
`;

export const ContactForm = styled.form`
  height: 100%;
  width: 100%;

  @media screen and (max-width: 375px) {
    width: 100%;
  }
`;

export const FormTitle = styled.h1`
  text-align: center;
  font-size: 2rem;
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

  label {
    text-shadow: 0px 2px 10px rgba(0, 0, 0, 1);
    font-size: 1.2rem;
    font-weight: 700;
    color: #de3b0b;
    margin-bottom: 5px;
  }
`;

export const FormInput = styled.input`
  display: block;
  width: 100%;
  height: 30px;
  margin-bottom: 15px;
  font-size: 1rem;
  font-weight: 700;
  -webkit-box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.6);
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
`;

export const BtnWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;
