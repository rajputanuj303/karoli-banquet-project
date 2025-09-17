import React from 'react';
import './LocationMap.css';

const LocationMap = () => (
  <section className="location-section" id="location">
    <h2>Location & Directions</h2>
    <div className="map-container">
      <iframe
        title="Karoli Banquet Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019!2d77.209021!3d28.613939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zMjjCsDM2JzUwLjIiTiA3N8KwMTInMzIuNSJF!5e0!3m2!1sen!2sin!4v1631700000000!5m2!1sen!2sin"
        width="100%"
        height="300"
        style={{ border: 0, borderRadius: '12px' }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
      <p className="map-address">Karoli Banquet, Central City, Near Main Road, Delhi</p>
    </div>
  </section>
);

export default LocationMap;
