import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contacto.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_36gpmhq', 'template_uz549af', e.target, 'MOPhU1WgO2xi4Sx6S')
      .then((result) => {
        console.log(result.text);
        alert("Email enviado exitosamente");
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      }, (error) => {
        console.log(error.text);
        alert("Ocurrió un error al enviar el email");
      });
  };

  return (
    <form onSubmit={handleSubmit} id="contact-form">
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Mensaje:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default ContactForm;
