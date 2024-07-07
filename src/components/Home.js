import React from 'react';
import '../Home.css';

function Home() {
    return(
            <div className="home-container">
                <h2>Find Your Next DadaChef</h2>
                <input className="home-input" type="text" placeholder="Enter your city" />
                <input className="home-input" type="text" placeholder="Enter the type of cuisine" />
                <button className="home-button">Find Dada Chefs</button>
            </div>
    );
};

export default Home;