import React from "react";
import {
  ContactSection,
  ContactWrap,
  ContactForm,
  FormTitle,
  FormContents,
  FormInput,
  FormTextArea,
  BgImg,
  BtnWrap,
} from "./ContactElements";
import { ButtonPri } from "../Styles/styles.js";

import contactImg from "../../images/Contact.jpg";

const Contact = () => {
  return (
    <>
      <ContactSection id="contact">
        <BgImg src={contactImg} />
        <ContactWrap>
          <ContactForm>
            <FormTitle>
              <h1>Get in touch</h1>
            </FormTitle>
            <FormContents>
              <label htmlFor="name">Name</label>
              <FormInput type="text" name="name" placeholder="Name" />

              <label htmlFor="email">Email</label>
              <FormInput
                type="email"
                name="email"
                placeholder="Example@noreply.com"
              />

              <label htmlFor="message">Message</label>
              <FormTextArea
                name="message"
                placeholder="Hi there, I'm reaching out because I have this amazing opportunity for you..."
              />
              <BtnWrap>
                <ButtonPri>Submit</ButtonPri>
              </BtnWrap>
            </FormContents>
          </ContactForm>
        </ContactWrap>
      </ContactSection>
    </>
  );
};

export default Contact;
