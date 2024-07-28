import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul>
         <li><Link to="/home">Home</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/event">Events</Link></li>
          <li><Link to="/ticket">Tickets</Link></li>
        </ul>
      </nav>
      <main>
        <Outlet/>
      </main>
    </>
  );
};

export default Navbar;
