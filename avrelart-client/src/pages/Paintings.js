// Paintings.js
import React, { useState, useEffect } from 'react';
import Painting from '../components/Painting';
import './Paintings.css';

const Paintings = () => {
    const [paintings, setPaintings] = useState([]);

    useEffect(() => {
        fetchPaintings();
    }, []);

    const fetchPaintings = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/paintings');
            const data = await response.json();
            console.log(data);
            setPaintings(data);
        } catch (error) {
            console.error('Error fetching paintings:', error);
        }
    };

    const type = window.location.pathname.split('/').pop();
    const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);


    return (
        <div className="paintings">
            <h1 className="paintings-title">{capitalizedType}</h1>
            {paintings.filter((painting) => painting.type === type).map((painting) => (
                <Painting key={painting.id} painting={painting} />
            ))}
        </div>
    );
};

export default Paintings;
