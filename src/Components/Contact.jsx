import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4ifpua3', 'template_ppwhvqn', form.current, 'f4hVdxQ_CUCwx3hLJ')
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Contact Me</h1>

      <form ref={form} onSubmit={sendEmail} style={formStyle}>
        <input type="text" name="user_name" placeholder="Your Name" required style={inputStyle} />
        <input type="email" name="user_email" placeholder="Your Email" required style={inputStyle} />
        <textarea name="message" placeholder="Your Message" required style={textareaStyle}></textarea>
        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>
    </div>
  );
};

// Styles
const containerStyle = {
  padding: '50px',
  maxWidth: '600px',
  margin: '0 auto'
};

const headingStyle = {
  fontSize: '36px',
  marginBottom: '30px',
  textAlign: 'center'
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px'
};

const inputStyle = {
  padding: '15px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  fontSize: '16px'
};

const textareaStyle = {
  padding: '15px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  fontSize: '16px',
  minHeight: '150px'
};

const buttonStyle = {
  padding: '15px',
  backgroundColor: '#4CAF50',
  color: 'white',
  fontSize: '18px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

export default Contact;
