import React, { useEffect, useRef } from "react";
import "./Contact.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wifym5f",
        "template_vpj68ye",
        form.current,
        "1HFYum5bWMI7fqmop"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.alert("Message was sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="containerContacts">
      <div className="bannerProduct">
        <h2>Do you need any help?</h2>
        <span>contact us!</span>
      </div>
      <form ref={form} onSubmit={sendEmail} id="form" class="topBefore">
        <label>Name</label>
        <input id="name" type="text" name="user_name" />
        <label>Email</label>
        <input id="email" type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input id="message" type="submit" value="Send" />
      </form>
      <div className="imgContainer">
        <img data-aos="fade-right" src="/img/ig.png" alt="" className="phone" />
        <div data-aos="fade-left" className="iconContainer">
          <div className="info">
            <img src="/img/git.png" alt="" />
            <span>StepankaBla</span>
          </div>
          <div className="info">
            <img src="/img/igLogo.png" alt="" />
            @bb__art
          </div>
          <div className="info">
            {" "}
            <img src="/img/gmail.avif" alt="" />
            bbeshop.art@gmail.com
          </div>
        </div>
      </div>
 
    </div>
  );
};

export default Contact;
