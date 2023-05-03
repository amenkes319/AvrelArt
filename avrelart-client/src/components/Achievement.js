import React from 'react';
import './Achievement.css';

const Achievement = ({ achievement }) => {
  return (
    <div className="achievement">
      <h3>{achievement.title}</h3>
      <p>{achievement.description}</p>
    </div>
  );
};

export default Achievement;
