import React, { useEffect, useRef, useState } from 'react';
import './Stats.css';

const StatNumber = ({ value, label, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const frameRef = useRef();

  useEffect(() => {
    const animate = () => {
      const step = value / 50;
      countRef.current += step;
      
      if (countRef.current < value) {
        setCount(Math.floor(countRef.current));
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [value]);

  return (
    <div className="stat-item">
      <div className="stat-number">
        {count}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const Stats = () => {
  return (
    <div className='stats-conatiner'>
    <div className="stats-grid">
      <StatNumber value={4.5} label="80k Reviews" suffix="" /><span className='partion'>|</span>
      <StatNumber value={30} label="Enrollments" suffix="M" /><span className='partion'>|</span>
      <StatNumber value={2} label="Learners" suffix="M+" /><span className='partion'>|</span>
      <StatNumber value={1} label="Popular Courses" suffix="k+" />
    </div>
    </div>
  );
};

export default Stats;