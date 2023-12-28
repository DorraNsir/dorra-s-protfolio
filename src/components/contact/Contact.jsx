import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

export default function Contact() {
        
        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_3k2n83c', 'template_qg34121', form.current, 'py2sNMq2OtjpbO-9y')
          e.target.reset()
        };
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="ri-mail-send-line contact__card-icon"></i>
              <h3 className="contact__card-title">Email </h3>
              <span className="contact__card-data">dorransir24@gmail.com</span>
              <a href="dorransir24@gmail.com" className="contact__button">
                Write me <i className="ri-arrow-right-fill contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="ri-whatsapp-line contact__card-icon"></i>
              <h3 className="contact__card-title">WhatsApp </h3>
              <span className="contact__card-data">92-456-701</span>
              <a href="https://web.whatsapp.com/" className="contact__button">
                Write me <i className="ri-arrow-right-fill contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="ri-messenger-fill contact__card-icon"></i>
              <h3 className="contact__card-title">Messenger </h3>
              <span className="contact__card-data">Dorra Nsir</span>
              <a href="https://www.messenger.com/" className="contact__button">
                Write me <i className="ri-arrow-right-fill contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">

            <div className="contact__form-div">
              <label  className="contact__form-tag">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact__form-div">
              <label  className="contact__form-tag">
                Mail
              </label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your email"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label  className="contact__form-tag">
                Project
              </label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact__form-input "
                placeholder="Write your project"
              ></textarea>
            </div>

            <button className="button button--flex">
              Send Message
              <i className="ri-send-plane-fill"></i>
            </button>
            
         </form>
        </div>
      </div>
    </section>
  );
}
