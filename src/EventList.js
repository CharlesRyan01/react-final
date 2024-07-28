import React, { useEffect, useState } from 'react';
import './eventlist.css'; 
import { useNavigate } from 'react-router-dom';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const navigate=useNavigate()

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await fetch('http://localhost:8000/cap/event/');
      const data = await res.json();
      setEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const generateTicket = (event) => {
    alert(`Ticket generated for ${event.title}`);
    navigate('/ticket')
  };

  return (
    console.log("happy"),
    <div className="event-list-container">
      <h1>Welcome!</h1>
      <h2>Event List</h2>
      <ul className="event-list">
        {events.map((event) => (
          <li key={event.id} className="event-item">
            <h3 className="event-title">Title: {event.title}</h3>
            <p className="event-description">Description: {event.description}</p>
            <p className="event-date">Date: {event.date}</p>
            <p className="event-location">Location: {event.location}</p>
            <button className="generate-ticket-btn" onClick={() => generateTicket(event)}>Generate Ticket</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
