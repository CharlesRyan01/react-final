import React from 'react';
import './HomePage.css'; // Import the CSS file for styling

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="header">
        <h1>Welcome to TicketMaster</h1>
      </header>
      <main className="main-content">
        <h2>Find Your Perfect Event</h2>
        <p>
          Discover a world of live entertainment with TicketMaster. From concerts and sports events to theater and family shows, we have tickets for all your favorite events.
        </p>
      </main>
      <footer className="footer">
        <p>&copy; 2024 TicketMaster. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
