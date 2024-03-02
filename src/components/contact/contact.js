import React, { useState } from "react";
import { Alert } from "@mui/material";
import emailjs from "emailjs-com";
import "./contact.css";

function Contact() {
  const [contact, setContact] = useState({
    email: "",
    subject: "",
    detail: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(e) {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (response) => {
          console.log("SUCCESS", response.status, response.text);
          setIsSubmitted(true);
        },
        (err) => {
          console.log("FAILED", err);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Looking for me?</h2>
        <p>Leave your details and a message, and I'll right back to you</p>
        <input
          className="contact-email"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        ></input>
        <input
          className="contact-name"
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        ></input>
        <input
          className="contact-subject"
          type="text"
          name="subject"
          placeholder="Subject"
          onChange={handleChange}
        ></input>
        <input
          className="contact-text"
          type="text"
          name="detail"
          placeholder="What's on your mind?"
          onChange={handleChange}
        ></input>
        <button type="submit">Submit</button>
        {isSubmitted ? (
          <Alert severity="success">Contact made. Don't wait up.</Alert>
        ) : null}
      </form>
    </div>
  );
}

export default Contact;
