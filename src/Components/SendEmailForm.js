import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function SendEmailForm() {
  const form = useRef();

  const MySwal = withReactContent(Swal);

  const formValidation = ({ email }) => {
    // https://www.w3resource.com/javascript/form/email-validation.php regex font
    const validFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email.value);

    if (!validFormat) {
      throw new Error('Email inválido !!');
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    try {
      formValidation(form.current);
      emailjs.sendForm('service_6o2g60e', 'template_7ld4xcs', form.current, 'U7OaEFdK6RdfyETmn');
    } catch (error) {
      MySwal.fire({
        title: `${error.message}`,
        text: 'Por favor insira um email válido.',
        icon: 'warning',
        background: '#f0f6f6',
        confirmButtonColor: '#0b4b83',
        showCloseButton: true,
        returnFocus: false,
        color: '#2b2b2b',
      });
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div>
        <label htmlFor="name">
          Nome
          <input type="text" id="name" placeholder="Escreva seu nome" required="required" />
        </label>
      </div>
      <div>
        <label htmlFor="email">
          Email
          <input type="text" id="email" placeholder="Escreva seu email" required="required" />
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
  );
}

export default SendEmailForm;
