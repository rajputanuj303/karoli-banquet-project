import React, { useState } from 'react';
import './QuickContact.css';

const QuickContact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Here you would send the form data to your backend API
    setSubmitted(true);
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Quick Contact</h2>
      {submitted ? (
        <p className="contact-success">Thank you! We will get back to you soon.</p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required />
          <button type="submit">Send</button>
        </form>
      )}
    </section>
  );
};

export default QuickContact;
