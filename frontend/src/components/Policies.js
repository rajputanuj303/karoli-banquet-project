import React from 'react';
import './Policies.css';

const policies = [
  {
    title: 'Cancellation Policy',
    text: 'Full refund for cancellations up to 7 days before the event. Partial refund for cancellations within 7 days.'
  },
  {
    title: 'COVID/Force Majeure',
    text: 'Events affected by government restrictions will be rescheduled or refunded as per guidelines.'
  },
  {
    title: 'Payment & Refunds',
    text: 'Deposit required to confirm booking. Refunds processed within 7 business days.'
  }
];

const Policies = () => (
  <section className="policies-section" id="policies">
    <h2>Our Policies</h2>
    <div className="policies-list">
      {policies.map((policy, idx) => (
        <div className="policy-card" key={idx}>
          <h4>{policy.title}</h4>
          <p>{policy.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Policies;
