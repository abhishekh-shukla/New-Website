import React from 'react';
import './Courses.css';

const Courses = () => (
  <section className="courses" id="courses">
    <div className="container">
      <h2>Popular Courses</h2>
      <div className="course-grid">
        {[1, 2, 3].map((item) => (
          <div className="course-card" key={item}>
            <h3>Learn English: Beginning Grammar</h3>
            <p>Master basic grammar rules</p>
            <button className="enroll-btn">Enroll Now</button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Courses;