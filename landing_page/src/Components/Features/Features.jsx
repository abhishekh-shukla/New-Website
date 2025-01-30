import React from 'react';
import './Features.css';

const Features = () => (
  <section className="features" id="features">
    <div className="container">
      <h2>Our Special Features</h2>
      <div className="features-grid">
        <div className="feature-card">
          <h3>🎓 Amazing Instructors</h3>
          <p>Learn from industry experts</p>
        </div>
        <div className="feature-card">
          <h3>🛎️ Lifetime Support</h3>
          <p>24/7 learning support</p>
        </div>
        <div className="feature-card">
          <h3>🎥 Video Lessons</h3>
          <p>HD quality recordings</p>
        </div>
      </div>
    </div>
  </section>
);

export default Features;