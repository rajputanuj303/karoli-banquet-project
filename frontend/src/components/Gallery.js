import React, { useState } from 'react';
import './Gallery.css';

const galleryData = [
  { id: 1, type: 'Wedding', image: '/images/gallery/weddings/img1.jpg' },
  { id: 2, type: 'Wedding', image: '/images/gallery/weddings/img2.jpg' },
  { id: 3, type: 'Wedding', image: '/images/gallery/weddings/img3.jpg' },
  { id: 4, type: 'Wedding', image: '/images/gallery/weddings/img4.jpg' },
  { id: 5, type: 'Wedding', image: '/images/gallery/weddings/img5.jpg' },
  { id: 6, type: 'Birthday', image: '/images/gallery/birthdays/img1.jpg' },
  { id: 7, type: 'Birthday', image: '/images/gallery/birthdays/img2.jpg' },
  { id: 8, type: 'Birthday', image: '/images/gallery/birthdays/img3.jpg' },
  { id: 9, type: 'Corporate', image: '/images/gallery/corporate/img1.jpg' },
  { id: 10, type: 'Corporate', image: '/images/gallery/corporate/img2.jpg' },
  { id: 11, type: 'Corporate', image: '/images/gallery/corporate/img3.jpg' }
];

const eventTypes = ['All', 'Wedding', 'Birthday', 'Corporate'];

const Gallery = () => {
  const [filter, setFilter] = useState('All');

  const filteredImages =
    filter === 'All'
      ? galleryData
      : galleryData.filter(img => img.type === filter);

  return (
    <section className="gallery-section" id="gallery">
      <h2>Event Gallery</h2>
      <div className="gallery-filters">
        {eventTypes.map(type => (
          <button
            key={type}
            className={filter === type ? 'active' : ''}
            onClick={() => setFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <div className="gallery-grid">
        {filteredImages.map(img => (
          <div className="gallery-card" key={img.id}>
            <img src={img.image} alt={img.type} className="gallery-img" />
            <span className="gallery-type">{img.type}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
