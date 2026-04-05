import React from 'react';
import profile from '../assets/profile.jpeg';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <img src={profile} alt="Asmeeta" className="hero-img" />
      <h1>Asmeeta Mistri</h1>
      <h2>Mobile Application Developer | 3+ Years Experience</h2>
      <p>Melbourne, Australia</p>
      <p>
        Building scalable iOS & Android apps with focus on performance,
        reliability, and clean architecture.
      </p>
    </section>
  );
};

export default Hero;