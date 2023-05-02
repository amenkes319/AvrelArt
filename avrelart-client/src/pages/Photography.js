import React, { useEffect, useState } from 'react';
import Photograph from '../components/Photograph';
import './Photography.css';

const Photography = () => {
  const [photographs, setPhotographs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/photographs')
      .then((response) => response.json())
      .then((data) => setPhotographs(data));
  }, []);

  const type = window.location.pathname.split('/').pop();
  const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <div className="photographs">
      <h1 className="photographs-title">{capitalizedType}</h1>
      {photographs.filter((photograph) => photograph.type === type).map((photograph) => (
        <Photograph key={photograph.id} photograph={photograph} />
      ))}
    </div>
  );
};

export default Photography;
