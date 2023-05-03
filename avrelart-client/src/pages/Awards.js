import React from 'react'
import { useState, useEffect } from 'react';
import Achievement from '../components/Achievement';
import './Awards.css';

function Awards() {
  const [awards, setAwards] = useState([]);
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/achievements/type/awards')
      .then((response) => response.json())
      .then((data) => setAwards(data));
  }, []);

  useEffect(() => {
    fetch('http://localhost:3001/api/achievements/type/publications')
      .then((response) => response.json())
      .then((data) => setPublications(data));
  }, []);

  return (
    <div className="container">
      <div className="awards">
        <h2>Awards</h2>
        {awards.map((award) => (
          <Achievement key={award.id} achievement={award} />
        ))}
      </div>
      <div className="publications">
        <h2>Publications</h2>
        {publications.map((publication) => (
          <Achievement key={publication.id} achievement={publication} />
        ))}
      </div>
    </div>
  );
}

export default Awards