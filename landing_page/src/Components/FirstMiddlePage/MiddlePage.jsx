import React from 'react';
import './MiddlePage.css'

const MiddlePage = () => {
    return (
      <main className="main-content">
      <div className="hero-text">
        <h1>Improve your<br/> <span className="highlight">Skills</span> Faster</h1>
      </div>
        <div className='description'>
        <p>Speed Up The Skill Acquisition Process By <br/> Finding Unlimited Courses That Match <br/> Your Niche.</p>
        <button className="enroll-button">Enroll Now →</button>
        </div>

      <div className="hero-image">
        <div className="illustration">
          {/* Image illustrations or mockups */}
        </div>
      </div>
    </main>
    );
}

export default MiddlePage;
