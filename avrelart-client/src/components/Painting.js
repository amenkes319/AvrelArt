// Painting.js
import React from 'react';
import './Painting.css';

const Painting = ({ painting }) => {
  return (
    <div className="painting">
      <img
        src={`http://localhost:3001/api/paintings/images/${painting.filename}`}
        alt={painting.title}
        className="painting-image"
      />
      <div className="painting-info">
        <h2 className="painting-title">{painting.title}</h2>
        <p className="painting-size">Size: {painting.size}</p>
        <p className="painting-medium">Medium: {painting.medium}</p>
        <p className="painting-description">{painting.description}</p>
      </div>
    </div>
  );
};

export default Painting;
