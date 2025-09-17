import React from 'react';
import './VendorDirectory.css';

const vendors = [
  {
    id: 1,
    name: 'Elite Caterers',
    type: 'Catering',
    rating: 4.8,
    contact: '+91 9876543210'
  },
  {
    id: 2,
    name: 'Royal Decorators',
    type: 'Decoration',
    rating: 4.7,
    contact: '+91 9876543211'
  },
  {
    id: 3,
    name: 'Perfect Shots Photography',
    type: 'Photography',
    rating: 4.9,
    contact: '+91 9876543212'
  },
  {
    id: 4,
    name: 'Music Makers DJ',
    type: 'Entertainment',
    rating: 4.6,
    contact: '+91 9876543213'
  }
];

const VendorDirectory = () => (
  <section className="vendor-section" id="vendors">
    <h2>Preferred Vendors</h2>
    <div className="vendor-list">
      {vendors.map(vendor => (
        <div className="vendor-card" key={vendor.id}>
          <h4>{vendor.name}</h4>
          <p>Type: {vendor.type}</p>
          <p>Rating: ⭐ {vendor.rating}</p>
          <p>Contact: <a href={`tel:${vendor.contact}`}>{vendor.contact}</a></p>
        </div>
      ))}
    </div>
  </section>
);

export default VendorDirectory;
