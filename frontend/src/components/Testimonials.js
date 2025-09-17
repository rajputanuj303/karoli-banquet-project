import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Priya Sharma',
    text: 'Karoli Banquet made our wedding magical! The staff was attentive and the decor was stunning.'
  },
  {
    name: 'Rahul Verma',
    text: 'Spacious halls, great food, and seamless booking. Highly recommended for any event.'
  },
  {
    name: 'Anjali Singh',
    text: 'The virtual tour helped us choose the perfect hall. Everything was smooth and professional.'
  }
];

const Testimonials = () => (
  <section className="testimonials-section">
    <h2>What Our Guests Say</h2>
    <div className="testimonials-list">
      {testimonials.map((t, idx) => (
        <div className="testimonial-card" key={idx}>
          <p className="testimonial-text">"{t.text}"</p>
          <p className="testimonial-name">- {t.name}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
