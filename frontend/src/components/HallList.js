import React from 'react';
import './HallList.css';

const halls = [
  {
    id: 1,
    name: 'Grand Hall',
    capacity: 500,
    pricing: '₹1,50,000',
    layout: 'Banquet',
    image: '/images/halls/Scene 10.png',
    virtualTourUrl: '#'
  },
  {
    id: 2,
    name: 'Royal Hall',
    capacity: 300,
    pricing: '₹1,00,000',
    layout: 'Theatre',
    image: '/images/halls/Scene 11.png',
    virtualTourUrl: '#'
  },
  {
    id: 3,
    name: 'Classic Hall',
    capacity: 150,
    pricing: '₹60,000',
    layout: 'Classroom',
    image: '/images/halls/Scene 12.png',
    virtualTourUrl: '#'
  },
  {
    id: 4,
    name: 'Premium Hall',
    capacity: 200,
    pricing: '₹80,000',
    layout: 'Mixed',
    image: '/images/halls/Scene 16.png',
    virtualTourUrl: '#'
  },
  {
    id: 5,
    name: 'Luxury Hall',
    capacity: 400,
    pricing: '₹1,20,000',
    layout: 'Banquet',
    image: '/images/halls/Scene 17.png',
    virtualTourUrl: '#'
  },
  {
    id: 6,
    name: 'Elite Hall',
    capacity: 250,
    pricing: '₹90,000',
    layout: 'Theatre',
    image: '/images/halls/Scene 5.png',
    virtualTourUrl: '#'
  }
];

const HallList = () => (
  <section className="hall-list-section" id="halls">
    <h2>Our Venues & Halls</h2>
    <div className="hall-list">
      {halls.map(hall => (
        <div className="hall-card" key={hall.id}>
          <img src={hall.image} alt={hall.name} className="hall-image" />
          <div className="hall-info">
            <h3>{hall.name}</h3>
            <p>Capacity: {hall.capacity}</p>
            <p>Pricing: {hall.pricing}</p>
            <p>Layout: {hall.layout}</p>
            <a href={hall.virtualTourUrl} className="hall-tour-btn">Virtual Tour</a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default HallList;
