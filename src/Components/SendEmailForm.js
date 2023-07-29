import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function SendEmailForm() {
  const form = useRef();
  const [count, setCount] = useState(0);

  const MySwal = withReactContent(Swal);

  const currentCharacters = () => {
    const max = 500;
    return <span>{`${count}/${max}`}</span>;
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    const counted = value.length;
    setCount(counted);
  };

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
      emailjs.sendForm('service_6o2g60e', 'template_ul1ggvc', form.current, 'U7OaEFdK6RdfyETmn');
      MySwal.fire({
        title: 'Email enviado com sucesso!',
        icon: 'success',
        background: '#f0f6f6',
        confirmButtonColor: '#0b4b83',
        showCloseButton: true,
        returnFocus: false,
        color: '#2b2b2b',
      });
      form.current.reset();
      setCount(0);
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

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      sendEmail(e);
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div>
        <label htmlFor="name">
          Nome
          <input type="text" id="name" name="name" placeholder="Escreva seu nome" required="required" />
        </label>
      </div>
      <div>
        <label htmlFor="email">
          Email
          <input type="text" id="email" name="email" placeholder="Escreva seu email" required="required" />
        </label>
      </div>
      <div>
        <label htmlFor="message">
          Mensagem
          <textarea
            onChange={handleChange}
            onKeyUp={handleKey}
            type="textarea"
            id="message"
            name="message"
            placeholder="Escreva sua mensagem (Use Shift + Enter para quebrar linha e Enter para enviar o formulário)"
            maxLength={500}
            required="required"
            rows={10}
            cols={30}
          />
        </label>
      </div>
      <div className="characters-counter-div">{currentCharacters()}</div>
      <div className="contact-button-div">
        <button type="submit">
          Enviar
        </button>
      </div>
    </form>
  );
}

export default SendEmailForm;
