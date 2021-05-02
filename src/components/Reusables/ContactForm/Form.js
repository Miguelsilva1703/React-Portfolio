import React from "react";
import emailjs from "emailjs-com";
import { StyledForm, FormTitle, FormContents, FormInput, FormTextArea } from "./FormElements";

export default function ContactForm() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm("service_zxv1u3d", "PortfolioContactMessage", e.target, "user_DUu26qQjnSjrrPEVXlleg").then(
            (result) => {
                alert("Email Sent");
            },
            (error) => {
                console.log(error.text);
            }
        );
        e.target.reset();
    }

    return (
        <StyledForm onSubmit={sendEmail}>
            <FormTitle>Get in Touch</FormTitle>
            <FormContents>
                <div className="name">
                    <label htmlFor="name">Name</label>
                    <FormInput type="text" className="form-control" placeholder="Name" name="name" />
                </div>

                <div className="email">
                    <label htmlFor="email">Email</label>
                    <FormInput type="text" className="form-control" placeholder="Example@noreply.com" name="email" />
                </div>

                <div className="subject">
                    <label htmlFor="subject">Subject</label>
                    <FormInput type="text" className="form-control" placeholder="Subject" name="subject" />
                </div>

                <div className="message">
                    <label htmlFor="message">Message</label>
                    <FormTextArea type="text" className="form-control" placeholder="Your message" name="message"></FormTextArea>
                </div>
                <button type="submit">Send Message</button>
            </FormContents>
        </StyledForm>
    );
}
