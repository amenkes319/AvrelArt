import React from 'react';
import './Photograph.css';

const Photograph = ({ photograph }) => {
  return (
    <div className="photograph">
      <img src={`http://localhost:3001/api/photographs/images/${photograph.filename}`} alt={photograph.title} className="photograph-image" />
      <div className="photograph-info">
        <h3 className="photograph-title">{photograph.title}</h3>
        <p className="photograph-description">{photograph.description}</p>
      </div>
    </div>
  );
};

export default Photograph;
