import React from 'react';
import './MiddlePage.css'

const MiddlePage = () => {
    return (
      <main className="main-content">
      <div className="hero-text">
        <h1>Improve your<br/> <span className="highlight"> Skills </span> Faster</h1>
      </div>
        <div className='description'>
        <p>Speed Up The Skill Acquisition Process By <br/> Finding Unlimited Courses That Match <br/> Your Niche.</p>
        <button className="enroll-button">Enroll Now →</button>
        </div>

      <div className="hero-image">
        <div className="illustration">
<<<<<<< HEAD
          <img src={"/Images/middleimage.jpg"} alt="My Image" className='middle-image'/>
=======
          <img src={"/Images/MiddleImage"} alt="My Image" />
>>>>>>> 9a37b44d0f04a663c0ceb2e9dbc8d229211410c0
        </div>
      </div>
    </main>
    );
}

export default MiddlePage;