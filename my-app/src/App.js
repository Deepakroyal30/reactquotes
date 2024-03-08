// App.js
import React from 'react';
import logo2 from './logo2.svg'; // Import the image file
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="nav-bar">
        {/* Use the imported image in the img tag */}
        <div className="logo-container">
          <img src={logo2} alt="Logo" className="logo" />
          <span className="brand"><a href='https://geekfood.vercel.app/'>GeekFoods</a></span>
        </div>
        <ul className="ulStyle">
          <li>Home</li>
          <li>Quote</li>
          <li>Restaurants</li>
          <li>Foods</li>
          <li>Contact</li>
        </ul>
        <button className="get-started-button">Get Started</button>
      </header>
    </div>
  );
}

export default App;
