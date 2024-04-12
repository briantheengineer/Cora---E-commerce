import React from 'react';
import "./Contact.css";

function Contact() {
  return (
    <div className='contact-container'>
      <h1>Contact Us</h1>
      <h3>If you have any questions or inquiries, feel free to contact us:</h3>
      <div className='contact-info'>
        <h4>Email: contact@example.com</h4>
        <h4>Phone: +1 (555) 123-4567</h4>
        <p>We're available Monday to Friday, 9am to 5pm.</p>
      </div>
    </div>
  );
}

export default Contact;
