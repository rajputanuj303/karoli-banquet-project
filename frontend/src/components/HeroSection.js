import React from 'react';
import './HeroSection.css';

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-overlay">
      <h1>Karoli Banquet</h1>
      <p>Where Dreams Become Celebrations</p>
      <a href="#halls" className="hero-btn">Explore Venues</a>
    </div>
    <video 
      className="hero-video" 
      autoPlay 
      loop 
      muted 
      playsInline
      poster="/images/halls/Scene 10.png"
    >
      <source src="/videos/Banquet.mp4" type="video/mp4" />
      <div className="video-fallback">
        <img src="/images/halls/Scene 10.png" alt="Karoli Banquet Hall" />
      </div>
    </video>
  </section>
);

export default HeroSection;
