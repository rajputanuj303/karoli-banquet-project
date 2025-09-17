import React, { useState } from 'react';
import './UserAccount.css';

const UserAccount = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({ email: '', password: '', name: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Here you would call your backend API for login/register
    setUser({ name: form.name || 'User', email: form.email });
  };

  const handleLogout = () => {
    setUser(null);
    setForm({ email: '', password: '', name: '' });
  };

  if (user) {
    return (
      <section className="user-account-section" id="account">
        <h2>My Account</h2>
        <div className="account-info">
          <h3>Welcome, {user.name}!</h3>
          <div className="account-menu">
            <button>Past Bookings</button>
            <button>Invoices</button>
            <button>Messages</button>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="user-account-section" id="account">
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <form className="account-form" onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
        <p>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span onClick={() => setIsLogin(!isLogin)} className="toggle-link">
            {isLogin ? 'Register' : 'Login'}
          </span>
        </p>
      </form>
    </section>
  );
};

export default UserAccount;
