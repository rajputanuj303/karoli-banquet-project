import React, { useState } from 'react';
import './SearchAvailability.css';

const halls = [
  { id: 1, name: 'Grand Hall' },
  { id: 2, name: 'Royal Hall' },
  { id: 3, name: 'Classic Hall' }
];

const SearchAvailability = () => {
  const [selectedHall, setSelectedHall] = useState('');
  const [date, setDate] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = e => {
    e.preventDefault();
    // Here you would call your backend API to check availability
    setResult('Available! (Demo)');
  };

  return (
    <section className="search-section">
      <h2>Search Hall Availability</h2>
      <form className="search-form" onSubmit={handleSearch}>
        <select value={selectedHall} onChange={e => setSelectedHall(e.target.value)} required>
          <option value="">Select Hall</option>
          {halls.map(hall => (
            <option key={hall.id} value={hall.name}>{hall.name}</option>
          ))}
        </select>
        <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
        <button type="submit">Check Availability</button>
      </form>
      {result && <p className="search-result">{result}</p>}
    </section>
  );
};

export default SearchAvailability;
