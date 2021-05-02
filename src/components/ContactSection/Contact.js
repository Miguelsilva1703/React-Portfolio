import { React, useState } from "react";
import {
  ContactSection,
  ContactWrap,
  FormTitle,
  FormContents,
  FormInput,
  FormTextArea,
  BgImg,
  BtnWrap,
} from "./ContactElements";
import { ButtonPri } from "../Styles/styles.js";
import contactImg from "../../images/Contact.jpg";
import ContactForm from "../Reusables/ContactForm/Form";

const Contact = () => {
  return (
    <>
      <ContactSection id="contact">
        <BgImg src={contactImg} />
        <ContactWrap>
          <ContactForm />
        </ContactWrap>
      </ContactSection>
    </>
  );
};

export default Contact;

/*

const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  };



Render section:

<ContactForm onSubmit={handleSubmit}>
            <FormTitle>
              <h1>Get in touch</h1>
            </FormTitle>
            <FormContents>
              <label htmlFor="name">Name</label>
              <FormInput
                type="text"
                name="name"
                placeholder="Name"
                value={state}
                onChange="#"
              />

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
                <button type="submit">Send</button>
                {submitting && (
                  <div>
                    <span style={{ color: "#74C8FF", fontWeight: "bold" }}>
                      Submitting Form...
                    </span>
                  </div>
                )}
              </BtnWrap>
            </FormContents>
          </ContactForm>



*/
