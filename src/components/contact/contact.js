import React, { useState } from "react";
import { Alert } from "@mui/material";
import emailjs from "emailjs-com";

function Contact() {
  const [contact, setContact] = useState({
    email: "",
    name: "",
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
          setContact({
            email: "",
            name: "",
            subject: "",
            detail: "",
          });
          console.log("SUCCESS", response.status, response.text);
          setIsSubmitted(true);
        },
        (err) => {
          console.log("FAILED", err);
        }
      );
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-[70vh] w-4/5">
      <form
        className="flex flex-col justify-center items-center text-center bg-[#f2f2f2] p-[20px] rounded-[5px] m-auto w-[90%] max-w-[500px]"
        onSubmit={handleSubmit}
        data-testid="contact-form"
      >
        <h2 className="text-2xl">Looking for me?</h2>
        <p>Leave your details and a message, and I'll get right back to you</p>
        <input
          className="w-full mx-[0] my-[10px] p-[10px] border-[none] rounded-[5px] box-border"
          type="email"
          value={contact.email}
          name="email"
          placeholder="Email"
          onChange={handleChange}
          aria-label="Email"
        ></input>
        <input
          className="w-full mx-[0] my-[10px] p-[10px] border-[none] rounded-[5px] box-border"
          type="text"
          value={contact.name}
          name="name"
          placeholder="Name"
          onChange={handleChange}
          aria-label="Name"
        ></input>
        <input
          className="w-full mx-[0] my-[10px] p-[10px] border-[none] rounded-[5px] box-border"
          type="text"
          value={contact.subject}
          name="subject"
          placeholder="Subject"
          onChange={handleChange}
          aria-label="Subject"
        ></input>
        <input
          className="w-full mx-[0] h-[200px] my-[10px] p-[10px] border-[none] rounded-[5px] box-border"
          type="text"
          value={contact.detail}
          name="detail"
          placeholder="What's on your mind?"
          onChange={handleChange}
          aria-label="Message"
        ></input>
        <button
          className="mx-[0] my-[20px] text-[white] bg-[linear-gradient(to_bottom_right,_#ff416c,_#ff4b2b)] border-[none] rounded-[20px] px-[20px] py-[10px] text-[1.2rem] cursor-pointer [transition:transform_0.3s_ease,_box-shadow_0.3s_ease] hover:-translate-y-[2px] hover:[box-shadow:0_5px_10px_rgba(0,_0,_0,_0.2)]"
          type="submit"
        >
          Submit
        </button>
        {isSubmitted ? (
          <Alert severity="success">
            Always happy to hear from you. Chat soon.
          </Alert>
        ) : null}
      </form>
    </div>
  );
}

export default Contact;
