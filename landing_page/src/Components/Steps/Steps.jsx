import React from 'react';
import './Steps.css';

const Steps = () => (
  <section className="steps">
    <div className="container">
      <h2>Start Learning in 3 Steps</h2>
      <div className="steps-grid">
        <div className="step">
          <div className="step-number">1</div>
          <h3>Create Account</h3>
        </div>
        <div className="step">
          <div className="step-number">2</div>
          <h3>Purchase Lessons</h3>
        </div>
        <div className="step">
          <div className="step-number">3</div>
          <h3>Start Learning</h3>
        </div>
      </div>
    </div>
  </section>
);

export default Steps;