import React from 'react';
import './FAQ.css';

const faqs = [
  {
    question: 'What is the cancellation policy?',
    answer: 'You can cancel up to 7 days before the event for a full refund. See our policies for details.'
  },
  {
    question: 'Do you offer COVID safety measures?',
    answer: 'Yes, we follow all government guidelines and offer sanitization, masks, and social distancing.'
  },
  {
    question: 'How do I get to Karoli Banquet?',
    answer: 'We are located at the heart of the city. See our map and directions section for details.'
  },
  {
    question: 'Can I bring my own vendors?',
    answer: 'We have a preferred vendor list, but you may bring your own with prior approval.'
  }
];

const FAQ = () => (
  <section className="faq-section" id="faq">
    <h2>Frequently Asked Questions</h2>
    <div className="faq-list">
      {faqs.map((faq, idx) => (
        <div className="faq-card" key={idx}>
          <h4>{faq.question}</h4>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FAQ;
