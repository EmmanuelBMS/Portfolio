import React from 'react';
import '../Styles/Contact.css';
import TEXTURE from '../Assets/TEXTURE.jpg';

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
            Nesta seção você consegue entrar em contato diretamente comigo através de email.
          </h4>
        </div>
        <div className="contact-form-main-div">
          <form>
            <div>
              <label htmlFor="name">
                Nome
                <input type="text" id="name" placeholder="Escreva seu nome" />
              </label>
            </div>
            <div>
              <label htmlFor="email">
                Email
                <input type="text" id="email" placeholder="Escreva seu email" />
              </label>
            </div>
            <div>
              <label htmlFor="message">
                Mensagem
                <textarea
                  type="textarea"
                  id="message"
                  placeholder="Escreva sua mensagem (máximo 500 caracteres)"
                  maxLength={500}
                  required="required"
                  rows={10}
                  cols={30}
                />
              </label>
            </div>
            <div className="contact-button-div">
              <button type="submit">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
