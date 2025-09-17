import React, { useState } from 'react';
import './BookingFlow.css';

const steps = [
  'Get Quote',
  'Select Package',
  'Choose Extras',
  'Payment',
  'Confirmation'
];

const BookingFlow = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ name: '', email: '', date: '', package: '', extras: [] });
  const [confirmed, setConfirmed] = useState(false);

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1);
    else setConfirmed(true);
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className="booking-section" id="booking">
      <h2>Book Your Event</h2>
      <div className="booking-steps">
        {steps.map((s, idx) => (
          <div key={idx} className={`booking-step${step === idx ? ' active' : ''}`}>{s}</div>
        ))}
      </div>
      {!confirmed ? (
        <form className="booking-form" onSubmit={e => { e.preventDefault(); handleNext(); }}>
          {step === 0 && (
            <>
              <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
              <input type="date" name="date" value={form.date} onChange={handleChange} required />
              <button type="submit">Get Quote</button>
            </>
          )}
          {step === 1 && (
            <>
              <select name="package" value={form.package} onChange={handleChange} required>
                <option value="">Select Package</option>
                <option value="Silver">Silver</option>
                <option value="Gold">Gold</option>
                <option value="Platinum">Platinum</option>
              </select>
              <button type="submit">Next</button>
            </>
          )}
          {step === 2 && (
            <>
              <label><input type="checkbox" name="extras" value="DJ" /> DJ</label>
              <label><input type="checkbox" name="extras" value="Photography" /> Photography</label>
              <label><input type="checkbox" name="extras" value="Extra Hours" /> Extra Hours</label>
              <button type="submit">Next</button>
            </>
          )}
          {step === 3 && (
            <>
              <p>Pay deposit or full amount (demo)</p>
              <button type="submit">Pay & Confirm</button>
            </>
          )}
        </form>
      ) : (
        <div className="booking-confirmation">
          <h3>Booking Confirmed!</h3>
          <p>Your booking is successful. A confirmation and e-receipt will be sent to your email.</p>
        </div>
      )}
    </section>
  );
};

export default BookingFlow;
