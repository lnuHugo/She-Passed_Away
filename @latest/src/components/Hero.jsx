import React from 'react'

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>She Past Away</h1>
        <p>Gothic Rock Band</p>
        <p>Darkwave | Post-punk | Coldwave</p>
        <button className="btn">Listen Now</button>
      </div>
      <div className="image-container">
        <img
          className="band-image"
          src="./assets/ShePastAwayBanner.jpg"
          alt="She Past Away"
        />
      </div>
    </div>
  );
};

export default Hero;

