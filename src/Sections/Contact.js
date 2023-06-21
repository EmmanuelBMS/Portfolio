import React from 'react';
import '../Styles/Contact.css';
import TEXTURE from '../Assets/TEXTURE.jpg';
import SendEmailForm from '../Components/SendEmailForm';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-section-main-div">
        <img
          className="contact-section-background"
          src={TEXTURE}
          alt="Textura do fundo do site"
        />
        <div className="contact-section-tittle-div">
          <h2>Contato</h2>
          <div className="contact-tittle-underline" />
          <h4>
            Use esse espaço para entrar em contato diretamente comigo através de um email rápido.
          </h4>
        </div>
        <div className="contact-form-main-div">
          <SendEmailForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
