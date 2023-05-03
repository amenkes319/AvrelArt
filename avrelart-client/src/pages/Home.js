import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <section className="welcome">
                <div className="welcome-content">
                    <h1>AVREL ART</h1>
                    <h2>Welcome to Avrel Art Studio</h2>
                    <p>"I dream of painting and then I paint my dream" - Vincent van Gogh</p>
                </div>
                <img src="eruption.png" alt="Featured Painting" className="featured-image" />
            </section>
        </div>
    );
};

export default Home;
