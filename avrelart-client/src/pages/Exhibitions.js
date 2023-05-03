import React, { useEffect, useState } from 'react';
import Achievement from '../components/Achievement';
import './Exhibitions.css';

const Exhibitions = () => {
  const [exhibitions, setExhibitions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/achievements/type/exhibitions')
      .then((response) => response.json())
      .then((data) => setExhibitions(data));
  }, []);

  return (
    <div className="exhibitions">
      {exhibitions.map((exhibition) => (
        <Achievement key={exhibition.id} achievement={exhibition} />
      ))}
    </div>
  );
};

export default Exhibitions;
