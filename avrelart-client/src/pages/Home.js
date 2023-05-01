import React from 'react';
import Navbar from '../components/Navbar';
import './Home.css';

const Home = () => {
    return (
        <div>
            <section className="hero">
                <img src="logo192.png" alt="Highlighted Painting" className="hero-image" />
            </section>
            <section className="welcome">
                <h1>Welcome to Avrel Art Studio</h1>
                <p>"I dream of painting and then I paint my dream" - Vincent van Gogh</p>
            </section>
        </div>
    );
};

export default Home;
