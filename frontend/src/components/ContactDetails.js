import React from 'react';
import './ContactDetails.css';

const ContactDetails = () => (
  <section className="contact-details-section" id="contact-details">
    <h2>Contact & Business Hours</h2>
    <div className="contact-details-list">
      <div>
        <strong>Phone:</strong> <a href="tel:+911234567890">+91 12345 67890</a>
      </div>
      <div>
        <strong>Email:</strong> <a href="mailto:info@karolibanquet.com">info@karolibanquet.com</a>
      </div>
      <div>
        <strong>Business Hours:</strong> Mon-Sun, 9:00 AM - 10:00 PM
      </div>
      <div>
        <a href="tel:+911234567890" className="call-btn">Call Now</a>
      </div>
    </div>
  </section>
);

export default ContactDetails;
